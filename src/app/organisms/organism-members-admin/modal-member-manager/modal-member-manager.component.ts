import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { IonicModule, IonSelect, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Check, Member } from '../../../models/member.model';
// import { SubscriptionService } from '../../../services/subscription.service';
import { PaymentMethods } from '../../../models/payment-methods.enum';
import { Course } from '../../../models/courses.model';
import { ModalDelete } from '../modal-delete/modal-delete.component';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';

@Component({
  selector: 'member-manager',
  templateUrl: './modal-member-manager.component.html',
  styleUrls: ['./modal-member-manager.component.scss'],
})
export class ModalMemberManagerPage implements OnInit {
  // public memberEditionForm: FormGroup = new FormGroup({});
  public memberEditionForm: FormGroup;
  public checkForm: FormArray = new FormArray([]);
  public coursesForm: FormArray = new FormArray([]);
  public member: Member;
  public courseList: Course[];
  public checkList: Check[] = [];
  public memberId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public memberError: boolean;
  public paymentMethods = PaymentMethods;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    private fb: FormBuilder,
    // private subscriptionService: SubscriptionService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    console.log('this.member', this.member.courses);
    console.log('this.member', this.courseList);
    this.isLoading = true;
    this._initMemberEditionForm();
  }

  public onSelectCourse(event: IonSelect, value: any): void {
    console.log(event, value);
  }

  public onSubmit(): void {
    if (this.checkForm.value.length) {
      this.checkForm.value.forEach((value: Check, index: number) => {
        this.member.checks[index].depositMade = value.depositMade;
        this.member.checks[index].depositDate = value.depositMade
          ? value.depositDate
          : null;
      });
    }

    // if (this.courseForm.value.length) {
    //   this.checkForm.value.forEach((value: Check, index: number) => {
    //     this.member.checks[index].depositMade = value.depositMade;
    //     this.member.checks[index].depositDate = value.depositMade
    //       ? value.depositDate
    //       : null;
    //   });
    // }

    this.member.firstName = this.memberEditionForm.get('firstName').value;
    this.member.lastName = this.memberEditionForm.get('lastName').value;
    this.member.phone = this.memberEditionForm.get('phone').value;
    this.member.email = this.memberEditionForm.get('email').value;
    this.member.courses = this.memberEditionForm.get('courses').value;
    this.member.paymentMethod =
      this.memberEditionForm.get('paymentMethod').value;
    this.member.paymentAmount =
      this.memberEditionForm.get('paymentAmount').value;
    this.member.extraInfo = this.memberEditionForm.get('extraInfo').value;

    console.log('submit member', this.member);

    this.modalCtrl.dismiss({
      dismissed: this.CONFIRM,
      member: { ...this.member },
    });
  }

  public onDepositMade(event, checkIndex: number): void {
    this.checkList[checkIndex].depositMade = event.detail.checked;
    if (!event.detail.checked) {
      this.checkList[checkIndex].depositDate = null;
    }
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        contentData: this.member,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    if (data.dismissed === this.CONFIRM_DELETE) {
      // !!! Not sure why but the setTimeout is needed, probably asynchronous stuff...
      setTimeout(() => {
        this.modalCtrl.dismiss({
          dismissed: this.CONFIRM_DELETE,
          member: this.member,
        });
      });
    }
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.CANCEL,
    });
  }

  // WAITING LIST
  public toggleWaitingList(event: CustomEvent): void {
    const courseItem = this.member.courses.find(
      (course) => course.courseId === event.detail.value.courseId
    );
    courseItem.waitingList = !courseItem.waitingList;
  }

  // Getting the courses control
  get coursesFormArray(): FormArray {
    return this.memberEditionForm.get('courses') as FormArray;
  }

  get memberCoursesId(): string[] {
    return this.member.courses.map(({ courseId }) => courseId);
  }

  ////////////
  // PRIVATE
  ////////////
  private _initMemberEditionForm(): void {
    // this.courseList = this.member.course;
    // this.artisticPractices.forEach((pra) => {
    //   this.practiceList.find((practice) => pra === practice)
    //     ? this.practiceForm.push(
    //         this.fb.control(
    //           this.practiceList.find((practice) => pra === practice)
    //         )
    //       )
    //     : this.practiceForm.push(this.fb.control(null));
    // });

    if (this.member.checks.length) {
      this.checkList = this.member.checks;
      this.checkList.forEach((check, i) => {
        let updateDepositDate: undefined | string | null | Date;
        if (
          this.member.checks[i].depositDate === null ||
          this.member.checks[i].depositDate === undefined
        ) {
          updateDepositDate = null;
        } else if (typeof this.member.checks[i].depositDate === 'string') {
          updateDepositDate = this.member.checks[i].depositDate;
        } else {
          updateDepositDate =
            this.member.checks[i].depositDate.toLocaleDateString();
        }

        const checkFormGroup: FormGroup = new FormGroup({
          depositMade: this.fb.control(this.member.checks[i].depositMade),
          depositDate: this.fb.control(updateDepositDate),
        });
        this.checkForm.push(checkFormGroup);
      });
    }

    // FORMATED DATES
    const formatedSubscriptionRequestDate = new Date(
      this.member.subscriptionRequestDate
    ).toLocaleDateString();

    let formatedSubscriptionDate: string | Date = this.member.subscriptionDate;
    if (this.member.subscriptionDate) {
      formatedSubscriptionDate = new Date(
        this.member.subscriptionRequestDate
      ).toLocaleDateString();
    }

    this.memberEditionForm = this.fb.group({
      firstName: this.fb.control(this.member.firstName, Validators.required),
      lastName: this.fb.control(this.member.lastName, Validators.required),
      email: this.fb.control(this.member.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: this.fb.control(this.member.phone, Validators.required),
      // this.fb.control(this.member.courses)
      courses: this.coursesForm,
      paymentMethod: this.fb.control(
        this.member.paymentMethod,
        Validators.required
      ),
      checks: this.checkForm,
      paymentAmount: this.fb.control(this.member.paymentAmount),
      extraInfo: this.fb.control(this.member.extraInfo),
      season: this.fb.control(this.member.season),
      subscriptionDate: this.fb.control({
        value: formatedSubscriptionDate,
        disabled: true,
      }),
      subscriptionRequestDate: this.fb.control(
        { value: formatedSubscriptionRequestDate, disabled: true },
        Validators.required
      ),
    });

    console.log(this.member, this.memberEditionForm.value.courses);

    this.isLoading = false;
  }

  // private _getMemberData(): void {
  //   this.subscriptionService.getMemberData(this.memberId).subscribe(
  //     (result) => {
  //       this.isLoading = false;
  //       this.showDialog = true;
  //       this.member = result.member;
  //     },
  //     (err) => {
  //       this.isLoading = false;
  //       this.memberError = true;
  //     }
  //   );
  // }
}

@NgModule({
  declarations: [ModalMemberManagerPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    IonicModule,
    AtomAsteriskModule,
  ],
  exports: [],
  providers: [],
})
export class MemberManagerModule {}

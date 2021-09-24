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
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Check, Member } from '../../../models/member.model';
import { SubscriptionService } from '../../../services/subscription.service';
import { PaymentMethods } from '../../../models/payment-methods.enum';
import { Course } from '../../../models/courses.model';
import { ModalDelete } from '../modal-delete/modal-delete.component';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';

@Component({
  selector: 'member-manager',
  templateUrl: './modal-course-manager.component.html',
  styleUrls: ['./modal-course-manager.component.scss'],
})
export class ModalCourseManagerPage implements OnInit {
  public memberEditionForm: FormGroup = new FormGroup({});
  public checkForm: FormArray = new FormArray([]);
  public courseForm: FormArray = new FormArray([]);
  public member: Member;
  public checkList: Check[] = [];
  public memberId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public memberError: boolean;
  public paymentMethods = PaymentMethods;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  public courseList: Course[] = [
    // {
    //   id: '1',
    //   detail: 'Lundi 18h30-20h30 : Théâtre avec Jérôme Chambon',
    //   name: 'lundi 18h30',
    // },
    // {
    //   id: '2',
    //   detail: 'Lundi 20h30-22h30 : Théâtre avec Jérôme Chambon',
    //   name: 'lundi 20h30',
    // },
    // {
    //   id: '3',
    //   detail: 'Mardi 18h30-20h30 : Chœur de femme avec Charlotte Lasnier',
    //   name: 'mardi 18h30',
    // },
    // {
    //   id: '4',
    //   detail: 'Mardi 20h30-23h : Cie Amateur avec Côme Tanguy (danse-théâtre)',
    //   name: 'mardi 20h30',
    // },
    // {
    //   id: '5',
    //   detail: 'Mercredi 18h30-20h30 : Danse-théâtre avec Côme Tanguy',
    //   name: 'mercredi 18h30',
    // },
    // {
    //   id: '6',
    //   detail:
    //     'Mercredi 20h30-22h30 : Danse contemporaine et improvisation avec Côme Tanguy',
    //   name: 'mercredi 20h30',
    // },
    // {
    //   id: '7',
    //   detail:
    //     'Jeudi 18h30-20h30 : Théâtre avec Laurine Clochard et Juliette Morin',
    //   name: 'jeudi 18h30',
    // },
    // {
    //   id: '8',
    //   detail: 'Jeudi 20h30-22h30 : Théâtre avec Julie Hercberg',
    //   name: 'jeudi 20h30',
    // },
  ];

  constructor(
    private subscriptionService: SubscriptionService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    console.log(this.member);
    this.isLoading = true;
    this._initMemberEditionForm();
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

  ////////////
  // PRIVATE
  ////////////
  private _initMemberEditionForm(): void {
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
          depositMade: new FormControl(this.member.checks[i].depositMade),
          depositDate: new FormControl(updateDepositDate),
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

    this.memberEditionForm.addControl(
      'firstName',
      new FormControl(this.member.firstName, Validators.required)
    );
    this.memberEditionForm.addControl(
      'lastName',
      new FormControl(this.member.lastName, Validators.required)
    );
    this.memberEditionForm.addControl(
      'email',
      new FormControl(this.member.email, [
        Validators.required,
        Validators.email,
      ])
    );
    this.memberEditionForm.addControl(
      'phone',
      new FormControl(this.member.phone, Validators.required)
    );
    this.memberEditionForm.addControl(
      'courses',
      new FormControl(this.member.courses)
    );
    this.memberEditionForm.addControl(
      'paymentMethod',
      new FormControl(this.member.paymentMethod, Validators.required)
    );
    this.memberEditionForm.addControl('checks', this.checkForm);
    this.memberEditionForm.addControl(
      'paymentAmount',
      new FormControl(this.member.paymentAmount)
    );
    this.memberEditionForm.addControl(
      'extraInfo',
      new FormControl(this.member.extraInfo)
    );
    this.memberEditionForm.addControl(
      'season',
      new FormControl(this.member.season)
    );
    this.memberEditionForm.addControl(
      'subscriptionDate',
      new FormControl({ value: formatedSubscriptionDate, disabled: true })
    );
    this.memberEditionForm.addControl(
      'subscriptionRequestDate',
      new FormControl(
        { value: formatedSubscriptionRequestDate, disabled: true },
        Validators.required
      )
    );
    this.memberEditionForm.addControl(
      'extraInfo',
      new FormControl(this.member.extraInfo)
    );

    this.isLoading = false;
  }

  private _getMemberData(): void {
    this.subscriptionService.getMemberData(this.memberId).subscribe(
      (result) => {
        this.isLoading = false;
        this.showDialog = true;
        this.member = result.member;
      },
      (err) => {
        this.isLoading = false;
        this.memberError = true;
      }
    );
  }
}

@NgModule({
  declarations: [ModalCourseManagerPage],
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

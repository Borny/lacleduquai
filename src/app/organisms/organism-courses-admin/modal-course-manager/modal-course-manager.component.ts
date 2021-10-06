import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { SubscriptionService } from '../../../services/subscription.service';
import { Course } from '../../../models/courses.model';
import { ModalDelete } from '../modal-delete/modal-delete.component';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';

@Component({
  selector: 'member-manager',
  templateUrl: './modal-course-manager.component.html',
  styleUrls: ['./modal-course-manager.component.scss'],
})
export class ModalCourseManagerPage implements OnInit {
  public courseEditionForm: FormGroup;
  public course: Course;
  public courseId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public courseError: boolean;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(private fb: FormBuilder, public modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._initCourseEditionForm();
  }

  public onSubmit(): void {
    this.course.name = this.courseEditionForm.get('name').value;
    this.course.time = this.courseEditionForm.get('time').value;
    this.course.day = this.courseEditionForm.get('day').value;
    this.course.position = this.courseEditionForm.get('position').value;
    this.course.level = this.courseEditionForm.get('level').value;
    this.course.professor = this.courseEditionForm.get('professor').value;
    this.course.maxAttendee = this.courseEditionForm.get('maxCapacity').value;
    this.course.attendeesCount =
      this.courseEditionForm.get('attendeesCount').value;

    this.modalCtrl.dismiss({
      dismissed: this.CONFIRM,
      course: { ...this.course },
    });
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        contentData: this.course,
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
          course: this.course,
        });
      });
    }
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.CANCEL,
    });
  }

  ////////////
  // PRIVATE
  ////////////
  private _initCourseEditionForm(): void {
    this.courseEditionForm = this.fb.group({
      name: new FormControl(this.course.name, Validators.required),
      time: new FormControl(this.course.time, Validators.required),
      day: new FormControl(this.course.day, Validators.required),
      position: new FormControl(this.course.position, Validators.required),
      level: new FormControl(this.course.level, Validators.required),
      professor: new FormControl(this.course.professor, Validators.required),
      maxCapacity: new FormControl(
        this.course.maxAttendee,
        Validators.required
      ),
      attendeesCount: new FormControl(
        { value: this.course.attendeesCount, disabled: false },
        Validators.required
      ),
      waitingList: new FormControl(
        { value: this.course.waitingList?.length, disabled: true },
        Validators.required
      ),
    });

    this.isLoading = false;
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
export class CourseManagerModule {}

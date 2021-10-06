import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Course } from 'src/app/models/courses.model';

import { SubscriptionService } from '../../services/subscription.service';
import { ModalCourseManagerPage } from './modal-course-manager/modal-course-manager.component';

@Component({
  selector: 'organism-courses-admin',
  templateUrl: './organism-courses-admin.component.html',
  styleUrls: ['./organism-courses-admin.component.scss'],
})
export class OrganismCoursesAdminComponent implements OnInit {
  public courseList: Course[] = [];
  public isLoading = false;
  public courseError = false;
  public matSelect: any;

  public readonly CONFIRM = `confirm`;
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = `cancel`;
  public readonly PAYMENT_UPDATED_SUCCESS = `Paiement mis à jour`;
  public readonly REFUND_UPDATED_SUCCESS = `Remboursement mis à jour`;
  public readonly MEMBER_UPDATED_SUCCESS = `Infos adhérent mises à jour`;
  public readonly MEMBER_UPDATED_FAIL = `Problème de mise à jour`;
  public readonly MEMBER_DELETED_SUCCESS = `Adhérent supprimer`;
  public readonly MEMBER_DELETED_FAIL = `Erreur suppression adhérent`;
  public readonly LOADING_TEXT = 'Chargement des données...';

  constructor(
    private subscriptionService: SubscriptionService,
    public modalController: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this._getCourses();
  }

  async onOpenCourseManagerModal(
    courseData: Course,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalCourseManagerPage,
      componentProps: {
        course: courseData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedCourse = data.course;
    console.log('updatedCourse', updatedCourse);
    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateCourse(updatedCourse).subscribe(
        (result) => {
          this.courseList[index] = updatedCourse;
          // show snack bar
          this._presentToast(this.MEMBER_UPDATED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
        }
      );
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      this.subscriptionService.deleteCourse(updatedCourse).subscribe(
        (result) => {
          this.courseList.filter((member) => member._id !== updatedCourse._id);
          // show snack bar
          this._presentToast(this.MEMBER_DELETED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.MEMBER_DELETED_FAIL, 'warning');
        }
      );
    }
  }

  ////////////
  // PRIVATE
  ////////////
  private async _presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }

  private _getCourses(): void {
    this.isLoading = true;
    this.subscriptionService
      .getCourseList()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(({ courseList }) => {
        console.log('courseList', courseList);
        this.courseList = courseList;
        courseList
          .sort((a: Course, b: Course) => a.position - b.position)
          .forEach((course) => {
            const courseData: Course = {
              _id: course._id,
              name: course.name,
              time: course.time,
              maxAttendee: course.maxAttendee,
              attendeesCount: course.attendeesCount,
              waitingList: course.waitingList,
              day: course.day,
              level: course.level,
              professor: course.professor,
              position: course.position,
            };
            let courseLabel = {
              label: `${courseData.day} - ${courseData.time} - ${courseData.name}`,
              value: courseData._id,
              attendees: courseData.attendeesCount,
              capacity: courseData.maxAttendee,
            };
          });
      });
  }
}

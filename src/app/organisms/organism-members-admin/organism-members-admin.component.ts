import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Course } from 'src/app/models/courses.model';
import { SeasonEnum } from 'src/app/models/season.enum';
import { Season } from 'src/app/models/season.model';

import { Member } from '../../models/member.model';
import { PaymentMethods } from '../../models/payment-methods.enum';
import { SubscriptionService } from '../../services/subscription.service';
import { ModalMemberManagerPage } from './modal-member-manager/modal-member-manager.component';
import { ModalMemberPaymentReceivedPage } from './modal-member-payment-received/modal-member-payment-received.component';
import { ModalMemberRefundPage } from './modal-member-refund/modal-member-refund.component';

@Component({
  selector: 'organism-members-admin',
  templateUrl: './organism-members-admin.component.html',
  styleUrls: ['./organism-members-admin.component.scss'],
})
export class OrganismMembersAdminComponent implements OnInit {
  public originalMembersData: Member[] = [];
  public currentMembersData: Member[] = [];
  public currentMembersDataWaitingList: Member[] = [];
  public currentMembersDataMainList: Member[] = [];
  public isLoading = false;
  public memberError = false;
  public matSelect: any;
  public emailList: string;
  public selectedSeason: string;
  public seasonEnum = SeasonEnum;
  public courseTitle = 'Choisissez un cours dans la liste';
  public attendees: number;
  public maxCapacity: number;
  public courseChoosen: boolean;

  public seasons: Season[] = [
    {
      label: '2020-2021',
      value: SeasonEnum.TWENTY,
    },
    {
      label: '2021-2022',
      value: SeasonEnum.TWENTY_ONE,
    },
  ];

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
  public readonly EMAIL_LIST_COPIED = 'Emails copiés';

  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD,
  ];

  public tableHeaderSubscriptionCells: string[] = [
    'Nom',
    'Prénom',
    'Téléphone',
    'Email',
    'Cours',
    'Moyen de paiement',
    'Réglement reçu',
    'Montant du réglement',
    'Encaissement chèques',
    'Remboursement',
    'Inscrit 2019/2020',
    'Cours 2019/2020',
    'Extra info',
  ];

  public filterOptions = [
    // {
    //   filterName: 'payment',
    //   filterLabel: 'Paiement',
    //   values: ['Paiement dû', 'Paiement effectué'],
    // },
    {
      filterName: 'course',
      filterLabel: 'Cours',
      options: [],
      // values: [
      //   'lundi 18h30',
      //   'lundi 20h30',
      //   'mardi 18h30',
      //   'mardi 20h30',
      //   'mercredi 18h30',
      //   'mercredi 20h30',
      //   'jeudi 18h30',
      //   'jeudi 20h30',
      // ],
    },
    // {
    //   filterName: 'alphabeticalOrder',
    //   filterLabel: 'Ordre alphabétique',
    //   values: ['A - Z', 'Z - A'],
    // },
  ];

  constructor(
    private subscriptionService: SubscriptionService,
    public modalController: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this._getCourses();

    // this._getMembersData(this.seasonEnum.TWENTY_ONE);
    // this.selectedSeason = this.seasons[1].label;
  }

  private _getCourses(): void {
    this.isLoading = true;
    this.subscriptionService
      .getCourseList()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(({ courseList }) => {
        console.log('courseList', courseList);
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
            this.filterOptions[0].options.push(courseLabel);
          });

        // this.courses.sort((a: Course, b: Course) => a.position - b.position);
        // console.log(this.filterOptions);
      });
  }

  async onOpenCourseRefundModal(
    memberData: Member,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalMemberRefundPage,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedMember = data.member;
    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateMember(updatedMember).subscribe(
        (result) => {
          // show snack bar
          this._presentToast(this.REFUND_UPDATED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
        }
      );
    }
  }

  async onOpenCoursePaymentReceivedModal(
    memberData: Member,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalMemberPaymentReceivedPage,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    const updatedMember = data.member;
    console.log(updatedMember);
    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateMember(updatedMember).subscribe(
        (result) => {
          this.currentMembersData[index] = updatedMember;
          // show snack bar
          this._presentToast(this.PAYMENT_UPDATED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
        }
      );
    }
  }

  async onOpenCourseManagerModal(
    memberData: Member,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalMemberManagerPage,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedMember = data.member;
    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateMember(updatedMember).subscribe(
        (result) => {
          this.currentMembersData[index] = updatedMember;
          // show snack bar
          this._presentToast(this.MEMBER_UPDATED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
        }
      );
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      console.log('delete', updatedMember);
      this.subscriptionService.deleteMember(updatedMember).subscribe(
        (result) => {
          this.originalMembersData = this.originalMembersData.filter(
            (member) => member._id !== updatedMember._id
          );

          this.currentMembersData = this.originalMembersData;

          this.currentMembersDataWaitingList =
            this.currentMembersDataWaitingList.filter(
              (member) => member._id !== updatedMember._id
            );
          this.currentMembersDataMainList =
            this.currentMembersDataMainList.filter(
              (member) => member._id !== updatedMember._id
            );

          // show snack bar
          this._presentToast(this.MEMBER_DELETED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.MEMBER_DELETED_FAIL, 'warning');
        }
      );
    }
  }

  public onSeasonSelected(season: Season): void {
    this.selectedSeason = season.label;
    this._getMembersData(season.value);
  }

  public onSelectedOption(filter: any, option?: any): void {
    const courseName = option.label;
    const name = filter.filterName;
    this.maxCapacity = option.capacity;
    this.attendees = option.attendees;
    this.matSelect = option.value;
    switch (name) {
      case 'payment':
        this.filterPayment(option.value);
        break;
      case 'course':
        this.filterCourses(courseName, option.value);
        break;
      case 'alphabeticalOrder':
        this.filterAlphaOrder(option.value);
        break;
      default:
        this.currentMembersData = this.originalMembersData;
        break;
    }
    this._generateEmailList();
  }

  public onResetFilters(): void {
    this._getMembersData();
    this.matSelect = null;
  }

  public onCopyToClipBoard(): void {
    this._presentToast(this.EMAIL_LIST_COPIED, 'success');
  }

  // public get getTotalRefund(member: Member): number {
  //   let total = 0;
  //   member.refunds.forEach(refund => {
  //     total += refund.amount
  //   })
  //   return total;

  // }

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

  private _getMembersData(season?: string): void {
    this.isLoading = true;
    this.subscriptionService
      .getMembersData(season)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        (response) => {
          console.log('get member data', response);
          this.originalMembersData = response.data;
          this.currentMembersData = [...this.originalMembersData];

          this._generateEmailList();
        },
        (err) => {
          this.memberError = true;
        }
      );
  }

  private filterPayment(selectValue: string): void {
    if (selectValue === this.filterOptions[0].options[0]) {
      this.currentMembersData = this.originalMembersData.filter(
        (member) => member.paymentReceived === false
      );
    } else if (selectValue === this.filterOptions[0].options[1]) {
      this.currentMembersData = this.originalMembersData.filter(
        (member) => member.paymentReceived === true
      );
    } else {
      this.currentMembersData = this.originalMembersData;
    }
  }

  private filterCourses(name: string, selectValue: string): Member[] | void {
    if (selectValue === undefined) {
      return (this.currentMembersData = this.originalMembersData);
    }

    this.isLoading = true;

    this.subscriptionService
      .getFilteredMembers(selectValue)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.originalMembersData = data.data;
        this.currentMembersData = [...this.originalMembersData];

        // Waiting members
        const waitingMembs = [];
        this.currentMembersData.forEach((member) => {
          if (
            member.courses.filter(
              (course) => course.courseId === selectValue && course.waitingList
            ).length
          ) {
            waitingMembs.push(member);
          }
          return waitingMembs;
        });
        this.currentMembersDataWaitingList = waitingMembs;

        // Main members
        const mainMembs = [];
        this.currentMembersData.forEach((member) => {
          if (
            member.courses.filter(
              (course) => course.courseId === selectValue && !course.waitingList
            ).length
          ) {
            mainMembs.push(member);
          }
          return mainMembs;
        });
        this.currentMembersDataMainList = mainMembs;
        this.courseTitle = name;
        this.courseChoosen = true;

        // console.log(
        //   'this.currentMembersDataWaitingList',
        //   this.currentMembersDataWaitingList
        // );
      });
    // this.currentMembersData = this.originalMembersData.filter((member) =>
    // // TODO: fix this
    //   // member.courses.includes(selectValue)
    // );
  }

  private filterAlphaOrder(selectValue: string): void {
    if (selectValue === this.filterOptions[2].options[0]) {
      this.currentMembersData = this.currentMembersData.sort(function (a, b) {
        const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else if (selectValue === this.filterOptions[2].options[1]) {
      this.currentMembersData = this.currentMembersData.sort((a, b) => {
        const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      this.currentMembersData = this.originalMembersData;
    }
  }

  private _generateEmailList(): void {
    // The email list will reflect the members displayed in the main table
    this.emailList = this.currentMembersData
      .map((member) => member.email)
      .toString();
  }
}

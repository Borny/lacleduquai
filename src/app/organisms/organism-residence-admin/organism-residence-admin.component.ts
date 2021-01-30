// import { Component, OnInit } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { ToastController } from '@ionic/angular';

// import { ResidenceService } from '../../services/residence.service';

// import { Residence } from '../../models/residence.model';

// // import { ModalResidenceCreatePage } from './modal-residence-create/modal-residence-create.page';
// import { ModalResidenceManagerPage } from './modal-residence-manager/modal-residence-manager.page';

// @Component({
//   selector: 'organism-residence-admin',
//   templateUrl: './organism-residence-admin.component.html',
//   styleUrls: ['./organism-residence-admin.component.scss'],
// })
// export class OrganismResidenceAdminComponent implements OnInit {

//   // RESIDENCE
//   public originalResidenceData: Residence[] = [];
//   public currentResidenceData: Residence[] = [];
//   public residencesBooked: Residence[] = [];
//   public candidates: Residence[] = [];
//   public isResidenceLoading = false;

//   public readonly CREATE_BTN_TEXT = 'Valider';
//   public readonly CONFIRM = 'confirm';
//   public readonly CANCEL = 'cancel';
//   public readonly CONFIRM_DELETE = 'confirm-delete';
//   public readonly RESIDENCE_DELETED_SUCCESS = `Residence supprimée`;
//   public readonly RESIDENCE_CREATED_SUCCESS = 'Residence created';
//   public readonly RESIDENCE_CREATED_FAIL = 'Residence creation failed';
//   public readonly RESIDENCE_DELETED_FAIL = `Erreur suppression de la residence`;
//   public readonly RESIDENCE_UPDATED_SUCCESS = `La residence a été mise à jour`;
//   public readonly RESIDENCE_UPDATED_FAIL = `La residence n'a pas été mise à jour`;

//   constructor(
//     private residenceService: ResidenceService,
//     public modalController: ModalController,
//     public toastController: ToastController
//   ) { }

//   ngOnInit() {
//     this._getResidences();
//   }

//   // RESIDENCE
//   // Open create residence 
//   // async onOpenCreateResidenceModal() {
//   //   const modal = await this.modalController.create({
//   //     component: ModalResidenceCreatePage,
//   //   });
//   //   await modal.present();

//   //   // On dismiss
//   //   const { data } = await modal.onWillDismiss();
//   //   if (!data) {
//   //     return;
//   //   }
//   //   const createdResidence = data.residence;
//   //   if (data.dismissed === this.CONFIRM) {
//   //     // Sending the event
//   //     this.residenceService.postResidence(createdResidence)
//   //       .subscribe(
//   //         response => {
//   //           this.isResidenceLoading = false;
//   //           this.currentResidenceData.push(createdResidence);
//   //           // show snack bar
//   //           this._presentToast(this.RESIDENCE_CREATED_SUCCESS);
//   //         },
//   //         error => {
//   //           this._presentToast(this.RESIDENCE_CREATED_FAIL);
//   //         });
//   //   }
//   // }

//   // manage residence
//   async onOpenManageResidenceModal(residenceData: Event, index: number): Promise<void> {
//     const modal = await this.modalController.create({
//       component: ModalResidenceManagerPage,
//       componentProps: {
//         'residence': residenceData
//       }
//     });
//     await modal.present();
//     const { data } = await modal.onWillDismiss();
//     if (!data) {
//       return;
//     }
//     console.log(data);
//     // On dismiss
//     let updatedResidence = data.residence;
//     if (data.dismissed === this.CONFIRM) {
//       this.residenceService.updateResidence(updatedResidence)
//         .subscribe(
//           updateData => {
//             console.log('updateData:', updateData)
//             // this.currentEventsData[index] = data.event;
//             this.currentResidenceData[index] = data.residence;
//             // show snack bar
//             this._presentToast(this.RESIDENCE_UPDATED_SUCCESS);
//           },
//           err => {
//             this._presentToast(this.RESIDENCE_UPDATED_FAIL);
//           });
//     } else if (data.dismissed === this.CONFIRM_DELETE) {
//       console.log('deleted');
//       this.residenceService.deleteResidence(data.residence)
//         .subscribe(
//           result => {
//             this.originalResidenceData = this.originalResidenceData.filter(residence => residence._id !== updatedResidence._id);
//             this.currentResidenceData = this.originalResidenceData;
//             // show snack bar
//             this._presentToast(this.RESIDENCE_DELETED_SUCCESS);
//           },
//           err => {
//             // show snack bar
//             this._presentToast(this.RESIDENCE_DELETED_FAIL);
//           });
//     }
//   }

//   ////////////
//   // PRIVATE
//   ////////////
//   async _presentToast(message: string) {
//     const toast = await this.toastController.create({
//       message,
//       duration: 2000
//     });
//     toast.present();
//   }

//   private _getResidences(): void {
//     this.isResidenceLoading = true;
//     this.residenceService.getResidences()
//       .subscribe(
//         response => {
//           // TODO:
//           console.log(response);


//           this.originalResidenceData = response.data;
//           this.currentResidenceData = [...this.originalResidenceData];
//           this.candidates = response.data.filter(residence => !residence.booked);
//           this.residencesBooked = response.data.filter(residence => residence.booked);

//           this.isResidenceLoading = false;
//         },
//         error => {
//           this.isResidenceLoading = false;
//           console.log('residence error:', error)
//         }
//       )
//   }

// }

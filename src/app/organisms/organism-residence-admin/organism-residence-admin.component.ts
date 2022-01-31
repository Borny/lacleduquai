import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { ResidenceService } from '../../services/residence.service';

import { Residence } from '../../models/residence.model';

// import { ModalResidenceCreatePage } from './modal-residence-create/modal-residence-create.page';
import { ModalResidenceManagerPage } from './modal-residence-manager/modal-residence-manager.page';

@Component({
  selector: 'organism-residence-admin',
  templateUrl: './organism-residence-admin.component.html',
  styleUrls: ['./organism-residence-admin.component.scss'],
})
export class OrganismResidenceAdminComponent implements OnInit {
  // RESIDENCE
  public originalResidenceData: Residence[] = [];
  public currentResidenceData: Residence[] = [];
  public residencesBooked: Residence[] = [];
  public candidates: Residence[] = [];
  public isResidenceLoading = false;

  public readonly CREATE_BTN_TEXT = 'Valider';
  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly RESIDENCE_DELETED_SUCCESS = `Residence supprimée`;
  public readonly RESIDENCE_CREATED_SUCCESS = 'Residence created';
  public readonly RESIDENCE_CREATED_FAIL = 'Residence creation failed';
  public readonly RESIDENCE_DELETED_FAIL = `Erreur suppression de la résidence`;
  public readonly RESIDENCE_UPDATED_SUCCESS = `La résidence a été mise à jour`;
  public readonly RESIDENCE_UPDATED_FAIL = `La résidence n'a pas été mise à jour`;

  constructor(
    private residenceService: ResidenceService,
    public modalController: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this._getResidences();
  }

  // RESIDENCE

  // Manage Residence
  async onOpenManageResidenceModal(
    residenceData: Residence,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalResidenceManagerPage,
      componentProps: {
        residence: residenceData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedResidence: Residence = data.residence;
    if (data.dismissed === this.CONFIRM) {
      this.residenceService.updateResidence(updatedResidence).subscribe(
        (updateData) => {
          console.log(this.currentResidenceData);
          console.log(this.originalResidenceData);
          this.currentResidenceData[index] = updatedResidence;

          this.candidates = this.currentResidenceData.filter(
            (residence) => !residence.booked
          );
          this.residencesBooked = this.currentResidenceData.filter(
            (residence) => residence.booked
          );

          // residenceData = updatedResidence;
          // show snack bar
          this._presentToast(this.RESIDENCE_UPDATED_SUCCESS, 'success');
        },
        (err) => {
          this._presentToast(this.RESIDENCE_UPDATED_FAIL, 'warning');
        }
      );
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      this.residenceService.deleteResidence(updatedResidence).subscribe(
        (result) => {
          this.originalResidenceData = this.originalResidenceData.filter(
            (residence) => residence._id !== updatedResidence._id
          );
          this.currentResidenceData = this.originalResidenceData;

          this.candidates = this.currentResidenceData.filter(
            (residence) => !residence.booked
          );
          this.residencesBooked = this.currentResidenceData.filter(
            (residence) => residence.booked
          );
          // show snack bar
          this._presentToast(this.RESIDENCE_DELETED_SUCCESS, 'success');
        },
        (err) => {
          // show snack bar
          this._presentToast(this.RESIDENCE_DELETED_FAIL, 'warning');
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

  private _getResidences(): void {
    this.isResidenceLoading = true;
    this.residenceService.getResidences().subscribe(
      (response) => {
        this.originalResidenceData = response.data;
        this.currentResidenceData = [...this.originalResidenceData];

        this.candidates = this.currentResidenceData.filter(
          (residence) => !residence.booked
        );
        this.residencesBooked = this.currentResidenceData.filter(
          (residence) => residence.booked
        );

        this.isResidenceLoading = false;
      },
      (error) => {
        this.isResidenceLoading = false;
        console.log('residence error:', error);
      }
    );
  }
}

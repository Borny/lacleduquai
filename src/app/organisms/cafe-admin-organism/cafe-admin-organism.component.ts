import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

import { CafeService } from '../../services/cafe.service';

import { Chalkboard } from '../../models/chalkboard.model';
import { ModalChalkboardManagerDialog } from './modal-chalkboard-manager-dialog/modal-chalkboard-manager-dialog.component';

@Component({
  selector: 'cafe-admin-organism',
  templateUrl: './cafe-admin-organism.component.html',
  styleUrls: ['./cafe-admin-organism.component.scss'],
})
export class CafeAdminOrganismComponent implements OnInit {

  public originalChalkboardData: Chalkboard[] = [];
  public currentChalkboardData: Chalkboard[] = [];
  public chalkboard: Chalkboard;
  public chalkboardError: boolean;
  public isLoading = false;

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CHALKBOARD_UPDATED_SUCCESS = `L'ardoise a été mise à jour`;
  public readonly CHALKBOARD_UPDATED_FAIL = `L'ardoise n'a pas été mise à jour`;

  constructor(
    private cafeService: CafeService,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this._getChalkboard();
  }

  async onOpenChalkboardManager(
    chalkboardData: Chalkboard,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalChalkboardManagerDialog,
      componentProps: {
        chalkboard: chalkboardData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }

    console.log(data)
    let updatedChalkboard = data.chalkboard;
    if (data.dismissed === this.CONFIRM) {
      this.currentChalkboardData[index] = data.chalkboard;
      this.cafeService.updateChalkboard(updatedChalkboard)
        .subscribe(
          updateResult => {
            this.currentChalkboardData[index] = updatedChalkboard;
            // show snack bar
            this._presentToast(this.CHALKBOARD_UPDATED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.CHALKBOARD_UPDATED_FAIL, 'warning');
          });
    }
  }

  ////////////
  // PRIVATE
  ////////////
  async _presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

  private _getChalkboard(): void {
    this.cafeService.getChalkboardData()
      .subscribe(
        result => {
          this.isLoading = false;
          this.originalChalkboardData = result.data;
          this.currentChalkboardData = this.originalChalkboardData;
        },
        error => {
          this.isLoading = false;
          this.chalkboardError = true;
        }
      )
  }

}

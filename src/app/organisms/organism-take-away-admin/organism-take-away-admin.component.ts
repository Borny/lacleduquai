import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

import { TakeAwayService } from '../../services/take-away.service';

import { ChaiTakeAway } from '../../models/chai-take-away.model';

import { ModalTakeAwayState } from './modal-take-away-state/modal-take-away-state.component';
import { ModalTakeAwayManagerPage } from './modal-take-away-manager/modal-take-away-manager.component';

@Component({
  selector: 'organism-take-away-admin',
  templateUrl: './organism-take-away-admin.component.html',
  styleUrls: ['./organism-take-away-admin.component.scss'],
})
export class OrganismTakeAwayAdminComponent implements OnInit {

  public originalOrdersData: ChaiTakeAway[] = [];
  public currentOrdersData: ChaiTakeAway[] = [];
  public isLoading = false;

  public orderError = false;

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly ORDER_DELETED_SUCCESS = `Commande supprimée`;
  public readonly ORDER_DELETED_FAIL = `Erreur suppression commande`;
  public readonly STATE_UPDATED_SUCCESS = `L'état de la commande a été mis à jour`;
  public readonly STATE_UPDATED_FAIL = `L'état de la commande n'a pas été mis à jour`;

  constructor(
    private takeAwayService: TakeAwayService,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this._getOrdersInfo();
  }

  // STATE MODAL
  async onOpenTakeAwayStateModal(
    takeAwayData: ChaiTakeAway,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalTakeAwayState,
      componentProps: {
        order: takeAwayData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedOrder = data.order;

    if (data.dismissed === this.CONFIRM) {
      this.takeAwayService.updateOrder(updatedOrder)
        .subscribe(
          result => {
            // show snack bar
            this._presentToast(this.STATE_UPDATED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.STATE_UPDATED_FAIL, 'warning');
          });
    }
  }

  // ORDER MANAGER
  async onOpenTakeAwayManagerModal(
    takeAwayData: ChaiTakeAway,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalTakeAwayManagerPage,
      componentProps: {
        order: takeAwayData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedOrder = data.order;

    if (data.dismissed === this.CONFIRM) {
      this.takeAwayService.updateOrder(updatedOrder)
        .subscribe(
          updateResult => {
            this.currentOrdersData[index] = updatedOrder;
            // show snack bar
            this._presentToast(this.STATE_UPDATED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.STATE_UPDATED_FAIL, 'warning');
          });
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      this.takeAwayService.deleteOrder(updatedOrder)
        .subscribe(
          result => {
            this.originalOrdersData = this.originalOrdersData.filter(order => order._id !== updatedOrder._id);
            this.currentOrdersData = this.originalOrdersData;
            // show snack bar
            this._presentToast(this.ORDER_DELETED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.ORDER_DELETED_FAIL, 'warning');
          });
    }
  }

  ////////////
  // PRIVATE
  ////////////
  private async _presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

  private _getOrdersInfo(): void {
    this.isLoading = true;
    this.takeAwayService.getChaiTakeAwayOrders()
      .subscribe(
        response => {
          this.isLoading = false;
          this.originalOrdersData = response.data;
          this.currentOrdersData = [...this.originalOrdersData];
        },
        err => {
          this.isLoading = false;
          this.orderError = true;
        }
      );
  }

}

import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastController } from "@ionic/angular";
import { IonicModule, ModalController } from '@ionic/angular';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';
import { MaterialModule } from '../../../angular-material/angular-material.module';
import { ChaiTakeAway, TakeAwayState } from '../../../models/chai-take-away.model';
import { TakeAwayService } from '../../../services/take-away.service';

import { ModalDelete } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'order-manager',
  templateUrl: './modal-take-away-manager.component.html',
  styleUrls: ['./modal-take-away-manager.component.scss']
})
export class ModalTakeAwayManagerPage implements OnInit {

  public orderEditionForm: FormGroup = new FormGroup({});
  public order: ChaiTakeAway;
  public orderId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public orderError: boolean;
  public price: number;
  public totalPrice: number;
  public oneLiterPrice: number = 8;
  public orderQuantity: number;
  public depositAmount = 3;
  public totalDeposit: number;
  public hasContainer: boolean;
  public pickUpDate: Date;

  public quantities: string[] = ['1 litre', '2 litres', '3 litres', '4 litres'];

  public minDateFilter: Date;
  public maxDateFilter: Date;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    private takeAwayService: TakeAwayService,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit(): void {
    // this.showDialog = false;
    // this.isLoading = true;
    this._initOrderEditForm();
    // this._getOrderData();
    this._setMinMaxDates();
  }

  public onSubmit(): void {
    this.order.firstName = this.orderEditionForm.get('firstName').value;
    this.order.lastName = this.orderEditionForm.get('lastName').value;
    this.order.phone = this.orderEditionForm.get('phone').value;
    this.order.quantity = this.orderEditionForm.get('quantity').value;
    this.order.hasOwnContainer = this.orderEditionForm.get('hasOwnContainer').value;
    this.order.pickUpDate = this.orderEditionForm.get('pickUpDate').value;
    this.order.extraInfo = this.orderEditionForm.get('extraInfo').value;
    this.order.totalPrice = this.totalPrice;
    this.order.price = this.price;
    this.order.totalDeposit = this.totalDeposit;

    this.modalController.dismiss({
      'dismissed': this.CONFIRM,
      'order': { ...this.order }
    })
  }

  public onCancel(): void {
    this.modalController.dismiss({
      'dismissed': this.CANCEL
    });
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        'contentData': this.order
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    if (data.dismissed === this.CONFIRM_DELETE) {
      // !!! Not sure why but the setTimeout is needed, probably asynchronous stuff...
      setTimeout(() => {
        this.modalController.dismiss({
          'dismissed': this.CONFIRM_DELETE,
          'order': this.order
        })
      })
    }
  }

  public toggleHasContainer(event: CustomEvent): void {
    this.hasContainer = !this.hasContainer;
    this._getTotalPrice();
  }

  public onDateChange(event: MatDatepickerInputEvent<any>): void {
    this.order.state = TakeAwayState.DELAYED;
  }

  public onQuantityChange(event: CustomEvent): void {
    this.price = this.oneLiterPrice * event.detail.value;
    this.orderQuantity = event.detail.value;
    this._getTotalPrice();
  }

  public dateFilter(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Only allows Tuesday and Thursday to be selected.
    return day !== 0 && day !== 1 && day !== 3 && day !== 5 && day !== 6;
  }

  ////////////
  // PRIVATE
  ////////////
  private _getOrderData(): void {
    this.takeAwayService.getChaiTakeAwayOrder(this.orderId)
      .subscribe(
        result => {
          this.isLoading = false;
          this.showDialog = true;
          this.order = result.data;
          this.price = this.order.price;
          this.totalPrice = this.order.totalPrice;
          this.totalDeposit = this.order.totalDeposit;
          this.orderQuantity = this.order.quantity;
          this.hasContainer = this.order.hasOwnContainer;
          this.pickUpDate = this.order.pickUpDate;
          this._initOrderEditForm();
        },
        err => {
          this.isLoading = false;
          this.orderError = true;
        }
      )
  }

  private _initOrderEditForm(): void {
    this.price = this.order.price;
    this.totalPrice = this.order.totalPrice;
    this.totalDeposit = this.order.totalDeposit;
    this.orderQuantity = this.order.quantity;
    this.hasContainer = this.order.hasOwnContainer;
    this.pickUpDate = this.order.pickUpDate;

    this.orderEditionForm.addControl('firstName', new FormControl(this.order.firstName, Validators.required));
    this.orderEditionForm.addControl('lastName', new FormControl(this.order.lastName, Validators.required));
    this.orderEditionForm.addControl('phone', new FormControl(this.order.phone, Validators.required));
    this.orderEditionForm.addControl('quantity', new FormControl(this.order.quantity, Validators.required));
    this.orderEditionForm.addControl('hasOwnContainer', new FormControl(this.order.hasOwnContainer, Validators.required));
    this.orderEditionForm.addControl('pickUpDate', new FormControl({ value: this.order.pickUpDate, disabled: true }, Validators.required));
    this.orderEditionForm.addControl('extraInfo', new FormControl(this.order.extraInfo));
  }

  private _setMinMaxDates(): void {
    const currentYear = new Date().getFullYear();
    this.minDateFilter = new Date();
    this.maxDateFilter = new Date(currentYear + 0, 11, 31);
  }

  private _getTotalPrice(): void {
    if (this.hasContainer) {
      this.totalPrice = this.price;
      this.totalDeposit = 0;
    } else {
      this.totalDeposit = this.depositAmount * this.orderQuantity;
      this.totalPrice = this.price + this.totalDeposit;
    }
  }
}

@NgModule({
  declarations: [ModalTakeAwayManagerPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    AtomAsteriskModule
  ],
  exports: [],
  providers: [],
})
class ModalTakeAwayManagerModule { }
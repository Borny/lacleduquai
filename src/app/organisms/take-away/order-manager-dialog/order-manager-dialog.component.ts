import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { ChaiTakeAway, TakeAwayState } from '../../../models/chai-take-away.model';
import { TakeAwayService } from '../../../services/take-away.service';
import { DeleteOrderDialog } from '../delete-order-dialog/delete-order-dialog.component';

@Component({
  selector: 'order-manager',
  templateUrl: './order-manager-dialog.component.html',
  styleUrls: ['./order-manager-dialog.component.scss']
})
export class OrderManagerDialog implements OnInit {

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
    public dialogRef: MatDialogRef<OrderManagerDialog>,
    private takeAwayService: TakeAwayService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.orderId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this._getOrderData();
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
  }

  public onCancel(): void {
    this.dialogRef.close({ order: this.order, action: this.CANCEL });
  }

  public onOpenDeleteModal(): void {
    const dialogRef = this.dialog.open(DeleteOrderDialog, {
      minWidth: '500px',
      data: this.order
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.action === this.CONFIRM_DELETE) {
          this.dialogRef.close({ order: this.order, action: this.CONFIRM_DELETE });
        }
      });
  }

  public onClose(): void {
    this.dialogRef.close()
  }

  public toggleHasContainer(event: MatSlideToggleChange): void {
    this.hasContainer = !this.hasContainer;
    this._getTotalPrice();
  }

  public onDateChange(event: MatDatepickerInputEvent<any>): void {
    this.order.state = TakeAwayState.DELAYED;
  }

  public onQuantityChange(event: MatRadioChange): void {
    this.price = this.oneLiterPrice * event.value;
    this.orderQuantity = event.value;
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
    this.orderEditionForm.addControl('firstName', new FormControl(this.order.firstName, Validators.required));
    this.orderEditionForm.addControl('lastName', new FormControl(this.order.lastName, Validators.required));
    this.orderEditionForm.addControl('phone', new FormControl(this.order.phone, Validators.required));
    this.orderEditionForm.addControl('quantity', new FormControl(this.order.quantity, Validators.required));
    this.orderEditionForm.addControl('hasOwnContainer', new FormControl(this.order.hasOwnContainer, Validators.required));
    this.orderEditionForm.addControl('pickUpDate', new FormControl(this.order.pickUpDate, Validators.required));
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
  declarations: [OrderManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class OrderManagerModule { }
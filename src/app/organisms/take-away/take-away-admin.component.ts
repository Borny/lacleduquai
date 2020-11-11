import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StateDialog } from './state-dialog/state-dialog.component';
import { TakeAwayService } from '../../services/take-away.service';
import { ChaiTakeAway } from '../../models/chai-take-away.model';
import { OrderManagerDialog } from './order-manager-dialog/order-manager-dialog.component';

@Component({
  selector: 'take-away-admin-organism',
  templateUrl: './take-away-admin.component.html',
  styleUrls: ['./take-away-admin.component.scss']
})

export class TakeAwayAdminOrganism implements OnInit {
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
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getOrdersInfo();
  }

  public onOpenState(order: ChaiTakeAway): void {
    const dialogRef = this.dialog.open(StateDialog, {
      minWidth: '300px',
      data: order
    });
    dialogRef.beforeClosed()
      .subscribe(result => {
        order.state = result.order.state;
        if (result.action === this.CONFIRM) {
          this.takeAwayService.updateOrder(order)
            .subscribe(
              result => {
                // show snack bar
                this._snackBar.open(this.STATE_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.STATE_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  public onOpenOrderManager(orderData: ChaiTakeAway, index: number): void {
    const id = orderData._id;
    const dialogRef = this.dialog.open(OrderManagerDialog, {
      minWidth: '500px',
      data: id
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (!result) {
          return;
        }
        let updatedOrder = result.order;
        if (result.action === this.CONFIRM) {
          this.takeAwayService.updateOrder(updatedOrder)
            .subscribe(
              updateResult => {
                this.currentOrdersData[index] = result.order;
                // show snack bar
                this._snackBar.open(this.STATE_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.STATE_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        } else if (result.action === this.CONFIRM_DELETE) {
          this.takeAwayService.deleteOrder(result.order)
            .subscribe(
              result => {
                this.originalOrdersData = this.originalOrdersData.filter(order => order._id !== updatedOrder._id);
                this.currentOrdersData = this.originalOrdersData;
                // show snack bar
                this._snackBar.open(this.ORDER_DELETED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.ORDER_DELETED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  ////////////
  // PRIVATE
  ////////////
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
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map, tap } from 'rxjs/operators';

import { TakeAwayService } from '../../services/take-away.service';
import { CafeSubscription } from '../../models/cafeSubscription.model';
import { CafeMemberManagerDialog } from './cafe-member-manager/cafe-member-manager.component';
import { ChaiTakeAway } from '../../models/chai-take-away.model';

@Component({
  selector: 'take-away-admin-organism',
  templateUrl: './take-away-admin.component.html',
  styleUrls: ['./take-away-admin.component.scss']
})

export class TakeAwayAdminOrganism implements OnInit {
  public originalOrdersData: ChaiTakeAway[] = [];
  public currentOrdersData: ChaiTakeAway[] = [];
  public isLoading = false;

  public memberError = false;
  // public matSelect: any;
  // public emailList: string;

  // public readonly CONFIRM = `confirm`;
  // public readonly CONFIRM_DELETE = 'confirm-delete';
  // public readonly CANCEL = `cancel`;
  // public readonly MEMBER_UPDATED_SUCCESS = `Infos adhérent mises à jour`;
  // public readonly MEMBER_UPDATED_FAIL = `Problème de mise à jour`;
  // public readonly MEMBER_DELETED_SUCCESS = `Adhérent supprimer`;
  // public readonly MEMBER_DELETED_FAIL = `Erreur suppression adhérent`;
  // public readonly LOADING_TEXT = 'Chargement des données...';
  // public readonly EMAIL_LIST_COPIED = 'Emails copiés';

  // public filterOptions = [
  //   {
  //     filterName: 'newsletter',
  //     filterLabel: 'Inscription Newsletter',
  //     values: [
  //       'Oui',
  //       'Non'
  //     ]
  //   },
  //   {
  //     filterName: 'alphabeticalOrder',
  //     filterLabel: 'Ordre alphabétique',
  //     values: [
  //       'A - Z',
  //       'Z - A'
  //     ]
  //   }
  // ]

  constructor(
    private takeAwayService: TakeAwayService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getOrdersInfo();
  }

  // // public onOpenMemberManager(memb: CafeSubscription, index: number): void {
  // //   const id = memb._id;
  // //   const dialogRef = this.dialog.open(CafeMemberManagerDialog, {
  // //     minWidth: '500px',
  // //     data: id
  // //   });
  // //   dialogRef.afterClosed()
  // //     .subscribe(result => {
  // //       if (!result) {
  // //         return;
  // //       }
  // //       let updatedMember = result.order;
  // //       if (result.action === this.CONFIRM) {
  // //         this.currentOrdersData[index] = result.order;
  // //         this.takeAwayService.getOrders(updatedMember)
  // //           .subscribe(
  // //             result => {
  // //               // show snack bar
  // //               this._snackBar.open(this.MEMBER_UPDATED_SUCCESS, null, {
  // //                 duration: 3000,
  // //               });
  // //             },
  // //             err => {
  // //               this._snackBar.open(this.MEMBER_UPDATED_FAIL, null, {
  // //                 duration: 3000,
  // //               });
  // //             });
  // //       } else if (result.action === this.CONFIRM_DELETE) {
  // //         this..deleteCafeMember(result.order)
  // //           .subscribe(
  // //             result => {
  // //               this.originalOrdersData = this.originalOrdersData.filter(order => order._id !== updatedMember._id);
  // //               this.currentOrdersData = this.originalOrdersData;
  // //               // show snack bar
  // //               this._snackBar.open(this.MEMBER_DELETED_SUCCESS, null, {
  // //                 duration: 3000,
  // //               });
  // //             },
  // //             err => {
  // //               this._snackBar.open(this.MEMBER_DELETED_FAIL, null, {
  // //                 duration: 3000,
  // //               });
  // //             });
  // //       }
  // //     });
  // // }

  // public onSelectedOption(filter: string, value?: string): void {
  //   this.matSelect = value;
  //   switch (filter) {
  //     case 'newsletter':
  //       this._filterNewsletter(value);
  //       break;
  //     case 'alphabeticalOrder':
  //       this._filterAlphaOrder(value);
  //       break;
  //     default:
  //       this.currentOrdersData = this.originalOrdersData;
  //       break;
  //   }
  //   this._generateEmailList();
  // }

  // public onResetFilters(): void {
  //   this._getOrdersInfo();
  //   this.matSelect = null;
  // }

  // public onCopyToClipBoard(): void {
  //   this._snackBar.open(this.EMAIL_LIST_COPIED, null, {
  //     duration: 3000,
  //   });
  // }

  ////////////
  // PRIVATE
  ////////////
  private _getOrdersInfo(): void {
    this.isLoading = true;
    this.takeAwayService.getChaiTakeAwayOrder()
      // .pipe(
      //   tap(response => {
      //     let res = response.data[0].pickUpDate.toDateString();
      //     console.log(response.data);
      //     // return response
      //   }
      //   ))
      .subscribe(
        response => {
          this.isLoading = false;
          this.originalOrdersData = response.data;
          this.currentOrdersData = [...this.originalOrdersData];
        },
        err => {
          this.isLoading = false;
          this.memberError = true;
        }
      );
  }

  // private _filterNewsletter(selectValue: string): void {
  //   if (selectValue === undefined) {
  //     this.currentOrdersData = this.originalOrdersData;
  //     return;
  //   }
  //   this.currentOrdersData = selectValue === this.filterOptions[0].values[0]
  //     ? this.originalOrdersData.filter(order => order.newsletterSubscription)
  //     : this.originalOrdersData.filter(order => !order.newsletterSubscription)
  // }

  // private _filterAlphaOrder(selectValue: string): void {
  //   if (selectValue === this.filterOptions[1].values[0]) {
  //     this.currentOrdersData = this.currentOrdersData.sort(function (a, b) {
  //       const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
  //       const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
  //       if (nameA < nameB) {
  //         return -1;
  //       }
  //       if (nameA > nameB) {
  //         return 1;
  //       }
  //       // names must be equal
  //       return 0;
  //     });
  //   } else if (selectValue === this.filterOptions[1].values[1]) {
  //     this.currentOrdersData = this.currentOrdersData.sort((a, b) => {
  //       const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
  //       const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
  //       if (nameA > nameB) {
  //         return -1;
  //       }
  //       if (nameA < nameB) {
  //         return 1;
  //       }
  //       // names must be equal
  //       return 0;
  //     });
  //   } else {
  //     this.currentOrdersData = this.originalOrdersData;
  //   }
  // }

}
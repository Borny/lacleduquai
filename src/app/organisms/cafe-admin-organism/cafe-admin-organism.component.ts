import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CafeService } from '../../services/cafe.service';

import { Chalkboard } from '../../models/chalkboard.model';
import { ChalkboardManagerDialog } from './chalkboard-manager-dialog/chalkboard-manager-dialog.component';

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
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getChalkboard();
  }

  public onOpenChalkboardManager(chalkboardData: Chalkboard, index: number): void {
    const id = chalkboardData._id;
    const dialogRef = this.dialog.open(ChalkboardManagerDialog, {
      minWidth: '500px',
      data: id
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (!result) {
          return;
        }
        let updatedChalkboard = result.chalkboard;
        if (result.action === this.CONFIRM) {
          this.cafeService.updateChalkboard(updatedChalkboard)
            .subscribe(
              updateResult => {
                this.currentChalkboardData[index] = result.chalkboard;
                // show snack bar
                this._snackBar.open(this.CHALKBOARD_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.CHALKBOARD_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  ////////////
  // PRIVATE
  ////////////
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

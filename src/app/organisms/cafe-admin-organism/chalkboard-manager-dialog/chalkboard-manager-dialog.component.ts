import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Chalkboard } from '../../../models/chalkboard.model';
import { CafeService } from '../../../services/cafe.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'chalkboard-manager',
  templateUrl: './chalkboard-manager-dialog.component.html',
  styleUrls: ['./chalkboard-manager-dialog.component.scss']
})
export class ChalkboardManagerDialog implements OnInit {

  public chalkboardEditionForm: FormGroup = new FormGroup({});
  public chalkboard: Chalkboard;
  public chalkboardId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public chalkboardError: boolean;

  public readonly CHALKBOARD_TITLE = 'Ardoise du jour';
  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<ChalkboardManagerDialog>,
    private cafeService: CafeService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.chalkboardId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this._getChalkboardData();
  }

  public onSubmit(): void {
    this.chalkboard.mainCourse = this.chalkboardEditionForm.get('mainCourse').value;
    this.chalkboard.mainCourseSide = this.chalkboardEditionForm.get('mainCourseSide').value;
    this.chalkboard.mainCoursePrice = this.chalkboardEditionForm.get('mainCoursePrice').value;
    this.chalkboard.dessert = this.chalkboardEditionForm.get('dessert').value;
    this.chalkboard.dessertPrice = this.chalkboardEditionForm.get('dessertPrice').value;
  }

  public onCancel(): void {
    this.dialogRef.close({ chalkboard: this.chalkboard, action: this.CANCEL });
  }

  public onClose(): void {
    this.dialogRef.close()
  }

  ////////////
  // PRIVATE
  ////////////
  private _getChalkboardData(): void {
    this.cafeService.getChalkboardData()
      .subscribe(
        result => {
          this.isLoading = false;
          this.showDialog = true;
          this.chalkboard = result.data[0];
          this._initChalkboardEditForm();
        },
        err => {
          this.isLoading = false;
          this.chalkboardError = true;
        }
      )
  }

  private _initChalkboardEditForm(): void {
    this.chalkboardEditionForm.addControl('mainCourse', new FormControl(this.chalkboard.mainCourse, Validators.required));
    this.chalkboardEditionForm.addControl('mainCourseSide', new FormControl(this.chalkboard.mainCourseSide));
    this.chalkboardEditionForm.addControl('mainCoursePrice', new FormControl(this.chalkboard.mainCoursePrice));
    this.chalkboardEditionForm.addControl('dessert', new FormControl(this.chalkboard.dessert));
    this.chalkboardEditionForm.addControl('dessertPrice', new FormControl(this.chalkboard.dessertPrice));
  }

  // TODO: uncomment when the cafe reopens
  // private _initChalkboardEditForm(): void {
  //   this.chalkboardEditionForm.addControl('mainCourse', new FormControl(this.chalkboard.mainCourse, Validators.required));
  //   this.chalkboardEditionForm.addControl('mainCourseSide', new FormControl(this.chalkboard.mainCourseSide, Validators.required));
  //   this.chalkboardEditionForm.addControl('mainCoursePrice', new FormControl(this.chalkboard.mainCoursePrice, Validators.required));
  //   this.chalkboardEditionForm.addControl('dessert', new FormControl(this.chalkboard.dessert, Validators.required));
  //   this.chalkboardEditionForm.addControl('dessertPrice', new FormControl(this.chalkboard.dessertPrice, Validators.required));
  // }

}

@NgModule({
  declarations: [ChalkboardManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class OrderManagerModule { }
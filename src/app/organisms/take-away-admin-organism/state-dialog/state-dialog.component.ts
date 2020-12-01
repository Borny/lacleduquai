import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { ChaiTakeAway, TakeAwayState } from '../../../models/chai-take-away.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'state-dialog',
  templateUrl: './state-dialog.component.html',
  styleUrls: ['./state-dialog.component.scss']
})
export class StateDialog implements OnInit {

  public stateForm: FormGroup = new FormGroup({});
  public order: ChaiTakeAway;
  public stateOptions = Object.values(TakeAwayState);

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<StateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ChaiTakeAway,
    public dialog: MatDialog,
  ) {
    this.order = data;
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this._initFormGroup();
  }

  public onSubmit(): void {
    this.order.state = this.stateForm.get('state').value;
  }

  public onCancel(): void {
    this.dialogRef.close({ order: this.order, action: this.CANCEL });
  }

  ////////////
  // PRIVATE
  ////////////
  private _initFormGroup(): void {
    this.stateForm.addControl('state', new FormControl(this.order.state, Validators.required))
  }
}

@NgModule({
  declarations: [StateDialog],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class StateDialogModule { }
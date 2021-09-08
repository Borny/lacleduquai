import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';
import { MaterialModule } from '../../../angular-material/angular-material.module';

import { ChaiTakeAway, TakeAwayState } from '../../../models/chai-take-away.model';

@Component({
  selector: 'state-dialog',
  templateUrl: './modal-take-away-state.component.html',
  styleUrls: ['./modal-take-away-state.component.scss']
})
export class ModalTakeAwayState implements OnInit {

  public stateForm: FormGroup = new FormGroup({});
  public order: ChaiTakeAway;
  public stateOptions = Object.values(TakeAwayState);

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(public modalCtrl: ModalController) { }

  ngOnInit(): void {
    this._initFormGroup();
  }

  public onSubmit(): void {
    this.order.state = this.stateForm.get('state').value;

    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'order': { ...this.order }
    })
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CANCEL
    });
  }

  ////////////
  // PRIVATE
  ////////////
  private _initFormGroup(): void {
    this.stateForm.addControl('state', new FormControl(this.order.state, Validators.required))
  }
}

@NgModule({
  declarations: [ModalTakeAwayState],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule, AtomAsteriskModule],
  exports: [],
  providers: [],
})
class ModalTakeAwayStateModule { }
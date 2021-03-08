import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { SharedModule } from '../../../shared/shared.module';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';

import { Chalkboard } from '../../../models/chalkboard.model';
import { CafeService } from '../../../services/cafe.service';

@Component({
  selector: 'chalkboard-manager',
  templateUrl: './modal-chalkboard-manager-dialog.component.html',
  styleUrls: ['./modal-chalkboard-manager-dialog.component.scss']
})
export class ModalChalkboardManagerDialog implements OnInit {

  public chalkboardEditionForm: FormGroup = new FormGroup({});
  public chalkboard: Chalkboard;
  public chalkboardId: string;
  public isLoading: boolean;
  public chalkboardError: boolean;

  public readonly CHALKBOARD_TITLE = 'Ardoise du jour';
  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public modalCtrl: ModalController,
    private cafeService: CafeService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._getChalkboardData();
  }

  public onSubmit(): void {
    this.chalkboard.mainCourse = this.chalkboardEditionForm.get('mainCourse').value;
    this.chalkboard.mainCourseSide = this.chalkboardEditionForm.get('mainCourseSide').value;
    this.chalkboard.mainCoursePrice = this.chalkboardEditionForm.get('mainCoursePrice').value;
    this.chalkboard.dessert = this.chalkboardEditionForm.get('dessert').value;
    this.chalkboard.dessertPrice = this.chalkboardEditionForm.get('dessertPrice').value;

    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'chalkboard': { ...this.chalkboard }
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
  private _getChalkboardData(): void {
    this.cafeService.getChalkboardData()
      .subscribe(
        result => {
          this.chalkboard = result.data[0];
          this._initChalkboardEditForm();
          this.isLoading = false;
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
  declarations: [ModalChalkboardManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, IonicModule, MaterialModule, FormsModule, AtomAsteriskModule,],
  exports: [],
  providers: [],
})
class OrderManagerModule { }
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'delete',
  templateUrl: './modal-delete.component.html'
})
export class ModalDelete {
  @Input() contentData: any;

  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(public modalCtrl: ModalController) { }

  public onConfirm(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM_DELETE
    })
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CANCEL
    })
  }
}

@NgModule({
  declarations: [ModalDelete],
  imports: [CommonModule, IonicModule],
  exports: [],
  providers: [],
})
export class ModalDeleteModule { }

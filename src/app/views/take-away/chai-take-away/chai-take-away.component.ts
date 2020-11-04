import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TakeAwayService } from '../../../services/take-away.service';
import { ChaiTakeAway } from '../../../models/tchai-take-away.model';

@Component({
  selector: 'chai-take-away',
  templateUrl: './chai-take-away.component.html',
  styleUrls: ['./chai-take-away.component.scss']
})
export class ChaiTakeAwayView implements OnInit {

  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public hideForm = false;
  public showForm = false;
  public pickUpDay: string;
  public pickUpDate: string;
  public chaiTakeAwayForm: FormGroup = new FormGroup({});

  public quantities: number[] = [1, 2, 3, 4]
  public hasContainerOptions: string[] = ['Non', 'Oui']

  public hasContainer = false;

  constructor(private takeAwayService: TakeAwayService) { }

  ngOnInit() {
    this._initTchaiForm();
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;

    let formData: ChaiTakeAway = this.chaiTakeAwayForm.value;

    console.log(formData)

    this.takeAwayService.createTchaiTakeAway(formData)
      .subscribe(
        response => {
          this.isLoading = false;
          this.formSentSuccess = true;
          this.chaiTakeAwayForm.reset();
        },
        error => {
          this.isLoading = false;
          this.formSentFail = true;
        }
      )
  }

  public onToggleForm(): void {
    this.showForm = !this.showForm
  }

  public onReload(): void {
    location.reload();
  }

  public toggleHasContainer(): void {
    this.hasContainer = !this.hasContainer;
  }

  ////////////
  // PRIVATE 
  ////////////
  private _initTchaiForm(): void {
    this.chaiTakeAwayForm.addControl('lastName', new FormControl(null, Validators.required));
    this.chaiTakeAwayForm.addControl('firstName', new FormControl(null, Validators.required));
    this.chaiTakeAwayForm.addControl('phone', new FormControl(null, Validators.required));
    this.chaiTakeAwayForm.addControl('quantity', new FormControl(1, Validators.required));
    this.chaiTakeAwayForm.addControl('hasOwnContainer', new FormControl(null, Validators.required));
  }

}

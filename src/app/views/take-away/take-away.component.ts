import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TakeAwayService } from '../../services/take-away.service';
import { TchaiTakeAway } from '../../models/tchai-take-away.model';

@Component({
  selector: 'take-away',
  templateUrl: './take-away.component.html',
  styleUrls: ['./take-away.component.scss']
})
export class TakeAwayView implements OnInit {

  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public hideForm = false;
  public showForm = false;
  public pickUpDay: string;
  public pickUpDate: string;
  public tchaiTakeAwayForm: FormGroup = new FormGroup({});
  public quantities: number[] = [1, 2, 3, 4]

  constructor(private takeAwayService: TakeAwayService) { }

  ngOnInit() {
    this.tchaiTakeAwayForm.addControl('lastName', new FormControl(null, Validators.required));
    this.tchaiTakeAwayForm.addControl('firstName', new FormControl(null, Validators.required));
    this.tchaiTakeAwayForm.addControl('phone', new FormControl(null, Validators.required));
    this.tchaiTakeAwayForm.addControl('quantity', new FormControl(null, Validators.required));
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;

    let formData: TchaiTakeAway = this.tchaiTakeAwayForm.value;

    console.log(formData)

    this.takeAwayService.createTchaiTakeAway(formData)
      .subscribe(
        response => {
          this.isLoading = false;
          this.formSentSuccess = true;
          this.tchaiTakeAwayForm.reset();
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

}

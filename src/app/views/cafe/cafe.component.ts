import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cafe-view',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeView implements OnInit {

  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public subscriptionForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.subscriptionForm.addControl('lastName', new FormControl(null, Validators.required));
    this.subscriptionForm.addControl('firstName', new FormControl(null, Validators.required));
    this.subscriptionForm.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
    this.subscriptionForm.addControl('newsletterSubscription', new FormControl(false));
  }

  public onSubmit(): void {
    this.isLoading = true;
    console.log(this.subscriptionForm.value);
  }

  public onReload(): void {
    location.reload();
  }

}
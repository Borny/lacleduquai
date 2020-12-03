import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CafeSubscriptionService } from '../../services/cafe-subscription.service';

@Component({
  selector: 'app-cafe-subscription',
  templateUrl: './cafe-subscription.page.html',
  styleUrls: ['./cafe-subscription.page.scss'],
})
export class CafeSubscriptionPage implements OnInit {

  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public hideForm = false;
  public subscriptionForm: FormGroup = new FormGroup({});

  constructor(private cafeSubscriptionService: CafeSubscriptionService) { }

  ngOnInit() {
    this.subscriptionForm.addControl('lastName', new FormControl(null, Validators.required));
    this.subscriptionForm.addControl('firstName', new FormControl(null, Validators.required));
    this.subscriptionForm.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
    this.subscriptionForm.addControl('newsletterSubscription', new FormControl(false));
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;
    this.cafeSubscriptionService.postCafeSubscriptionForm(this.subscriptionForm.value).subscribe(
      response => {
        this.isLoading = false;
        this.formSentSuccess = true;
        this.subscriptionForm.reset();
        setTimeout(() => {
          this.onReload();
        }, 10000);
      },
      error => {
        this.isLoading = false;
        this.formSentFail = true;
      }
    );
  }

  public onReload(): void {
    location.reload();
  }

}

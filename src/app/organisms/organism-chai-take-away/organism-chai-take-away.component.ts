import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { MatRadioChange } from '@angular/material/radio';
// import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { TakeAwayService } from '../../services/take-away.service';
import { ChaiTakeAway } from '../../models/chai-take-away.model';

@Component({
  selector: 'organism-chai-take-away',
  templateUrl: './organism-chai-take-away.component.html',
  styleUrls: ['./organism-chai-take-away.component.scss'],
})
export class ChaiTakeAwayOrganism implements OnInit {

  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public hideForm = false;
  public showForm = false;
  public pickUpDay: number;
  public pickUpMonth: string;
  public price = 8;
  public totalPrice = 8;
  public oneLiterPrice = 8;
  public depositAmount = 3;
  public totalDeposit = 3;
  public orderQuantity = 1;
  public chaiTakeAwayForm: FormGroup;
  public hasContainer = false;
  public quantity: number = 1;

  public quantities: string[] = ['1 litre', '2 litres', '3 litres', '4 litres']

  public minDateFilter: Date;
  public maxDateFilter: Date;

  constructor(private takeAwayService: TakeAwayService) { }

  ngOnInit() {
    this._initChaiForm();
    this._setMinMaxDates();
    this._getTotalPrice();
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;

    // Retrieving the form data
    const formData = this.chaiTakeAwayForm.value;
    const chaiOrderData: ChaiTakeAway = { ...formData, price: this.price, totalPrice: this.totalPrice, totalDeposit: this.totalDeposit };

    // Transforming the date values

    this.pickUpDay = formData.pickUpDate.getDate();
    this.pickUpMonth = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(formData.pickUpDate);

    this.takeAwayService.createChaiTakeAwayOrder(chaiOrderData)
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
      );
  }

  public onToggleForm(): void {
    this.showForm = !this.showForm;
  }

  public onReload(): void {
    location.reload();
  }

  public toggleHasContainer(event: CustomEvent): void {
    this.hasContainer = !this.hasContainer;
    this._getTotalPrice();
  }

  // Setting a filter on the datepicker
  public dateFilter(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Only allows Tuesday and Thursday to be selected.
    return day !== 0 && day !== 1 && day !== 3 && day !== 5 && day !== 6;
  }

  public onQuantityChange(event: CustomEvent): void {
    this.price = this.oneLiterPrice * event.detail.value;
    this.orderQuantity = event.detail.value;
    this._getTotalPrice();
  }

  public removeQuantity(event: Event): void {
    this.quantity--;
  }
  public addQuantity(event: Event): void {
    this.quantity++;
  }

  ////////////
  // PRIVATE
  ////////////
  private _initChaiForm(): void {
    this.chaiTakeAwayForm = new FormGroup({
      lastName: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      quantity: new FormControl(1, Validators.required),
      hasOwnContainer: new FormControl(false, Validators.required),
      pickUpDate: new FormControl(null, Validators.required)
    });
  }

  private _setMinMaxDates(): void {
    const currentYear = new Date().getFullYear();
    this.minDateFilter = new Date();
    this.maxDateFilter = new Date(currentYear + 0, 11, 31);
  }

  private _getTotalPrice(): void {
    if (this.hasContainer) {
      this.totalPrice = this.price;
      this.totalDeposit = 0;
    } else {
      this.totalDeposit = this.depositAmount * this.orderQuantity;
      this.totalPrice = this.price + this.totalDeposit;
    }
  }

}

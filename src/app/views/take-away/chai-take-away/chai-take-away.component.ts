import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { TakeAwayService } from '../../../services/take-away.service';
import { ChaiTakeAway } from '../../../models/tchai-take-away.model';

@Component({
  selector: 'chai-take-away',
  templateUrl: './chai-take-away.component.html',
  styleUrls: ['./chai-take-away.component.scss']
})
export class ChaiTakeAwayOrganism implements OnInit {

  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public hideForm = false;
  public showForm = false;
  public pickUpDay: number;
  public pickUpMonth: string;
  public price: number = 8;
  public totalPrice: number = 8;
  public oneLiterPrice: number = 8;
  public depositAmount = 3;
  public totalDeposit: number = 3;
  public orderQuantity: number = 1;
  public chaiTakeAwayForm: FormGroup = new FormGroup({});

  public pickUpDates: Date[] = [];
  public quantities: string[] = ['1 litre', '2 litres', '3 litres', '4 litres']
  public hasContainerOptions: string[] = ['Non', 'Oui']

  public hasContainer = false;

  public minDateFilter: Date;
  public maxDateFilter: Date;

  constructor(private takeAwayService: TakeAwayService) { }

  ngOnInit() {
    this._initTchaiForm();
    this._setMinMaxDates();
    this._getTotalPrice();
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;

    // Retrieving the form data
    const formData = this.chaiTakeAwayForm.value;
    const tchaiOrderData: ChaiTakeAway = { ...formData, totalPrice: this.totalPrice }

    // Transforming the date values
    this.pickUpDay = formData.pickUpDate.getDate();
    this.pickUpMonth = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(formData.pickUpDate);

    this.takeAwayService.createTchaiTakeAwayOrder(tchaiOrderData)
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

  public toggleHasContainer(event: MatSlideToggleChange): void {
    this.hasContainer = !this.hasContainer;
    this._getTotalPrice();
  }

  public dateFilter(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Only allows Tuesday and Thursday to be selected.
    return day !== 0 && day !== 1 && day !== 3 && day !== 5 && day !== 6;
  }

  public onQuantityChange(event: MatRadioChange): void {
    this.price = this.oneLiterPrice * event.value;
    this.orderQuantity = event.value;
    this._getTotalPrice();
  }

  ////////////
  // PRIVATE 
  ////////////
  private _initTchaiForm(): void {
    this.chaiTakeAwayForm.addControl('lastName', new FormControl(null, Validators.required));
    this.chaiTakeAwayForm.addControl('firstName', new FormControl(null, Validators.required));
    this.chaiTakeAwayForm.addControl('phone', new FormControl(null, Validators.required));
    this.chaiTakeAwayForm.addControl('quantity', new FormControl(1, Validators.required));
    this.chaiTakeAwayForm.addControl('hasOwnContainer', new FormControl(false, Validators.required));
    this.chaiTakeAwayForm.addControl('pickUpDate', new FormControl(null, Validators.required));
  }

  private _setMinMaxDates(): void {
    const currentYear = new Date().getFullYear();
    this.minDateFilter = new Date();
    this.maxDateFilter = new Date(currentYear + 0, 11, 31);
  }

  private _getTotalPrice(): void {
    if (this.hasContainer) {
      this.totalPrice = this.price;
    } else {
      this.totalDeposit = this.depositAmount * this.orderQuantity;
      this.totalPrice = this.price + this.totalDeposit;
    }
  }
}

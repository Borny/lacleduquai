import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { SeasonEnum } from '../../models/season.enum';
import { PaymentMethods } from '../../models/payment-methods.enum';
import { Course } from '../../models/courses.model';
import { Workshop } from '../../models/workshop.model';
import { PreSubscription } from '../../models/pre-subscription.model';

import { SubscriptionService } from '../../services/subscription.service';

import { requireCheckboxesToBeCheckedValidator } from '../../validators/checkbox';

@Component({
  selector: 'organism-course-subscription-form',
  templateUrl: './organism-course-subscription-form.component.html',
  styleUrls: ['./organism-course-subscription-form.component.scss'],
})
export class OrganismCourseSubscriptionFormComponent implements OnInit {
  public isLoading = false;
  public formSentSuccess = false;
  public formSentFail = false;
  public hideForm = false;
  public isPreviouslyEnrolled = false;
  public subscriptionForm: FormGroup = new FormGroup({});

  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD,
  ];

  public courses: Course[] = [
    {
      id: '1',
      detail: 'Lundi 18h30 / Théâtre',
      name: 'lundi 18h30',
    },
    {
      id: '2',
      detail: 'Lundi 20h30 / Théâtre',
      name: 'lundi 20h30',
    },
    {
      id: '3',
      detail: 'Mardi 18h30 / Danse contemporaine',
      name: 'mardi 18h30',
    },
    {
      id: '4',
      detail: 'Mardi 20h30 / Cie Amateur',
      name: 'mardi 20h30',
    },
    {
      id: '5',
      detail: 'Mercredi 18h30 / Danse-théâtre',
      name: 'mercredi 18h30',
    },
    {
      id: '6',
      detail: 'Mercredi 20h30 / Danse contemporaine',
      name: 'mercredi 20h30',
    },
    {
      id: '7',
      detail: 'Jeudi 18h30 / Théâtre',
      name: 'jeudi 18h30',
    },
    {
      id: '8',
      detail: 'Jeudi 20h30 / Improvisation',
      name: 'jeudi 20h30',
    },
  ];

  public workshops: Workshop[] = [
    {
      id: 'nov7',
      date: '7 novembre',
    },
    {
      id: 'dec5',
      date: '5 décembre',
    },
    {
      id: 'jan16',
      date: '16 janvier',
    },
    {
      id: 'fev6',
      date: '6 février',
    },
    {
      id: 'mar6',
      date: '6 mars',
    },
    {
      id: 'apr17',
      date: '17 avril',
    },
    {
      id: 'may15',
      date: '15 mai',
    },
  ];

  get coursesFormArray() {
    return this.subscriptionForm.get('courses') as FormArray;
  }

  get workshopsFormArray() {
    return this.subscriptionForm.get('workshops') as FormArray;
  }

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit() {
    this.subscriptionForm.addControl(
      'lastName',
      new FormControl(null, Validators.required)
    );
    this.subscriptionForm.addControl(
      'firstName',
      new FormControl(null, Validators.required)
    );
    this.subscriptionForm.addControl(
      'phone',
      new FormControl(null, Validators.required)
    );
    this.subscriptionForm.addControl(
      'email',
      new FormControl(null, [Validators.required, Validators.email])
    );
    this.subscriptionForm.addControl(
      'courses',
      new FormArray([], requireCheckboxesToBeCheckedValidator())
    );
    this.subscriptionForm.addControl('workshops', new FormArray([]));
    this.subscriptionForm.addControl(
      'previouslyEnrolled',
      new FormControl(false, Validators.required)
    );
    this.subscriptionForm.addControl(
      'paymentMethod',
      new FormControl(null, Validators.required)
    );
    this.subscriptionForm.addControl(
      'subscriptionRequestDate',
      new FormControl(new Date(), Validators.required)
    );
    this.subscriptionForm.addControl(
      'season',
      new FormControl(SeasonEnum.TWENTY_ONE, Validators.required)
    );
    this._addControl('courses', this.courses, false);
    this._addControl('workshops', this.workshops, false);
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;

    // Filtering the choosen course
    const selectedCourseNames = this.subscriptionForm.value.courses
      .map((checked: boolean, i: number) =>
        checked ? this.courses[i].name : null
      )
      .filter((v) => v !== null);

    // Filtering the choosen workshop
    const selectedWorkshopDates = this.subscriptionForm.value.workshops
      .map((checked: boolean, i: number) =>
        checked ? this.workshops[i].date : null
      )
      .filter((v) => v !== null);

    const formData: PreSubscription = this.subscriptionForm.value;
    formData.courses = selectedCourseNames;
    formData.workshops = selectedWorkshopDates;

    this.subscriptionService.createMember(formData).subscribe(
      (response) => {
        this.isLoading = false;
        this.formSentSuccess = true;
        this.subscriptionForm.reset();
      },
      (error) => {
        this.isLoading = false;
        this.formSentFail = true;
      }
    );
  }

  public toggleShowDiscountText(checked: boolean): void {
    this.isPreviouslyEnrolled = checked;
    checked
      ? this.subscriptionForm.addControl(
          'previousCourseInfo',
          new FormControl(null)
        )
      : this.subscriptionForm.removeControl('previousCourseInfo');
  }

  public onReload(): void {
    location.reload();
  }

  ////////////
  // PRIVATE
  ////////////
  private _addControl(
    controlsName: string,
    controls: any[],
    required?: boolean
  ): void {
    controls.forEach(() => {
      (<FormArray>this.subscriptionForm.controls[controlsName]).push(
        new FormControl(null)
      );
    });
  }
}
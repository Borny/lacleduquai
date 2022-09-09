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

  public courses: Course[] = [];
  public workshops: Workshop[] = [];

  get coursesFormArray() {
    return this.subscriptionForm.get('courses') as FormArray;
  }

  get workshopsFormArray() {
    return this.subscriptionForm.get('workshops') as FormArray;
  }

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit() {
    this._getCourses();
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.hideForm = true;

    // Filtering the choosen course
    const selectedCourseNames = this.subscriptionForm.value.courses
      .map((checked: boolean, i: number) =>
        checked ? this.courses[i]._id : null
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

    console.log(formData);

    this.subscriptionService.createMember(formData).subscribe(
      (response) => {
        this.isLoading = false;
        this.formSentSuccess = true;
        this.subscriptionForm.reset();
      },
      (error) => {
        console.log(error);
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
      (this.subscriptionForm.controls[controlsName] as FormArray).push(
        new FormControl(null)
      );
    });
  }

  private _getCourses(): void {
    this.isLoading = true;
    this.subscriptionService.getCourseList().subscribe(({ courseList }) => {
      console.log(courseList);
      courseList.forEach((course) => {
        const courseData: Course = {
          _id: course._id,
          name: course.name,
          time: course.time,
          maxAttendee: course.maxAttendee,
          attendeesCount: course.attendeesCount,
          day: course.day,
          level: course.level,
          professor: course.professor,
          position: course.position,
        };
        this.courses.push(courseData);
      });

      this.courses.sort((a: Course, b: Course) => a.position - b.position);
      console.log(this.courses);

      this._initForm();
    });
  }

  private _initForm(): void {
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
      new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
      ])
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
      new FormControl(SeasonEnum.TWENTY_TWO, Validators.required)
    );
    this._addControl('courses', this.courses, false);
    this._addControl('workshops', this.workshops, false);

    this.isLoading = false;
  }
}

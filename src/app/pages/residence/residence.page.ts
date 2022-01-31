import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Residence } from '../../models/residence.model';
import { ResidenceService } from '../../services/residence.service';
import { requireCheckboxesToBeCheckedValidator } from '../../validators/checkbox';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.page.html',
  styleUrls: ['./residence.page.scss'],
})
export class ResidencePage implements OnInit {
  public isLoading = false;
  public hideForm = false;
  public isFormSent = false;
  public isFormFailed = false;

  public locations: string[] = [
    'Bordeaux Métropole',
    'Gironde',
    'Landes',
    'Pays Basque',
    'France',
    'Au-delà...',
  ];

  public artisticPractices: string[] = [
    'Danse contemporaine',
    'Théâtre',
    'Danse - théâtre',
    'Musique',
    'Cirque',
    'Autre',
  ];

  public availabilities: string[] = [
    'Du 25 au 29 Octobre 2021',
    'Du 22 au 26 Novembre 2021',
    'Du 27 au 31 Décembre 2021',
    'Du 17 au 21 Janvier 2022',
    'Du 21 au 25 Février 2022',
    'Du 21 au 25 Mars 2022',
    'Du 18 au 22 Avril 2022',
    'Du 16 au 20 Mai 2022',
  ];

  public residenceForm: FormGroup;

  public readonly HEADER_TITLE = 'Accueil en résidence';
  public readonly TITLE = 'Demande de Résidence Artistique';
  public readonly SEND_BUTTON_TEXT = 'Envoyer';
  public readonly HOME_BTN_TEXT = 'Accueil';
  public readonly RELOAD = 'Réessayer';

  constructor(
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit() {
    this._initContactForm();
  }

  // Reseting the form on page leave
  ionViewDidLeave(): void {
    this.residenceForm.reset();
    this.isLoading = false;
    this.hideForm = false;
    this.isFormSent = false;
    this.isFormFailed = false;
  }

  // Submitting the form
  public onSubmit(): void {
    if (this.residenceForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Filtering the choosen course
    const selectedArtisticPracticeNames =
      this.residenceForm.value.artisticPractice
        .map((checked: boolean, index: number) =>
          checked ? this.artisticPractices[index] : null
        )
        .filter((value) => value !== null);

    // Filtering the choosen availability
    // TODO: uncomment when availability dates are set
    // const selectedAvailability = this.residenceForm.value.availability
    //   .map((checked: boolean, index: number) =>
    //     checked ? this.availabilities[index] : null
    //   )
    //   .filter((value) => value !== null);

    // Updating the form values
    const formValues: Residence = this.residenceForm.value;
    // formValues.availability = selectedAvailability;
    formValues.artisticPractice = selectedArtisticPracticeNames;

    // Sending the message
    this.residenceService.postResidenceForm(formValues).subscribe(
      (response) => {
        this.isLoading = false;
        this.isFormSent = true;
        this.hideForm = true;
        this.residenceForm.reset();
      },
      (error) => {
        this.isLoading = false;
        this.isFormFailed = true;
        console.error(error);
        console.error(error.error.message);
      }
    );
  }

  // Navigate home
  public onNavigateHome(): void {
    this.isLoading = false;
    this.isFormSent = false;
    this.isFormFailed = false;
    this.residenceForm.reset();
    this.router.navigateByUrl('/lcdq/accueil');
  }

  // Reload the page
  public onReload(): void {
    location.reload();
  }

  // Adding a team member
  public onAddTeamMember(): void {
    const formArray = this.residenceForm.get('projectTeam') as FormArray;
    formArray.push(new FormControl(null, Validators.required));
  }

  // Removing a team member
  public onRemoveTeamMember(event, index: number): void {
    const formArray = this.residenceForm.get('projectTeam') as FormArray;
    formArray.removeAt(index);
  }

  // Getting the artistic control
  get projectTeamFormArray(): FormArray {
    return this.residenceForm.get('projectTeam') as FormArray;
  }

  // Getting the artistic control
  get artisticPracticeFormArray(): FormArray {
    return this.residenceForm.get('artisticPractice') as FormArray;
  }

  // Getting the availability control
  get availabilityFormArray(): FormArray {
    return this.residenceForm.get('availability') as FormArray;
  }

  ////////////
  // PRIVATE
  ////////////

  // Builds the residence form
  private _initContactForm(): void {
    this.residenceForm = new FormGroup({
      projectName: new FormControl(null, Validators.required),
      companyName: new FormControl(null, Validators.required),
      managerName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
      ]),
      address: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      projectDescription: new FormControl(null, Validators.required),
      projectTeam: new FormArray(
        [new FormControl(null, Validators.required)],
        Validators.required
      ),
      artisticPractice: new FormArray(
        [],
        requireCheckboxesToBeCheckedValidator()
      ),

      // TODO: delete when availability dates are set
      availabilityText: new FormControl(null, Validators.required),
      // TODO: uncomment when availability dates are set
      // availability: new FormArray([], requireCheckboxesToBeCheckedValidator()),
      videoLink: new FormControl(null),
      website: new FormControl(null),
      partners: new FormControl(null),
    });
    this._addControl('artisticPractice', this.artisticPractices);
    // TODO: uncomment when availability dates are set
    // this._addControl('availability', this.availabilities);
  }

  // Add control to the residence form control array
  private _addControl(controlsName: string, controls: any[]): void {
    const formArray = this.residenceForm.controls[controlsName] as FormArray;
    controls.forEach(() => {
      formArray.push(new FormControl(null));
    });
  }
}

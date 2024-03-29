import { Input, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';

import { ModalDelete } from '../modal-delete/modal-delete.component';

import { Residence } from '../../../models/residence.model';

@Component({
  selector: 'modal-residence-manager-page',
  templateUrl: './modal-residence-manager.page.html',
  styleUrls: ['./modal-residence-manager.page.scss'],
})
export class ModalResidenceManagerPage implements OnInit {
  public residence: Residence;

  public residenceEditionForm: FormGroup = new FormGroup({});
  public practiceForm: FormArray = new FormArray([]);
  public availabilityForm: FormArray = new FormArray([]);
  public teamForm: FormArray = new FormArray([]);
  public practiceList: string[] = [];
  public availabilityList: string[] = [];
  public teamList: string[] = [];
  public isBooked: boolean;

  public isLoading: boolean;

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

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly INTERNAL_LINK = 'interne';
  public readonly EXTERNAL_LINK = 'externe';

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
    this.isBooked = this.residence.booked;
    this._initResidenceEditionForm();
  }

  // Submitting the residence form
  public onSubmit(): void {
    if (this.residenceEditionForm.invalid) {
      return;
    }

    // Filtering the choosen course
    const selectedArtisticPracticeNames =
      this.residenceEditionForm.value.artisticPractice
        .map((checked: boolean, index: number) =>
          checked ? this.artisticPractices[index] : null
        )
        .filter((value) => value !== null);

    // Filtering the choosen availability
    // TODO: uncomment when availability dates are set
    // const selectedAvailability = this.residenceEditionForm.value.availability
    //   .map((checked: boolean, index: number) =>
    //     checked ? this.availabilities[index] : null
    //   )
    //   .filter((value) => value !== null);

    // Updating the form values
    const formValues: Residence = this.residenceEditionForm.value;
    // TODO: uncomment when availability dates are set
    // formValues.availability = selectedAvailability;
    // TODO: delete when availability dates are set
    formValues.availability = [];
    formValues.availability.push(
      this.residenceEditionForm.get('availabilityText').value
    );
    formValues.artisticPractice = selectedArtisticPracticeNames;

    this.residence.projectName = this.residenceEditionForm.value.projectName;
    this.residence.companyName = this.residenceEditionForm.value.companyName;
    this.residence.managerName = this.residenceEditionForm.value.managerName;
    this.residence.email = this.residenceEditionForm.value.email;
    this.residence.phone = this.residenceEditionForm.value.phone;
    this.residence.address = this.residenceEditionForm.value.address;
    this.residence.projectDescription =
      this.residenceEditionForm.value.projectDescription;
    this.residence.videoLink = this.residenceEditionForm.value.videoLink;
    this.residence.website = this.residenceEditionForm.value.website;
    this.residence.partners = this.residenceEditionForm.value.partners;
    this.residence.location = this.residenceEditionForm.value.location;
    this.residence.artisticPractice =
      this.residenceEditionForm.value.artisticPractice;
    this.residence.availability = this.residenceEditionForm.value.availability;
    this.residence.projectTeam = this.residenceEditionForm.value.projectTeam;
    this.residence.booked = this.residenceEditionForm.value.booked;

    this.modalCtrl.dismiss({
      dismissed: this.CONFIRM,
      residence: { ...this.residence },
    });
  }

  public toggleBooking(event: CustomEvent): void {
    this.isBooked = !this.isBooked;
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.CANCEL,
    });
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        contentData: this.residence,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    if (data.dismissed === this.CONFIRM_DELETE) {
      // !!! Not sure why but the setTimeout is needed, probably asynchronous stuff...
      setTimeout(() => {
        this.modalCtrl.dismiss({
          dismissed: this.CONFIRM_DELETE,
          residence: this.residence,
        });
      });
    }
  }

  // Reload the page
  public onReload(): void {
    location.reload();
  }

  // Adding a team residence
  public onAddTeamMember(): void {
    const formArray = this.residenceEditionForm.get('projectTeam') as FormArray;
    formArray.push(new FormControl(null, Validators.required));
  }

  // Removing a team residence
  public onRemoveTeamMember(event, index: number): void {
    const formArray = this.residenceEditionForm.get('projectTeam') as FormArray;
    formArray.removeAt(index);
  }

  // Getting the project team control
  get projectTeamFormArray(): FormArray {
    return this.residenceEditionForm.get('projectTeam') as FormArray;
  }

  // Getting the artistic control
  get artisticPracticeFormArray(): FormArray {
    return this.residenceEditionForm.get('artisticPractice') as FormArray;
  }

  // Getting the availability control
  get availabilityFormArray(): FormArray {
    return this.residenceEditionForm.get('availability') as FormArray;
  }

  ////////////
  // PRIVATE
  ////////////
  // Builds the residence form
  private _initResidenceEditionForm(): void {
    // Practices
    this.practiceList = this.residence.artisticPractice;
    this.artisticPractices.forEach((pra) => {
      this.practiceList.find((practice) => pra === practice)
        ? this.practiceForm.push(
            new FormControl(
              this.practiceList.find((practice) => pra === practice)
            )
          )
        : this.practiceForm.push(new FormControl(null));
    });

    // Availability
    this.availabilityList = this.residence.availability;
    this.availabilities.forEach((av) => {
      this.availabilityList.find((avail) => av === avail)
        ? this.availabilityForm.push(
            new FormControl(this.availabilityList.find((avail) => av === avail))
          )
        : this.availabilityForm.push(new FormControl(null));
    });

    // Team
    this.teamList = this.residence.projectTeam;
    this.teamList.forEach((teamMember) => {
      this.teamForm.push(new FormControl(teamMember, Validators.required));
    });

    this.residenceEditionForm = new FormGroup({
      projectName: new FormControl(
        this.residence.projectName,
        Validators.required
      ),
      companyName: new FormControl(
        this.residence.companyName,
        Validators.required
      ),
      managerName: new FormControl(
        this.residence.managerName,
        Validators.required
      ),
      email: new FormControl(this.residence.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.residence.phone, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
      ]),
      address: new FormControl(this.residence.address, Validators.required),
      projectDescription: new FormControl(
        this.residence.projectDescription,
        Validators.required
      ),
      videoLink: new FormControl(this.residence.videoLink),
      website: new FormControl(this.residence.website),
      partners: new FormControl(this.residence.partners),
      location: new FormControl(this.residence.location, Validators.required),
      artisticPractice: this.practiceForm,
      // TODO: uncomment when availability dates are set
      // availability: this.availabilityForm,
      // TODO: delete when availability dates are set
      availabilityText: new FormControl(this.residence.availability),
      projectTeam: this.teamForm,
      booked: new FormControl(this.residence.booked),
    });
  }
}

@NgModule({
  declarations: [ModalResidenceManagerPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    FormsModule,
    AtomAsteriskModule,
  ],
  exports: [],
  providers: [],
})
class ModalResidenceCreateModule {}

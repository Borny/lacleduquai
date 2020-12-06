import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ion-input-molecule',
  templateUrl: './ion-input.component.html',
  styleUrls: ['./ion-input.component.scss'],
})
export class IonInputMolecule implements OnInit {

  @Input() position: string;
  @Input() inputLabel: string;
  @Input() inputType: string;
  @Input() inputName: string;
  @Input() controlName: string;
  @Input() required: boolean;
  @Input() ngclass: string;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() { }

}

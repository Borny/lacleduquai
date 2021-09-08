import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'squared-shapes-svg',
  templateUrl: './squared-shapes.component.html',
  styleUrls: ['./squared-shapes.component.scss'],
})
export class SquaredShapesComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() { }

}

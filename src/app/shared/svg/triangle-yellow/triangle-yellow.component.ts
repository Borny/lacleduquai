import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'triangle-yellow-svg',
  templateUrl: './triangle-yellow.component.html',
  styleUrls: ['./triangle-yellow.component.scss'],
})
export class TriangleYellowComponent implements OnInit {

  @Input() fill: string = 'secondary';

  constructor() { }

  ngOnInit() { }

}

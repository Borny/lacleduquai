import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'triangle-blue-svg',
  templateUrl: './triangle-blue.component.html',
  styleUrls: ['./triangle-blue.component.scss'],
})
export class TriangleBlueComponent implements OnInit {

  @Input() fill: string = 'secondary';

  constructor() { }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-workshops',
  templateUrl: './courses-workshops.page.html',
  styleUrls: ['./courses-workshops.page.scss'],
})
export class CoursesWorkshopsPage implements OnInit {
  public readonly HEADER_TITLE = 'Cours et Stages';
  public readonly TITLE = 'Cours et Stages à Bordeaux';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-workshops',
  templateUrl: './courses-workshops.page.html',
  styleUrls: ['./courses-workshops.page.scss'],
})
export class CoursesWorkshopsPage implements OnInit {
  public readonly HEADER_TITLE = 'Cours et stages';
  public readonly TITLE = 'Cours et stages à Bordeaux';

  constructor() { }

  ngOnInit() {
  }

}

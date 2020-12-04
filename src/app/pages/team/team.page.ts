import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  public readonly HEADER_TITLE = 'L\'Equipe';

  constructor() { }

  ngOnInit() {
  }

}

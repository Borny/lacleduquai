import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {
  public readonly HEADER_TITLE = 'Informations';

  constructor() { }

  ngOnInit() {
  }

}

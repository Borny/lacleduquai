import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.page.html',
  styleUrls: ['./legal.page.scss'],
})
export class LegalPage implements OnInit {

  public readonly HEADER_TITLE = 'Mentions Légales';

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'take-away',
  templateUrl: './take-away.component.html',
  styleUrls: ['./take-away.component.scss']
})
export class TakeAwayView {

  constructor(
    private router: Router) { }

  public onNavigateToTchai(): void {
    this.router.navigateByUrl('/a-emporter/chai')
  }

}

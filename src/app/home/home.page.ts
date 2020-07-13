import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public countDevelopOptions: any = 0;

  constructor(private router: Router) { }

  developOptions() {

    console.log(localStorage.getItem('developOptions'))

    if (localStorage.getItem('developOptions')) {
      this.router.navigateByUrl('/validate-event');
    } else {

      this.countDevelopOptions++;

      if (this.countDevelopOptions > 30) {
        localStorage.setItem('developOptions', 'true');
        this.router.navigateByUrl('/validate-event');
      }

      setTimeout(function () {
        this.countDevelopOptions = 0;
      }, 10000);

    }

  }

  go(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/igreja');
        break;
      case 8:
        this.router.navigateByUrl('/events');
        break;
      default:
        break;
    }
  }

}

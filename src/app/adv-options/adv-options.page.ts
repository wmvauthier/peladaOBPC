import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adv-options',
  templateUrl: './adv-options.page.html',
  styleUrls: ['./adv-options.page.scss'],
})
export class AdvOptionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdvOption(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('/lista-cultos');
        break;
      case 1:
        this.router.navigateByUrl('/validate-event');
        break;
      case 8:
        this.router.navigateByUrl('/events');
        break;
      default:
        break;
    }
  }

}

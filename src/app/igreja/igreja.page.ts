import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-igreja',
  templateUrl: './igreja.page.html',
  styleUrls: ['./igreja.page.scss'],
})
export class IgrejaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/igreja');
        break;
      default:
        break;
    }
  }

}

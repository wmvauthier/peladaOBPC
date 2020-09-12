import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.http.get('', []).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

  go(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
    }
  }

}

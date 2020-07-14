import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-validate-event',
  templateUrl: './validate-event.page.html',
  styleUrls: ['./validate-event.page.scss'],
})
export class ValidateEventPage implements OnInit {

  public qrCodeVal: any;
  public finalValue: any;

  public selectedEvent: any = localStorage.getItem('selectedEvent');

  constructor(private qrScanner: QRScanner, private http: HttpService) { }

  ngOnInit() {
    this.qrCodeVal = null;
  }

  StartScannig() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qrScanner.show();
        document.getElementsByTagName("body")[0].style.opacity = '0';
        this.qrCodeVal = this.qrScanner.scan().subscribe((textFound) => {
          this.StopScanning(textFound);
        }, (err) => {
          alert(JSON.stringify(err));
        })
      } else if (status.denied) {

      } else {

      }
    })
  }

  StopScanning(textFound) {
    document.getElementsByTagName("body")[0].style.opacity = '1';
    this.qrCodeVal.unsubscribe();
    this.qrCodeVal = null;
    this.http.get('eventos/api/listaTicket', [this.selectedEvent]).subscribe(
      data => {
        data.eventosTickets.forEach(element => {
          if (element.ticket == textFound) {
            this.finalValue = textFound;
            this.http.get('validateTicket', [textFound]).subscribe(
              data => { alert("Ticket validado com sucesso!") },
              error => { alert(error) }
            )
          }
        });
        if (!this.finalValue) {
          alert('Ops! Este Ticket não é válido!');
        }
      },
      error => console.log(error)
    )

  }

}

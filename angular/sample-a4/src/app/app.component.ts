import { Component } from '@angular/core';
import SmsCounter from 'sms-counter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sammple app';

  ngOnInit() {
    console.log("hello")
    let char  = "\\";
    let smsScounter = SmsCounter.count(char);
    console.log(char);
    console.log(smsScounter);
  }
}

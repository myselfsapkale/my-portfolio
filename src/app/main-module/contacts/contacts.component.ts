import { Component, OnDestroy } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
import { Subscription } from 'rxjs';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnDestroy {
  isDarkMode: boolean = false;
  showSpinner: boolean = false;
  subscription: Subscription;
  msg: string = 'Message Recived Successfully !!';
  showNotification: boolean = false;
  email_pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor(private _commonService: CommonServiceService) {
    this.subscription = this._commonService.lightDarkModeEmit.subscribe((status) => {
      this.isDarkMode = status;
    });
    if (window.localStorage.getItem('isDarkMode') == 'true') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  async sendMessage(form: any) {
    this.showSpinner = true;
    Object.keys(form.controls).map(control => { // Here we are setting error on form controls which are invalid
     form.controls[control].touched = true;
    });

    if(form.status == 'VALID') {  // If the form is valid then we will send the message
      
      emailjs.init('Zrz-nyYvzTuhQV_d4');

      await emailjs.send("service_t1fdup4","template_muozs6r",{
        from_name: form.value.name,
        to_name: "Pushpendra Sapkale",
        from_email: form.value.email,
        message: form.value.message,
        reply_to: form.value.email,
      });
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 1000);
      
      this.showSpinner = false;
      form.reset();
    } else {
      this.showSpinner = false;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

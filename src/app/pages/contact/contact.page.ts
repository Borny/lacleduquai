import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public isLoading = false;
  public isMessageSent = false;
  public isSendMessageFailed = false;
  public contactForm: FormGroup = new FormGroup({});

  public readonly HEADER_TITLE = 'Contact';
  public readonly TITLE = 'La Clé Du Quai Bordeaux Centre';
  public readonly HOME_BTN_TEXT = 'Accueil';
  public readonly SEND_BUTTON_TEXT = 'Envoyer';
  public readonly RELOAD = 'Réessayer';

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this._initContactForm();
  }

  // Submitting the form
  public onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }
    this.isLoading = true;
    const messageValues: Message = this.contactForm.value;

    // Sending the message
    this.contactService.postMessage(messageValues)
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.isMessageSent = true;
        },
        (error) => {
          this.isLoading = false;
          this.isSendMessageFailed = true;
        });
  }

  // Navigate home
  public onNavigateHome(): void {
    this.isLoading = false;
    this.isMessageSent = false;
    this.isSendMessageFailed = false;
    this.contactForm.reset();
    this.router.navigateByUrl('/lcdq/accueil');
  }

  // Reload the page
  public onReload(): void {
    location.reload();
  }

  ////////////
  // PRIVATE
  ////////////

  // Builds the contact form
  private _initContactForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required)
    });
  }

}

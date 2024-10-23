import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'; // Pour l'envoi d'e-mails avec EmailJS

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      // Envoi de l'email via EmailJS
      emailjs.send('service_hqq6lfm', 'template_thlktlo', {
        from_name: formValues.name,
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
      }, 'WH7Ub87BPjR8ls3_A')
        .then((response) => {
          console.log('Email envoyé avec succès!', response.status, response.text);
          // Optionnel : message de confirmation à l'utilisateur
        })
        .catch((error) => {
          console.error('Echec d\'envoi de l\'email:', error);
          // Optionnel : gestion des erreurs
        });
    } else {
      // Optionnel : Gestion des erreurs de validation
      console.log('Formulaire invalide');
    }
  }
}

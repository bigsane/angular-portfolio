import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isMessageSent: boolean = false;  // Indicateur pour afficher la popin de succès

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

          // Afficher la popin de succès
          this.isMessageSent = true;

          // Réinitialiser le formulaire
          this.contactForm.reset();

          // Cacher la popin après 3 secondes
          setTimeout(() => {
            this.isMessageSent = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Echec d\'envoi de l\'email:', error);
          // Gestion des erreurs éventuelle
        });
    } else {
      console.log('Formulaire invalide');
    }
  }
}

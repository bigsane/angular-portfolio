import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Dévelopeur Spring/Ionic',
      company: 'Léa association',
      location: 'Remote',
      startDate: 'Février 2024',
      endDate: 'Maintenant',
      type: 'Temps partiel',
      logo: 'assets/img/lea.png',
      projectName: 'AppLea',
      projectDescription: `Léa est une association qui aide les parents qui ont des enfants en situation de handicap.
                          L'objectif est d'avoir toutes les fonctionnalités présentes sur le site internet comme :<br>
                          • Inscription, connexion<br>
                          • Gestion des rendez-vous avec les professionnels de santé<br>
                          • S'inscrire à des événements<br>
                          • Répertorier des crises`,
      tasks: [
        'Analyse des besoins et mise en place d\'un cahier de charges technique',
        'Modélisation de la base de données',
        'Maquettage de l\'interface graphique',
        'Mise en place du socle de base pour le back et le front',
        'Développement des fonctionnalités',
        'Déploiement sur appStore, playStore'
      ],
      tools: ['Spring Boot', 'Ionic', 'Lucidchart', 'Figma', 'Hibernate', 'IntelliJ', 'WebStorm',
        'PostgreSQL', 'MySQL', 'Heroku', 'Junit', 'Mockito'] // Liste des outils
    },
    {
      title: 'Front-end Developer',
      company: 'AnotherCompany',
      location: 'Remote',
      startDate: 'Feb 2020',
      endDate: 'Present',
      type: 'Full Time',
      logo: 'assets/img/sully.jpeg',
      projectName: 'Project B',
      projectDescription: `Une autre description pour un projet différent.`,
      tasks: [
        'Task 1',
        'Task 2',
        'Task 3'
      ],
      tools: ['Spring Boot', 'Ionic', 'Lucidchart', 'Figma', 'Hibernate', 'IntelliJ', 'WebStorm',
        'PostgreSQL', 'MySQL', 'Heroku', 'Junit', 'Mockito']
    }
    // Ajoute plus d'expériences ici
  ];
}

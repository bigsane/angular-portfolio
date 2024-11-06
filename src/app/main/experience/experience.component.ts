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
      context: 'Développement d\'une application mobile',
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
        'Déploiement sur appStore, playStore',
        'Tests unitaires et fonctionnels'
      ],
      tools: [
        'Spring Boot', 'Ionic', 'Lucidchart', 'Figma', 'Hibernate', 'IntelliJ', 'WebStorm',
        'PostgreSQL', 'MySQL', 'Heroku', 'Junit', 'Mockito'
      ]
    },
    {
      title: 'Concepteur développeur Java / Angular',
      company: 'Sully Group',
      location: 'Hybride',
      startDate: '2021',
      endDate: '2024',
      type: 'Temps plein',
      logo: 'assets/img/sully.png',
      context: 'Développement et TMA sur des projets du centre de service et consultant chez Enedis',
      projectDescription: `
        Participation à des projets variés pour plusieurs clients :<br>
        •  <u>Pour le CNRS (au Centre De Service) </u> : Gestion des données du personnel et des partenaires.<br>
        •  <u>FranceAgrimer, DGAC, Santé publique France (au Centre De Service) </u> : Développement de projets couvrant
        la gestion de licences, de paiements, et la prévention des infections liées aux soins, etc.<br>
        •  <u>Consultant chez Enedis</u>: Développement du projet Sikapa pour gérer les droits d’accès et la flexibilité des marchés
        de l'énergie via plusieurs micro-applications (Habilitation, Portail Conseiller, Portail Acteur du Marché, EASY).
      `,
      tasks: [
        '<strong>CNRS :</strong> Développement en mode Agile, résolution de bugs et ajout de fonctionnalités',
        '<strong>FranceAgriMer, DGAC, Santé publique France :</strong> Correction de bugs, migration de java 7 vers Java 8, refonte d\'applications Full stack et TMA',
        '<strong>Enedis : </strong>Analyse d\'US, développement de correctifs/évolutifs, tests, revue de code en pair programming'
      ],
      tools: [
        'Java', 'Spring', 'Spring Boot', 'Angular', 'AWS', 'Junit5', 'Mockito', 'PostgreSQL', 'Liquibase',
        'Hibernate', 'Jira Software', 'SonarQube', 'Jenkins', 'JHipster', 'EBX', 'Tomcat', 'Maven', 'Mantis', 'Xray', 'Git', 'GitHub', 'GitLab'
      ]
    },
    {
      title: 'Développeur Spring Boot / Angular',
      company: 'Axians Communication & System',
      location: 'Hybride',
      startDate: '2020',
      endDate: '2021',
      type: 'Alternance',
      logo: 'assets/img/axians.png',
      context: 'Développement d\'une application de gestion de plannings',
      projectDescription: `
    Au sein du service technique, en charge du développement d'une
    nouvelle application from scratch de gestion des plannings des employés
  `,
      tasks: [
        '<strong>Spécifications</strong> : Analyse des besoins et de l’existant, Choix des outils, mise en place de l’architecture',
        '<strong>Développement</strong> : Réalisation d\'une maquette, Implémentation de l’API REST, implémentation de l’interface utilisateur',
        '<strong>Tests et mise en production</strong> : Mise en place des Tests fonctionnels, mise en production sur une machine virtuelle interne',
        '<strong>Livrables/Résultats</strong> : Application mise en production et fonctionnelle, utilisée quotidiennement par les employés.',
        'Satisfaction du chef d\'entreprise et des utilisateurs.'
      ],
      tools: [
        'Spring Boot', 'MySQL', 'PostgreSQL', 'Maven', 'Hibernate', 'Angular',
        'JavaScript', 'Bootstrap', 'Git', 'GitHub', 'GitLab', 'ClickUp', 'Balsamiq Mockup'
      ]
    },
    {
      title: 'Développeur java/J2EE',
      company: 'Laboratoire LAPLACE, plasma et conversion d\'énergie',
      location: 'Hybride',
      startDate: 'Mai 2020',
      endDate: 'Août 2020',
      type: 'Stage',
      logo: 'assets/img/laplace.png',
      context: 'Développement et amélioration d\'applications Java EE',
      projectDescription: `
        Au sein du service informatique, en charge du développement de plusieurs fonctionalités d'évolution et de
        correctifs de bugs sur l'application de gestion des commandes passées par le laboratoire
      `,
      tasks: [
        '<strong>Spécifications</strong> : Analyse des besoins et de l’existant',
        '<strong>Gestion git</strong> : Fusion de deux anciens projets avec des historiques différents',
        '<strong>Développement</strong> : tickets correctifs et évolutifs',
        '<strong>Tests et mise en production</strong> : Mise en place des Tests fonctionnels'
      ],
      tools: [
        'J2EE', 'Spring MyBatis', 'Camunda BPMN', 'Git/GitHub', 'Ldap'
      ]
    },
    {
      title: 'Technicien réseau',
      company: 'Cellcom Guinée',
      location: 'En présentiel ( Conakry )',
      startDate: 'février 2016',
      endDate: 'octobre 2017',
      type: 'CDD puis CDI',
      logo: 'assets/img/cellcom.jpg',
      context: 'Supervision du réseau',
      projectDescription: `
        Au sein du NOC( network operation center) , supervision du réseau informatique et télécom sur l'ensemble du territoire
        Guinéen.
      `,
      tasks: [
        'Monitoring des écrans',
        'Analyse des alarmes et agissement en conséquence',
        'Coordination des interventions sur les sites avec les agents de terrain',
        'Rédaction de rapports'
      ],
      tools: [
        ' RBS', 'Routeurs', 'Excel 2007', 'word 2007', 'Cacti'
      ]
    }
  ];

}

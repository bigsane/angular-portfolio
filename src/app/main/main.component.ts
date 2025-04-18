import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { StudiesComponent } from './services/studies.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    StudiesComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  // Tableau contenant les informations des modals
  diplomas = [
    {
      id: 'diplome_1',
      imgSrc: 'assets/img/toeic.png',
      year: '2024',
      links: [
        { href: 'https://www.etsglobal.org/fr/en/digital-score-report/94A0F999335486260F36163F1E8F56AD1A45C0258348A341FC32F991F30EAACBQndUbzFEbUZkbEhpV3A0Q0RWK2lxcFdrd1oxRjl2NzgvQnZyR1A2eVgyZXIzTlNp', label: 'Résultats toeic' }
      ]
    },
    {
      id: 'diplome_2',
      imgSrc: 'assets/img/ups.png',
      year: '2019 - 2021',
      secondaryImg: 'assets/img/contenu_mdl.png',
      links: []
    },
    {
      id: 'diplome_3',
      imgSrc: 'assets/img/prog_l3.png',
      year: '2017 - 2019',
      links: []
    },
    {
      id: 'diplome_4',
      imgSrc: 'assets/img/info_iuheg.jpg',
      year: '2010 - 2014',
      links: []
    },
    {
      id: 'diplome_5',
      imgSrc: 'assets/img/full.png',
      year: '',
      links: [
        { href: 'https://www.udemy.com/certificate/UC-ebb706d1-97a1-42d4-854f-1cb2ccf7f217/', label: 'Votre première application web avec Angular et Spring Boot' },
        { href: 'https://www.udemy.com/certificate/UC-de5578cd-c171-49d6-a550-096356711033/', label: 'Go Java Full Stack with Spring Boot and Angular' }
      ]
    }
  ];

  works = [
    {
      id: 'work_1',
      titre: 'Développement d\'une application Android',
      imgSrc: 'assets/img/snaqe.jpg',
      year: '2021',
      client: 'Projet universitaire',
      description: 'Participation à un challenge d\'une journée au sein du master à l\'université Paul Sabatier pour développer un jeu de type "Snake" sur Android. Ce projet visait à mettre en pratique nos compétences en développement mobile.',
      tasks: 'Installation d\'Android Studio, analyse des fonctionnalités du jeu, développement de l\'application, tests fonctionnels pour garantir une expérience utilisateur fluide.',
      tools: 'Android Studio, Java'
    },
    {
      id: 'work_2',
      titre: 'Application de gestion des emplois du temps',
      imgSrc: 'assets/img/emploi_temps.jpg',
      year: '2021',
      client: 'Institut de Technologie de Blagnac',
      description: 'Développement d\'une application web permettant de gérer les emplois du temps d\'une école avec possibilité d\'extension pour d\'autres institutions. L\'application optimise la création automatique des emplois du temps en fonction de divers critères.',
      tasks: 'Recueil des besoins, rédaction du cahier des charges, optimisation de l\'algorithme de génération automatique, développement front-end et back-end, tests d\'intégration.',
      tools: 'Python, Django, Gurobi (optimisation), méthode Agile Scrum'
    },
    {
      id: 'work_3',
      titre: 'Application e-commerce pour la vente de vêtements',
      imgSrc: 'assets/img/ecommerce.jpg',
      year: '2021',
      client: 'Projet universitaire',
      description: 'Création d\'une application e-commerce pour la vente de vêtements, intégrant des pipelines CI/CD pour le déploiement automatisé sur une plateforme cloud. Le projet a été déployé sur Heroku en utilisant Docker.',
      tasks: 'Analyse des besoins, rédaction du cahier des charges, modélisation de la base de données, développement du front-end avec Vue.js, développement du back-end avec Spring Boot, mise en place des pipelines CI/CD, déploiement, tests fonctionnels.',
      tools: 'Spring Boot, Vue.js, Git/GitHub, GitHub Actions, Heroku, Hibernate, PostgreSQL, Docker'
    },
    {
      id: 'work_4',
      titre: 'Amélioration de la plateforme CheckYourSmile.fr',
      imgSrc: 'assets/img/checkyoursmile.jpg',
      year: '2021',
      client: 'Université Toulouse III - Paul Sabatier',
      description: 'Projet d\'évolution de la plateforme CheckYourSmile.fr, une plateforme d\'apprentissage de l\'anglais à travers des jeux éducatifs comme le pendu et les flashcards. L\'objectif était d\'ajouter de nouvelles fonctionnalités pour améliorer l\'engagement des utilisateurs.',
      tasks: 'Développement du jeu "Whispers", ajout de fonctionnalités telles que les systèmes de points et les récompenses, optimisation de l\'interface utilisateur.',
      tools: 'Symfony, Bootstrap, PHP, HTML, CSS'
    },
    {
      id: 'work_5',
      titre: 'Gestion des ressources universitaires',
      imgSrc: 'assets/img/ressources.jpg',
      year: '2021',
      client: 'Université Toulouse III - Paul Sabatier',
      description: 'Développement d\'une application client lourd pour la gestion des ressources universitaires (suivi des capteurs, consommation d\'eau et d\'électricité). L\'application permettait une surveillance centralisée des ressources sur le campus.',
      tasks: 'Analyse des besoins, rédaction du cahier des charges, modélisation de la base de données, conception de l\'interface utilisateur, développement des modules clients et serveurs, intégration des fonctionnalités, tests fonctionnels.',
      tools: 'Java SE, API Sockets, MySQL, Balsamiq Mockup'
    },
    {
      id: 'work_6',
      titre: 'Application de gestion des commandes pour une boutique',
      imgSrc: 'assets/img/commande_1.jpg',
      year: '2015',
      client: 'Projet personnel',
      description: 'Création d\'une application de gestion de commandes pour une boutique. Cette application permet de gérer les clients, les fournisseurs, les produits, ainsi que les commandes effectuées, avec une interface utilisateur conviviale.',
      tasks: 'Analyse des besoins, rédaction du cahier des charges techniques, modélisation de la base de données, conception de l\'interface graphique, développement et tests fonctionnels.',
      tools: 'Java SE, MySQL, méthode Merise'
    },
    {
      id: 'work_7',
      titre: 'Application de gestion d\'une pharmacie',
      imgSrc: 'assets/img/pharmacie_1.jpg',
      year: '2014',
      client: 'Giga Technologie',
      description: 'Développement d\'une application de gestion pour une pharmacie, incluant la gestion des stocks, des clients, des fournisseurs, et des commandes. Le projet a couvert tout le cycle de vie du développement logiciel.',
      tasks: 'Analyse des besoins, élaboration du cahier des charges, modélisation de la base de données, conception de l\'interface utilisateur, développement des modules métiers, génération des fichiers d\'installation, tests multi-plateformes.',
      tools: 'Windev XIV, Merise'
    },
    {
      id: 'work_8',
      titre: 'Concours de développement d\'une application scolaire',
      imgSrc: 'assets/img/ecole.jpg',
      year: '2014',
      client: 'Easy Link Guinea',
      description: 'Participation à un concours interuniversitaire de 4 mois à Conakry. Le projet consistait à développer une application de gestion scolaire, en collaboration avec une équipe de 4 étudiants, pour le suivi administratif et pédagogique.',
      tasks: 'Recueil des besoins, rédaction du cahier des charges, modélisation de la base de données, conception de l\'interface graphique, développement des fonctionnalités principales, tests fonctionnels.',
      tools: 'Java SE, MySQL, Merise'
    }
  ];


  experiences = [
    {
      id: 'experience_1',
      title: 'Développeur Spring/Ionic',
      company: 'Léa Association',
      location: 'Remote',
      startDate: 'Février 2024',
      endDate: 'Présent',
      type: 'Temps partiel',
      logo: 'assets/img/lea_1.jpg',
      context: 'Développement d\'une application mobile pour les parents ayant des enfants en situation de handicap.',
      projectDescription: `
      Léa est une association dédiée à l'accompagnement des parents d'enfants en situation de handicap.
      Le projet vise à répliquer sur une application mobile toutes les fonctionnalités existantes du site internet, telles que :<br>
      • Inscription et connexion des utilisateurs<br>
      • Gestion des rendez-vous avec des professionnels de santé<br>
      • Inscription à des événements<br>
      • Répertorier les crises et incidents.
    `,
      tasks: [
        'Analyse des besoins et rédaction d\'un cahier des charges technique',
        'Conception de la base de données',
        'Maquettage de l\'interface utilisateur avec Figma',
        'Développement du backend en Spring Boot et du frontend avec Ionic',
        'Déploiement sur App Store et Google Play',
        'Réalisation de tests unitaires et fonctionnels pour validation'
      ],
      tools: [
        'Spring Boot', 'Ionic', 'Lucidchart', 'Figma', 'Hibernate', 'IntelliJ', 'WebStorm',
        'PostgreSQL', 'MySQL', 'Heroku', 'JUnit', 'Mockito'
      ]
    },
    {
      id: 'experience_2',
      title: 'Concepteur Développeur Java / Angular',
      company: 'Sully Group',
      location: 'Hybride',
      startDate: '2021',
      endDate: '2024',
      type: 'Temps plein',
      logo: 'assets/img/sully_1.jpg',
      context: 'Développement et TMA sur des projets pour le centre de service et missions de consulting chez Enedis.',
      projectDescription: `
      <strong>Pour le CNRS :</strong><br>
      Développement d'une application de gestion des données relatives au personnel, aux fournisseurs, aux partenaires et à l’annuaire du CNRS.<br><br>
      <strong>Pour le Centre de Service :</strong><br>
      • Application de paiement pour FranceAgriMer, avec refonte de l’application de gestion des contrats d’achat de vin et d’autres produits agricoles (grains, olives, lait).<br>
      • Sigebel : gestion des licences et des comptes utilisateurs pour la DGAC.<br>
      • Previas et Bqa : systèmes de prévention des infections nosocomiales et rapports quotidiens pour Santé Publique France.<br><br>
      <strong>Pour Enedis :</strong><br>
      Projet Sikapa pour la gestion des acteurs du marché de l’énergie et des mécanismes de flexibilité nationaux :
      <ul>
        <li>Micro-application d'Habilitation pour la gestion des droits d'accès</li>
        <li>Portail Conseiller pour l'assistance des acteurs du marché</li>
        <li>Portail Acteur du Marché pour les clients externes</li>
        <li>Modules d’ajustement et de services systèmes intégrés dans EASY</li>
      </ul>
    `,
      tasks: [
        'Découpage des projets en tickets (user stories)',
        'Correction de bugs et ajout de nouvelles fonctionnalités pour le CNRS',
        'Refonte et migration des applications de Java 7 vers Java 8',
        'Développement full-stack pour FranceAgriMer, DGAC, Santé Publique France',
        'Réalisation de tests unitaires, d’intégration et de tests de non-régression',
        'Participation aux cérémonies Agile : Grooming, Rétrospectives, Démos'
      ],
      tools: [
        'Java', 'Spring', 'Spring Boot', 'Angular', 'AWS', 'JUnit5', 'Mockito',
        'PostgreSQL', 'Liquibase', 'Hibernate', 'Jira', 'SonarQube', 'Jenkins',
        'JHipster', 'EBX', 'Tomcat', 'Maven', 'Git', 'GitHub', 'GitLab'
      ]
    },
    {
      id: 'experience_3',
      title: 'Développeur Spring Boot / Angular',
      company: 'Axians Communication & System',
      location: 'Hybride',
      startDate: '2020',
      endDate: '2021',
      type: 'Alternance',
      logo: 'assets/img/axians.png',
      context: 'Développement d\'une application de gestion de plannings pour les employés.',
      projectDescription: `
      Intégré au service technique, développement d'une application from scratch pour la gestion des plannings des employés,
      avec une mise en production réussie et une utilisation quotidienne par le personnel.
    `,
      tasks: [
        'Analyse des besoins et mise en place de l’architecture du projet',
        'Réalisation des maquettes avec Balsamiq',
        'Développement de l’API REST et de l’interface utilisateur en Angular',
        'Mise en place de tests fonctionnels et unitaires',
        'Déploiement sur une machine virtuelle interne'
      ],
      tools: [
        'Spring Boot', 'MySQL', 'PostgreSQL', 'Maven', 'Hibernate', 'Angular',
        'JavaScript', 'Bootstrap', 'Git', 'GitHub', 'GitLab', 'ClickUp', 'Balsamiq Mockup'
      ]
    },
    {
      id: 'experience_4',
      title: 'Développeur Java/J2EE',
      company: 'Laboratoire LAPLACE',
      location: 'Hybride',
      startDate: 'Mai 2020',
      endDate: 'Août 2020',
      type: 'Stage',
      logo: 'assets/img/laplace_1.png',
      context: 'Développement et maintenance évolutive d\'applications Java EE.',
      projectDescription: `
      Au sein du service informatique, en charge de l'amélioration d'une application de gestion des commandes pour le laboratoire.
    `,
      tasks: [
        'Analyse des besoins existants',
        'Fusion de deux projets Git avec historiques différents',
        'Développement de correctifs et évolutions',
        'Mise en place de tests fonctionnels pour validation'
      ],
      tools: [
        'J2EE', 'Spring MyBatis', 'Camunda BPMN', 'Git', 'LDAP'
      ]
    },
    {
      id: 'experience_5',
      title: 'Technicien Réseau',
      company: 'Cellcom Guinée',
      location: 'Présentiel (Conakry)',
      startDate: 'Février 2016',
      endDate: 'Octobre 2017',
      type: 'CDD puis CDI',
      logo: 'assets/img/cellcom_1.jpg',
      context: 'Supervision et maintenance du réseau informatique et télécom.',
      projectDescription: `
      Intégré au NOC (Network Operation Center), en charge de la supervision du réseau sur tout le territoire guinéen.
    `,
      tasks: [
        'Surveillance en temps réel du réseau',
        'Analyse et résolution des alarmes réseau',
        'Coordination des interventions terrain',
        'Rédaction de rapports quotidiens'
      ],
      tools: [
        'RBS', 'Routeurs', 'Excel', 'Word', 'Cacti'
      ]
    }
  ];

}

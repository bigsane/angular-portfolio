import { Component} from '@angular/core';

@Component({
  selector: 'app-main',
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
      imgSrc: 'assets/img/snaqe.jpg',
      year: '2021',
      client: 'projet universitaire',
      description: 'le projet consiste à un challenge d\'une journée au sein du master de l\'université Paul Sabatier pour ' +
        'développer un jeu snaqe sur android',
      tasks: 'Installation d\'Android Studio, Analyse des fonctionalités du jeu, développement, tests fonctionels ',
      tools: 'Android studio, java'
    },
    {
      id: 'work_2',
      imgSrc: 'assets/img/emploi_temps.jpg',
      year: '2021',
      client: 'Institut de technologie de Blagnac',
      description: 'le projet consiste à dévolopper une application web qui va permettre de gérer les emplois du temps dans ' +
        'une école, ensuite le projet pourra etre étendu sur la gestion des emplois du temps en dehors des écoles',
      tasks: 'Analyse des besoins du client, rédaction du cahier des charges, développement et tests fonctionels ',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_3',
      imgSrc: 'assets/img/ecommerce.jpg',
      year: '2021',
      client: 'Projet universitaire',
      description: 'le projet consiste à développer une application e-commerce de vente de vetements et de la déployer sur ' +
        'une plateforme gratuite en utilisant les outils CI-CD',
      tasks: 'Analyse des besoins, rédaction d\'un cahier des charges, modélisation de la base de données, développement du front ,' +
      'développement du back, mise en place des pipelines ci-cd, déploiment et test fonctionels',
      tools: 'Spring Boot, Vue.js, Git/GitHub, GitHub Actions, heroku, hibernate, postgresql'
    },
    {
      id: 'work_4',
      imgSrc: 'assets/img/checkyoursmile.jpg',
      year: '2021',
      client: 'Université Toulouse III, Paul Sabatier',
      description: 'le projet consiste à apporter des évolutions sur la plateforme checkyoursmile.fr qui est une plateforme ' +
        'd\'apprentissate de l\'anglais à travers des jeux comme le pendu ou le flashcards par exemple.',
      tasks: 'Développement du jeu wishpers, Ajout de nouvelles fonctionnalités aux jeux existants comme les points à gagner à coté de chaque jeu',
      tools: 'Symfony, Bootstrap, PHP, Html'
    },
    {
      id: 'work_5',
      imgSrc: 'assets/img/ressources.jpg',
      year: '2021',
      client: 'Université Toulouse III, Paul Sabatier',
      description: 'le projet consiste à développer une application client lourd pour la gestion des ressources de l\'université ' +
        'comme les capteurs des portes, la consomation d\'eau et d\'électricité, etc.',
      tasks: 'Analyse des besoins, rédaction d\'un cahier de charges, modélisation de la base de données' +
        'modélisation de la maquette de l\'application cliente, développement de l\'application cliente, ' +
        'développement de l\'application serveur, interconnexion des deux applications, tests fonctionels',
      tools: 'Java SE, Apis Sockets, MySQL, Balsamiq Mookup'
    },
    {
      id: 'work_6',
      imgSrc: 'assets/img/commande_1.jpg',
      year: '2015',
      client: 'Projet personnel',
      description: 'le projet consiste à ...',
      tasks: 'Développement du jeu wishpers, ',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_7',
      imgSrc: 'assets/img/pharmacie_1.jpg',
      year: '2014',
      client: 'Giga Technoligie',
      description: 'le projet consiste à ...',
      tasks: 'Développement du jeu wishpers, ',
      tools: 'Windev XIV, Merise'
    },
    {
      id: 'work_8',
      imgSrc: 'assets/img/ecole.jpg',
      year: '2014',
      client: 'Easy Link Guinea',
      description: 'le projet consiste à ...',
      tasks: 'Développement du jeu wishpers, ',
      tools: 'Python, django, Gurobi optimisation'
    }
  ];

  experiences = [
    {
      id: 'experience_1',
      title: 'Dévelopeur Spring/Ionic',
      company: 'Léa association',
      location: 'Remote',
      startDate: 'Février 2024',
      endDate: 'Maintenant',
      type: 'Temps partiel',
      logo: 'assets/img/lea_1.jpg',
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
      id: 'experience_2',
      title: 'Concepteur développeur Java / Angular',
      company: 'Sully Group',
      location: 'Hybride',
      startDate: '2021',
      endDate: '2024',
      type: 'Temps plein',
      logo: 'assets/img/sully_1.jpg',
      context: 'Développement et TMA sur des projets du centre de service et consultant chez Enedis',
      projectDescription:`
        <p><strong>Pour le CNRS :</strong></p>
        <p>Projet de gestion de l'ensemble des données concernant le personnel du CNRS, ses fournisseurs, ses partenaires, son annuaire, etc.<br></p>
        <p><strong>Pour le Centre de service :</strong></p>
        • Projet de paiement et refonte de l’application contrat achat vin, ainsi que d’autres projets pour la gestion des grains, de l’olive, du lait, etc., pour le client FranceAgriMer.<br>
        • Sigebel gère les licences et les comptes des utilisateurs internes et externes de la direction générale de l’aviation civile.<br>
        • Previas est un projet de prévention des infections liées aux soins et Bqa donne le bulletin quotidien des activités de Santé publique France.<br><br>
        <p><strong>Pour Enedis :</strong></p>
        Le projet Sikapa permet d’accueillir les acteurs du marché pour qu’ils gèrent leurs périmètres sur les mécanismes de flexibilité nationaux. Il est composé de plusieurs briques applicatives :<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Une micro-application Habilitation pour gérer le droit d’accès.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Une micro-application Portail Conseiller : portail utilisé en back office par les conseillers en relation avec les acteurs du marché.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Une micro-application Portail Acteur du Marché : portail externe pour les acteurs.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Les mécanismes d’ajustement, d’effacement et de service système sont embarqués dans la micro-application EASY.`
      ,
      tasks: [
        '<u><trong>CNRS : Projet découpé en tickets (user stories)</u></trong>',
        'Réalisation d\'une quinzaine de tickets de type BUG ou FEATURE',
        'Tickets sur la correction de bugs, comme la gestion du contrôle de saisie dans les formulaires avec des triggers',
        'Tickets sur l\'ajout de fonctionnalités, comme l’ajout d’une page ou d\'une fonction pour un groupe d\'utilisateurs',
        '<u><trong>FranceAgrimer, DGAC, Santé publique France :</u></trong>',
        'Analyse et correction de bugs et qualité de code',
        'Migration d\'applications Java 7 vers Java 8',
        'Refonte d\'applications Full stack',
        'Mise en place de scripts SQL',
        'Tierce maintenance applicative',
        '<u><trong>Enedis :</u></trong>',
        'Analyse d\'US, Grooming, rétrospectives, démo',
        'Développement de tickets (correctifs ou évolutifs)',
        'Tests unitaires, d\'intégration et fonctionnels',
        'Revue de code avec des paires'
      ],
      tools: [
        'Java','Spring','Spring boot',' Angular', 'Aws', 'Junit5', 'Mockito', 'PostGreSQL',
        'Liquibase','Hibernate', 'Jira software', 'SonarQube', 'Jenkins', 'JHipster', 'Ebx',
        'Tomcat', 'Maven', 'Mantis', 'Xray', 'Git','GitHub/GitLab'
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
      id: 'experience_4',
      title: 'Développeur java/J2EE',
      company: 'Laboratoire LAPLACE, plasma et conversion d\'énergie',
      location: 'Hybride',
      startDate: 'Mai 2020',
      endDate: 'Août 2020',
      type: 'Stage',
      logo: 'assets/img/laplace_1.png',
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
      id: 'experience_5',
      title: 'Technicien réseau',
      company: 'Cellcom Guinée',
      location: 'En présentiel ( Conakry )',
      startDate: 'février 2016',
      endDate: 'octobre 2017',
      type: 'CDD puis CDI',
      logo: 'assets/img/cellcom_1.jpg',
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

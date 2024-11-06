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

  modals = [
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
}

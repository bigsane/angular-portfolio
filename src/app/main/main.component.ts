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
      description: 'le projet consiste à ...',
      tools: 'Android studio, java, smartphone android'
    },
    {
      id: 'work_2',
      imgSrc: 'assets/img/emploi_temps.jpg',
      year: '2021',
      client: 'Institut de technologie de Blagnac',
      description: 'le projet consiste à ...',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_3',
      imgSrc: 'assets/img/ecommerce.jpg',
      year: '2021',
      client: 'Projet universitaire',
      description: 'le projet consiste à ...',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_4',
      imgSrc: 'assets/img/checkyoursmile.jpg',
      year: '2021',
      client: 'Université Toulouse III, Paul Sabatier',
      description: 'le projet consiste à ...',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_5',
      imgSrc: 'assets/img/ressources.jpg',
      year: '2021',
      client: 'Université Toulouse III, Paul Sabatier',
      description: 'le projet consiste à ...',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_6',
      imgSrc: 'assets/img/commande_1.jpg',
      year: '2015',
      client: 'Projet personnel',
      description: 'le projet consiste à ...',
      tools: 'Python, django, Gurobi optimisation'
    },
    {
      id: 'work_7',
      imgSrc: 'assets/img/ecole.jpg',
      year: '2014',
      client: 'Easy Link Guinea',
      description: 'le projet consiste à ...',
      tools: 'Python, django, Gurobi optimisation'
    }
  ];
}

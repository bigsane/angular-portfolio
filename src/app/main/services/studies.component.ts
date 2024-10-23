import { Component } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent {
  // Tableau des formations et diplômes
  studies = [
    {
      year: '2024',
      title: 'English EFSET',
      image: 'assets/img/efset.jpg',
      modalTarget: '#diplome_1'
    },
    {
      year: '2019 - 2021',
      title: 'Master en développement logiciel',
      image: 'assets/img/paul-sabatier.png',
      modalTarget: '#diplome_2'
    },
    {
      year: '2017 - 2019',
      title: 'Licence en informatique',
      image: 'assets/img/paul-sabatier.png',
      modalTarget: '#diplome_3'
    },
    {
      year: '2010 - 2014',
      title: 'Licence en génie informatique',
      image: 'assets/img/iuheg.jpg',
      modalTarget: '#diplome_4'
    },
    {
      year: '2020 - 2024',
      title: 'Spring - Angular - Java - React.js - AWS',
      image: 'assets/img/udemy.png',
      modalTarget: '#diplome_5'
    }
  ];
}

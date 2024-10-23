import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works = [
    {
      imgSrc: 'assets/img/android.png',
      modalTarget: '#work_1',
      date: '2021',
      title: 'Challenge android',
      lightboxTitle: 'Caption for image 1'
    },
    {
      imgSrc: 'assets/img/emploi.jpg',
      modalTarget: '#work_2',
      date: '2020',
      title: 'Gestion des emplois du temps pour une école',
      lightboxTitle: 'Caption for image 1'
    },
    {
      imgSrc: 'assets/img/ecommerce.png',
      modalTarget: '#work_3',
      date: '2024',
      title: 'Application E-commerce',
      lightboxTitle: 'Caption for image 1'
    },
    {
      imgSrc: 'assets/img/checkyoursmile.png',
      modalTarget: '#work_4',
      date: '2022',
      title: 'Bureau d\'étude sur l\'application checkyoursmile.fr',
      lightboxTitle: 'Caption for image 2'
    },
    {
      imgSrc: 'assets/img/ressources_univ.png',
      modalTarget: '#work_5',
      date: '2018',
      title: 'Application de gestion des ressources universitaires',
      lightboxTitle: 'Caption for image 3'
    },
    {
      imgSrc: 'assets/img/commandes.png',
      modalTarget: '#work_6',
      date: '2015',
      title: 'Application de gestion de commandes',
      lightboxTitle: 'Caption for image 1'
    },
    {
      imgSrc: 'assets/img/ecole.png',
      modalTarget: '#work_7',
      date: '2014',
      title: 'Application de gestion d\'une école',
      lightboxTitle: 'Caption for image 4'
    }
  ];
}

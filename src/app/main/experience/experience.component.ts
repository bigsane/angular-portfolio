import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      year: '2024 - présent',
      title: 'Développeur full stack Java/Ionic',
      image: 'assets/img/leatest.jpg',
      modalTarget: '#experience_1'
    },
    {
      year: '2021 - 2024',
      title: 'Concepteur développeur Java/angular',
      image: 'assets/img/sullytest.png',
      modalTarget: '#experience_2'
    },
    {
      year: '2020 - 2021',
      title: 'Développeur full stack Java/angular',
      image: 'assets/img/axianstest.png',
      modalTarget: '#experience_3'
    },
    {
      year: '2020 - 2020',
      title: 'Développeur java/J2EE',
      image: 'assets/img/laplacetest.jpg',
      modalTarget: '#experience_4'
    },
    {
      year: '2016 - 2017',
      title: 'Technicien réseau',
      image: 'assets/img/cellcom.jpg',
      modalTarget: '#experience_5'
    }
  ];
}

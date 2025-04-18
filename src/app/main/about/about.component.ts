import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name = 'Abdourahimi SANE';
  title = 'Dev Full Stack';
  location = 'Ile-De-France, France';
  phone = '+33 677654238';
  email = 'bigsane25@gmail.com';
  cvLink = 'assets/Files/CV-Abdourahimi-SANE.pdf';
  experienceYears = 4;
  bio = `Développeur full stack passionné, avec ${this.experienceYears} ans d'expériences dans la création
          d'applications web complexes en Java et Angular. Titulaire d'un master en développement logiciel,
          j'excelle dans la conception et l'implémentation de solutions web robustes et évolutives.`;

  careerText = `Au cours de ma carrière, j'ai contribué à des projets stimulants en environnement agile,
                développant des microservices, des API REST et optimisant les performances d'applications web
                pour divers secteurs. J'ai également encadré des juniors et dispensé des formations sur les
                meilleures pratiques de développement.`;

  skills = {
    frontend: 'Angular, React, JavaScript, TypeScript, Bootstrap',
    backend: 'Java, Spring Boot, Spring Data, API REST, Microservices',
    databases: 'PostgreSQL, MySQL, Oracle, Liquibase',
    methodologies: 'Agile Scrum, SAFE, Lean, Merise, UML, BPMN',
    devOps: 'Docker, Jenkins, Github actions',
    other: 'Git, Jira, Mantis, JHipster, AWS (EC2, S3, EBS, BS, Route 53 ...)'
  };

  quote = `Mon objectif est de continuer à innover et à perfectionner mes compétences en développement full stack,
           tout en approfondissant le DevOps. Passionné par les défis techniques, je m’efforce de concevoir
           des solutions performantes et évolutives pour répondre aux besoins des utilisateurs.`;
}

import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
// import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
// import { CategoryCardComponent } from '../../components/category-card/category-card.component';
// import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
// import { ChallengeCardComponent } from '../../components/challenge-card/challenge-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    // FooterComponent,
    HeroComponent,
    // CategoryCardComponent,
    // FeatureCardComponent,
    // ChallengeCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    {
      class: 'programacao',
      title: 'Programação',
      description: 'Aprenda lógica de programação de forma prática',
      challenges: 15
    },
    {
      class: 'matematica',
      title: 'Matematica',
      description: 'Aprenda lógica de programação de forma prática',
      challenges: 15
    },
    {
      class: 'logica',
      title: 'Logica',
      description: 'Aprenda lógica de programação de forma prática',
      challenges: 15
    },
    {
      class: 'versionamento',
      title: 'Versionamento',
      description: 'Aprenda lógica de programação de forma prática',
      challenges: 15
    }
  ];

  features = [
    {
      class: 'conquistas',
      title: 'Sistema de conquistas',
      description: 'Ganhe medalhas e trófeus conforme progride'
    },
    {
      class: 'desafios-personalizados',
      title: 'Desafios Personalizados',
      description: 'Conteúdo adaptado ao seu nivel de conhecimento'
    },
    {
      class: 'comunidade',
      title: 'Comunidade Ativa',
      description: 'Compete com outros estudantes e compartilhe suas conquistas'
    },
    {
      class: 'progresso',
      title: 'Progresso Visual',
      description: 'Acompanhe sua evolução com graficos e estatísticas'
    }
  ];

  challenges = [
    {
      class: 'destaque-algoritmos',
      title: 'Algoritmos Básicos',
      description: 'Aprenda os fundamentos dos algoritmos com exercícios práticos',
      level: 'Intermediário'
    },
    {
      class: 'destaque-logica-matematica',
      title: 'Lógica Matemática',
      description: 'Desenvolva habilidades de raciocínio matemático',
      level: 'Iniciante'
    }
  ];
}
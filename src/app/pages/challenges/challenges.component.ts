import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
// import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [
    HeaderComponent,
    // FooterComponent
    RouterLink
  ],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css'
})
export class ChallengesComponent {
  // Challenges page component logic can be added here if needed
}
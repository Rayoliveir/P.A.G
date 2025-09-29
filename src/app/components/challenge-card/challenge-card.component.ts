import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-challenge-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './challenge-card.component.html',
  styleUrl: './challenge-card.component.css'
})
export class ChallengeCardComponent {
  @Input() challenge: any;
}
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section>
      <nav class="subnav">
        <a routerLink="/courses" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">All courses</a>
        <a routerLink="/courses/1" routerLinkActive="active">Angular Foundations</a>
      </nav>
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `.subnav { display: flex; gap: 1rem; margin-bottom: 1rem; } a { text-decoration: none; color: #2563eb; font-weight: 600; } a.active { color: #111827; }`
  ]
})
export class CoursesLayoutComponent {}

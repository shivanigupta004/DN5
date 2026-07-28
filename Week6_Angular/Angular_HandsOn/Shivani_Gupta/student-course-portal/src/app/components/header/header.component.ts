import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="topbar">
      <div class="brand">Student Course Portal</div>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/courses" routerLinkActive="active">Courses</a>
        <a routerLink="/profile" routerLinkActive="active">Profile</a>
      </nav>
    </header>
  `,
  styles: [
    `
      .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        background: #0f172a;
        color: #f8fafc;
      }
      nav { display: flex; gap: 1rem; }
      a { color: #cbd5e1; text-decoration: none; font-weight: 600; }
      a.active { color: #ffffff; }
      .brand { font-size: 1.1rem; font-weight: 700; }
    `
  ]
})
export class HeaderComponent {}

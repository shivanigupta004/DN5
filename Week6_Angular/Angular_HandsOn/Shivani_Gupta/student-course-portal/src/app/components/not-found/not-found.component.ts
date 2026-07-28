import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <section class="not-found">
      <h2>404 - Page not found</h2>
      <p>The page you requested does not exist.</p>
    </section>
  `,
  styles: [`.not-found { padding: 2rem; }`]
})
export class NotFoundComponent {}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1>Welcome to the Student Course Portal</h1>
      <p>Explore curated learning paths, manage your enrollments, and track your progress.</p>
      <div class="actions">
        <a routerLink="/courses">Browse courses</a>
        <a routerLink="/enroll">Enroll now</a>
        <a routerLink="/enroll-reactive">Reactive form</a>
      </div>
      <p class="meta">Available courses: {{ courseCount }}</p>
    </section>
  `,
  styles: [
    `
      .hero { padding: 2rem 1.5rem; }
      h1 { font-size: 2rem; margin-bottom: 0.75rem; }
      .actions { display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap; }
      a { display: inline-block; padding: 0.7rem 1rem; background: #2563eb; color: white; text-decoration: none; border-radius: 999px; }
      .meta { margin-top: 1rem; font-weight: 600; color: #475569; }
    `
  ]
})
export class HomeComponent implements OnInit {
  courseCount = 0;

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courseCount = courses.length;
    });
  }
}

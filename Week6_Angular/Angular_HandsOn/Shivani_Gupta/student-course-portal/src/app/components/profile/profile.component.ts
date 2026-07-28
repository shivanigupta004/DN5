import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <section class="profile">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> Shivani Gupta</p>
      <p><strong>Email:</strong> shivani@example.com</p>
      <p><strong>Current focus:</strong> Angular and modern web development.</p>
    </section>
  `,
  styles: [
    `
      .profile { padding: 1.5rem; }
    `
  ]
})
export class ProfileComponent {
  readonly enrolledCourses: Course[];

  constructor(private readonly enrollmentService: EnrollmentService) {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}

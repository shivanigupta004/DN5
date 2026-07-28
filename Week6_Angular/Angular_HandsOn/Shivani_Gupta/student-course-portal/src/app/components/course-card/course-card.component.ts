import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { EnrollmentService } from '../../services/enrollment.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  template: `
    <article class="card">
      <h3>{{ course?.title }}</h3>
      <p>{{ course?.description }}</p>
      <ul>
        <li><strong>Duration:</strong> {{ course?.duration }}</li>
        <li><strong>Level:</strong> {{ course?.level }}</li>
        <li><strong>Instructor:</strong> {{ course?.instructor }}</li>
      </ul>
      <button type="button" (click)="handleEnroll()">Enroll</button>
    </article>
  `,
  styles: [
    `
      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1rem;
        background: #ffffff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      }
      button { margin-top: 1rem; padding: 0.6rem 1rem; border: none; border-radius: 999px; background: #2563eb; color: white; cursor: pointer; }
    `
  ]
})
export class CourseCardComponent {
  @Input() course: Course | null = null;
  @Output() enroll = new EventEmitter<Course>();

  constructor(
    private readonly enrollmentService: EnrollmentService,
    private readonly notificationService: NotificationService
  ) {}

  handleEnroll(): void {
    if (this.course) {
      this.enrollmentService.enroll(this.course);
      this.notificationService.show(`Enrolled in ${this.course.title}`);
      this.enroll.emit(this.course);
    }
  }
}

import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';

@Component({
  selector: 'app-enrollment-panel',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="panel">
      <h3>Enrollment Summary</h3>
      <p><strong>Selected course:</strong> {{ selectedCourse?.title || 'No course selected' }}</p>
      <label for="student-name">Student name</label>
      <input id="student-name" type="text" [(ngModel)]="studentName" name="studentName" />

      <label for="notes">Notes</label>
      <textarea id="notes" [(ngModel)]="notes" name="notes"></textarea>

      <p class="status">Hello {{ studentName || 'student' }}!</p>

      <button type="button" (click)="submitEnrollment()">Confirm selection</button>
      @if (submittedCourse) {
        <p class="submitted">Submitted for {{ submittedCourse.title }}</p>
      }
    </section>
  `,
  styles: [
    `
      .panel { padding: 1rem; border: 1px solid #dbeafe; border-radius: 12px; background: #eff6ff; }
      input, textarea { width: 100%; margin-bottom: 0.75rem; padding: 0.6rem; border: 1px solid #cbd5e1; border-radius: 8px; }
      button { padding: 0.7rem 1rem; border: none; border-radius: 999px; background: #0f766e; color: white; cursor: pointer; }
      .status { font-weight: 600; margin-bottom: 0.5rem; }
      .submitted { color: #0f766e; font-weight: 700; }
    `
  ]
})
export class EnrollmentPanelComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedCourse: Course | null = null;
  @Output() enrollmentSubmitted = new EventEmitter<Course>();

  studentName = '';
  notes = '';
  submittedCourse: Course | null = null;

  ngOnInit(): void {
    console.log('Enrollment panel initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCourse'] && this.selectedCourse) {
      console.log('Selected course changed to', this.selectedCourse.title);
    }
  }

  ngOnDestroy(): void {
    console.log('Enrollment panel destroyed');
  }

  submitEnrollment(): void {
    if (this.selectedCourse) {
      this.submittedCourse = this.selectedCourse;
      this.enrollmentSubmitted.emit(this.selectedCourse);
    }
  }
}

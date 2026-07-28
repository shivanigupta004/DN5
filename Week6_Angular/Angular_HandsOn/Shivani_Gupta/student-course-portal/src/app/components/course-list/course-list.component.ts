import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseCardComponent } from '../course-card/course-card.component';
import { EnrollmentPanelComponent } from '../enrollment-panel/enrollment-panel.component';
import { EnrollmentFormComponent } from '../enrollment-form/enrollment-form.component';
import { CreditLabelPipe } from '../../shared/credit-label.pipe';
import { HighlightDirective } from '../../shared/highlight.directive';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, EnrollmentPanelComponent, EnrollmentFormComponent, FormsModule, CreditLabelPipe, HighlightDirective],
  template: `
    <section class="page">
      <h2>Available Courses</h2>
      <div class="toolbar">
        <label for="search">Search courses</label>
        <input id="search" type="text" [(ngModel)]="searchTerm" name="searchTerm" />
      </div>

      @if (isLoading) {
        <p class="state">Loading curated courses...</p>
      } @else if (!filteredCourses.length) {
        <p class="state">No courses available right now.</p>
      } @else {
        <div class="grid">
          @for (course of filteredCourses; track course.id) {
            <div [ngStyle]="{ 'border-left': course.level === 'Advanced' ? '4px solid #7c3aed' : '4px solid #2563eb' }" [ngClass]="{ 'featured': course.level === 'Advanced' }" [appHighlight]="course.level === 'Advanced' ? '#fef3c7' : '#dbeafe'">
              <app-course-card [course]="course" (enroll)="handleEnroll($event)"></app-course-card>
              <p class="credits">{{ course.credits | creditLabel }}</p>
            </div>
          }
        </div>
      }

      @if (selectedCourse) {
        <p class="selected">Selected course: {{ selectedCourse.title }}</p>
      }

      <div class="panel-wrap">
        <app-enrollment-panel [selectedCourse]="selectedCourse" (enrollmentSubmitted)="handleEnrollmentSubmitted($event)"></app-enrollment-panel>
      </div>

      <div class="panel-wrap">
        <app-enrollment-form></app-enrollment-form>
      </div>

      <div [ngSwitch]="selectedCourse?.level">
        <p *ngSwitchCase="'Beginner'" class="switch-state">New to Angular? Start here.</p>
        <p *ngSwitchCase="'Intermediate'" class="switch-state">You have solid basics already.</p>
        <p *ngSwitchCase="'Advanced'" class="switch-state">This is a deeper challenge.</p>
        <p *ngSwitchDefault class="switch-state">Choose a course to see guidance.</p>
      </div>
    </section>
  `,
  styles: [
    `
      .page { padding: 1.5rem; }
      .toolbar { display: flex; flex-direction: column; gap: 0.35rem; max-width: 320px; margin-bottom: 1rem; }
      input { padding: 0.6rem; border: 1px solid #cbd5e1; border-radius: 8px; }
      .grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
      .selected { margin-top: 1rem; font-weight: 700; color: #2563eb; }
      .panel-wrap { margin-top: 1rem; }
      .state { font-weight: 600; color: #475569; }
      .credits { margin-top: 0.5rem; color: #334155; font-weight: 600; }
      .featured { border-radius: 10px; padding: 0.25rem; background: #f8fafc; }
      .switch-state { margin-top: 1rem; color: #0f766e; font-weight: 600; }
    `
  ]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course | null = null;
  searchTerm = '';
  submittedCourseName = '';
  isLoading = true;

  constructor(
    private readonly courseService: CourseService,
    private readonly enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses()
      .pipe(
        map((courses) => courses.filter((course) => course.id !== 0)),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((courses) => {
        this.courses = courses;
      });
  }

  get filteredCourses(): Course[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.courses;
    }
    return this.courses.filter((course) => course.title.toLowerCase().includes(term));
  }

  handleEnroll(course: Course): void {
    this.selectedCourse = course;
    this.enrollmentService.enroll(course);
  }

  handleEnrollmentSubmitted(course: Course): void {
    this.submittedCourseName = course.title;
  }
}

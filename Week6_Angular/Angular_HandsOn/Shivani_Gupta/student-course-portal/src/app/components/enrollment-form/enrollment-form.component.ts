import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="form-card">
      <h3>Template-driven Enrollment</h3>

      <form #enrollmentForm="ngForm" (ngSubmit)="submitForm(enrollmentForm)" novalidate>
        <label for="studentName">Student name</label>
        <input
          id="studentName"
          name="studentName"
          type="text"
          [(ngModel)]="model.studentName"
          required
          minlength="3"
          #studentName="ngModel"
        />
        @if (studentName.touched && studentName.invalid) {
          <div class="error">Student name is required and must be at least 3 characters.</div>
        }

        <label for="studentEmail">Email</label>
        <input
          id="studentEmail"
          name="studentEmail"
          type="email"
          [(ngModel)]="model.studentEmail"
          required
          email
          #studentEmail="ngModel"
        />
        @if (studentEmail.touched && studentEmail.invalid) {
          <div class="error">Please enter a valid email address.</div>
        }

        <label for="courseId">Course ID</label>
        <input
          id="courseId"
          name="courseId"
          type="text"
          [(ngModel)]="model.courseId"
          required
          #courseId="ngModel"
        />
        @if (courseId.touched && courseId.invalid) {
          <div class="error">Course ID is required.</div>
        }

        <label for="preferredSemester">Preferred semester</label>
        <select id="preferredSemester" name="preferredSemester" [(ngModel)]="model.preferredSemester" required #preferredSemester="ngModel">
          <option value="">Select semester</option>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
        @if (preferredSemester.touched && preferredSemester.invalid) {
          <div class="error">Please choose a semester.</div>
        }

        <label class="checkbox-row">
          <input type="checkbox" name="agreeToTerms" [(ngModel)]="model.agreeToTerms" requiredTrue />
          <span>I agree to the terms and conditions.</span>
        </label>
        @if (model.agreeToTerms === false) {
          <div class="error">You must agree to continue.</div>
        }

        <div class="actions">
          <button type="submit" [disabled]="enrollmentForm.invalid">Submit</button>
          <button type="button" class="secondary" (click)="resetForm(enrollmentForm)">Reset</button>
        </div>

        @if (successMessage) {
          <div class="success">{{ successMessage }}</div>
        }
      </form>
    </section>
  `,
  styles: [
    `
      .form-card { padding: 1.25rem; border: 1px solid #dbeafe; border-radius: 14px; background: #ffffff; max-width: 520px; }
      form { display: flex; flex-direction: column; gap: 0.65rem; }
      input, select, button { padding: 0.7rem; border-radius: 8px; border: 1px solid #cbd5e1; }
      input.ng-invalid.ng-touched, select.ng-invalid.ng-touched { border-color: #dc2626; box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.15); }
      .error { color: #dc2626; font-size: 0.9rem; }
      .success { color: #047857; font-weight: 700; margin-top: 0.75rem; }
      .checkbox-row { display: flex; align-items: center; gap: 0.5rem; }
      .actions { display: flex; gap: 0.75rem; margin-top: 0.25rem; }
      button { cursor: pointer; }
      button:disabled { opacity: 0.6; cursor: not-allowed; }
      .secondary { background: #f1f5f9; }
    `
  ]
})
export class EnrollmentFormComponent {
  model = {
    studentName: '',
    studentEmail: '',
    courseId: '',
    preferredSemester: '',
    agreeToTerms: false
  };

  successMessage = '';

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.successMessage = `Enrollment request submitted for ${this.model.studentName}.`;
    } else {
      this.successMessage = '';
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.model = {
      studentName: '',
      studentEmail: '',
      courseId: '',
      preferredSemester: '',
      agreeToTerms: false
    };
    this.successMessage = '';
  }
}

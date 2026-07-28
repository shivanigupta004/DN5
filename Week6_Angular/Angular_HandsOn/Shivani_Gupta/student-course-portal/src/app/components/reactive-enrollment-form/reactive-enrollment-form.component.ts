import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="form-card">
      <h3>Reactive Enrollment</h3>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <label>Student name</label>
        <input formControlName="studentName" />
        @if (studentName.invalid && studentName.touched) {
          <div class="error">Student name is required and must be at least 3 characters.</div>
        }

        <label>Email</label>
        <input formControlName="studentEmail" />
        @if (studentEmail.invalid && studentEmail.touched) {
          <div class="error">Please enter a valid email that does not contain test@.</div>
        }

        <label>Course ID</label>
        <input formControlName="courseId" />
        @if (courseId.invalid && courseId.touched) {
          <div class="error">Course ID is required and cannot start with XX.</div>
        }

        <label>Preferred semester</label>
        <select formControlName="preferredSemester">
          <option value="">Select</option>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>

        <label class="checkbox-row">
          <input type="checkbox" formControlName="agreeToTerms" />
          <span>I agree to the terms.</span>
        </label>
        @if (agreeToTerms.invalid && agreeToTerms.touched) {
          <div class="error">You must agree.</div>
        }

        <div formArrayName="additionalCourses" class="extra-courses">
          @for (course of additionalCourses.controls; track $index) {
            <div class="course-row">
              <input [formControlName]="$index" />
              <button type="button" class="secondary" (click)="removeCourse($index)">Remove</button>
            </div>
          }
        </div>

        <div class="actions">
          <button type="button" class="secondary" (click)="addCourse()">Add Another Course</button>
          <button type="submit" [disabled]="form.invalid">Submit</button>
        </div>
      </form>
    </section>
  `,
  styles: [
    `.form-card { padding: 1.25rem; border: 1px solid #dbeafe; border-radius: 14px; background: #fff; max-width: 560px; } form { display: flex; flex-direction: column; gap: 0.65rem; } input, select, button { padding: 0.7rem; border-radius: 8px; border: 1px solid #cbd5e1; } .error { color: #dc2626; font-size: 0.9rem; } .actions { display: flex; gap: 0.75rem; margin-top: 0.25rem; } .secondary { background: #f1f5f9; } .course-row { display: flex; gap: 0.5rem; } .checkbox-row { display: flex; align-items: center; gap: 0.5rem; }`
  ]
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      studentName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      studentEmail: this.fb.control('', { validators: [Validators.required, Validators.email], asyncValidators: [this.emailValidator], updateOn: 'change' }),
      courseId: this.fb.control('', [Validators.required, this.noCourseCodeValidator]),
      preferredSemester: this.fb.control('', Validators.required),
      agreeToTerms: this.fb.control(false, Validators.requiredTrue),
      additionalCourses: this.fb.array<string>([])
    });
  }

  ngOnInit(): void {
    this.addCourse();
  }

  get studentName(): AbstractControl {
    return this.form.get('studentName')!;
  }

  get studentEmail(): AbstractControl {
    return this.form.get('studentEmail')!;
  }

  get courseId(): AbstractControl {
    return this.form.get('courseId')!;
  }

  get agreeToTerms(): AbstractControl {
    return this.form.get('agreeToTerms')!;
  }

  get additionalCourses(): FormArray {
    return this.form.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control(''));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  submit(): void {
    if (this.form.valid) {
      console.log('Reactive form submitted', this.form.value);
    }
  }

  private noCourseCodeValidator(control: AbstractControl): ValidationErrors | null {
    const value = String(control.value ?? '').trim();
    return value.startsWith('XX') ? { invalidCourseCode: true } : null;
  }

  private emailValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = String(control.value ?? '');
    if (!value) {
      return of(null);
    }
    return of(value).pipe(
      delay(800),
      map((email) => (email.includes('test@') ? { invalidEmailDomain: true } : null))
    );
  }
}

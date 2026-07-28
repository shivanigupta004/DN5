import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly enrolledCourses: Course[] = [];

  enroll(course: Course): void {
    if (!this.enrolledCourses.some((item) => item.id === course.id)) {
      this.enrolledCourses.push(course);
    }
  }

  unenroll(courseId: number): void {
    const index = this.enrolledCourses.findIndex((course) => course.id === courseId);
    if (index >= 0) {
      this.enrolledCourses.splice(index, 1);
    }
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourses.some((course) => course.id === courseId);
  }

  getEnrolledCourses(): Course[] {
    return this.enrolledCourses;
  }
}

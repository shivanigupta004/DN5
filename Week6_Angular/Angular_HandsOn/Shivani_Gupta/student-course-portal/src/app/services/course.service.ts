import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly coursesUrl = '/courses.json';

  constructor(private readonly http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl).pipe(
      catchError(() => of([]))
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses) => courses.find((course) => course.id === id))
    );
  }

  addCourse(course: Course): Observable<Course> {
    return of(course);
  }
}

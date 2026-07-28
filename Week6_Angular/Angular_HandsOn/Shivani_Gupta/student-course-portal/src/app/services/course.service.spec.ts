import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Course } from '../models/course';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load the catalog from the data source', () => {
    let courses: Course[] | undefined;

    service.getCourses().subscribe((result) => {
      courses = result;
    });

    const req = httpMock.expectOne('/courses.json');
    expect(req.request.method).toBe('GET');

    req.flush([{ id: 1, title: 'Angular Foundations', description: 'A starter course', duration: '4 weeks', level: 'Beginner', instructor: 'Asha', lessons: 12, credits: 3 }]);

    expect(courses?.length).toBe(1);
    expect(courses?.[0].title).toBe('Angular Foundations');
  });
});

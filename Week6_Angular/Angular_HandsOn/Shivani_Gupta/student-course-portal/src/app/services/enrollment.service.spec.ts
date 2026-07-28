import { EnrollmentService } from './enrollment.service';
import { Course } from '../models/course';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  const course: Course = {
    id: 2,
    title: 'RxJS Essentials',
    description: 'Understand reactive programming and streams.',
    duration: '3 weeks',
    level: 'Intermediate',
    instructor: 'Ravi Kumar',
    lessons: 10,
    credits: 2
  };

  beforeEach(() => {
    service = new EnrollmentService();
  });

  it('should enroll a new course', () => {
    service.enroll(course);
    expect(service.isEnrolled(course.id)).toBeTrue();
  });

  it('should avoid duplicate enrollments', () => {
    service.enroll(course);
    service.enroll(course);
    expect(service.getEnrolledCourses().length).toBe(1);
  });

  it('should remove an enrolled course', () => {
    service.enroll(course);
    service.unenroll(course.id);
    expect(service.getEnrolledCourses()).toEqual([]);
  });
});

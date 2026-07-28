import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  template: `
    @if (course) {
      <section class="detail">
        <h2>{{ course.title }}</h2>
        <p>{{ course.description }}</p>
        <ul>
          <li><strong>Instructor:</strong> {{ course.instructor }}</li>
          <li><strong>Level:</strong> {{ course.level }}</li>
          <li><strong>Duration:</strong> {{ course.duration }}</li>
          <li><strong>Lessons:</strong> {{ course.lessons }}</li>
        </ul>
      </section>
    } @else {
      <p>Course not found.</p>
    }
  `,
  styles: [
    `.detail { padding: 1.5rem; }`
  ]
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe((course) => {
      this.course = course;
    });
  }
}

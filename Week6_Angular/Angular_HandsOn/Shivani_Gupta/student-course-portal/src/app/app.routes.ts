import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesLayoutComponent } from './components/courses-layout/courses-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent }
    ]
  },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  {
    path: 'enroll',
    loadChildren: () => import('./features/enrollment/enrollment.routes').then((m) => m.enrollmentRoutes)
  },
  {
    path: 'enroll-reactive',
    loadChildren: () => import('./features/enrollment/enrollment.routes').then((m) => m.enrollmentRoutes)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

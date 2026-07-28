import { Routes } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../../components/reactive-enrollment-form/reactive-enrollment-form.component';
import { EnrollmentFormComponent } from '../../components/enrollment-form/enrollment-form.component';
import { canDeactivateGuard } from '../../guards/can-deactivate.guard';

export const enrollmentRoutes: Routes = [
  {
    path: '',
    component: EnrollmentFormComponent,
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'reactive',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [canDeactivateGuard]
  }
];

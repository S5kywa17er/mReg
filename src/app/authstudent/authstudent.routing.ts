import { Routes, RouterModule } from '@angular/router';
import { AuthStudentURL } from './authstudent.url';
import { StudentComponent } from './components/student/student.component';

const RouteLists: Routes = [
    { path: '', redirectTo: AuthStudentURL.Student, pathMatch: 'full' },
    { path: AuthStudentURL.Student, component: StudentComponent },
];

export const AuthstudentRouting = RouterModule.forChild(RouteLists);

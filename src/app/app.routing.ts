import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { UnivComponent } from './components/univ/univ.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClassComponent } from './components/class/class.component';
import { ProgramComponent } from './components/program/program.component';
import { AuthenticationGuard } from './guards/authentication.guard';
// import { ProgramStructureComponent } from './components/program-structure/program-structure.component';

const RouteLists: Routes = [
    { path: '', redirectTo: AppURL.Univ, pathMatch: 'full' },
    { path: AppURL.Univ, component: UnivComponent },
    { path: AppURL.Login, component: LoginComponent },
    { path: AppURL.Calendar, component: CalendarComponent },
    { path: AppURL.Class, component: ClassComponent },
    { path: AppURL.Program, component: ProgramComponent },
    // { path: AppURL.AuthStudent, loadChildren: './authstudent/authstudent.module#AuthstudentModule' },
    // {
    //     path: AppURL.ProgramStructure,
    //     children: [
    //         { path: '', component: ProgramStructureComponent },
    //         { path: ':id', component: ProgramStructureComponent },
    //     ]
    // }

    {
        path: AppURL.AuthStudent,
        loadChildren: './authstudent/authstudent.module#AuthstudentModule',
        canActivate: [AuthenticationGuard]
    },
    // {
    //     path: AppURL.AuthStaff,
    //     loadChildren: './authstaff/authstafft.module#AuthstaffModule',
    //     canActivate: [AuthenticationGuard]
    // }
];

export const AppRouting = RouterModule.forRoot(RouteLists);


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { AuthstudentRouting } from './authstudent.routing';
import { SharedsModule } from '../shareds/shareds.module';

@NgModule({
    declarations: [StudentComponent],
    imports: [
        CommonModule,
        SharedsModule,
        AuthstudentRouting
    ]
})
export class AuthstudentModule { }

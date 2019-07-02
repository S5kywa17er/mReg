import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { AuthstudentRouting } from './authstudent.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [StudentComponent],
    imports: [
        CommonModule,
        SharedsModule,
        AuthstudentRouting,
        TranslateModule
    ]
})
export class AuthstudentModule { }

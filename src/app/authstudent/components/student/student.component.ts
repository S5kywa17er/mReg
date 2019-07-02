import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { AuthStudentURL } from '../../authstudent.url';

declare const App: any;

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    constructor(
        private router: Router,
        private alert: AlertService,
        private language: LanguageService,
        private authen: AuthenService,
    ) { }

    AuthStudentURL = AuthStudentURL;

    ngOnInit() {
        App.initialLoadPage();
    }

}

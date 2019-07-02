import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { LanguageService } from 'src/app/services/language.service';
import { AuthStudentURL } from 'src/app/authstudent/authstudent.url';
import { AppURL } from 'src/app/app.url';

@Component({
    selector: 'app-authstudent-sidebar',
    templateUrl: './authstudent-sidebar.component.html',
    styleUrls: ['./authstudent-sidebar.component.css']
})
export class AuthstudentSidebarComponent implements OnInit {

    constructor(
        private language: LanguageService,
        private acccount: AccountService,
    ) { }

    AppURL = AppURL;
    AuthStudentURL = AuthStudentURL;

    ngOnInit() {
    }

}

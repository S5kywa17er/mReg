import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { AuthStudentURL } from 'src/app/authstudent/authstudent.url';

@Component({
    selector: 'app-authstudent-navbar',
    templateUrl: './authstudent-navbar.component.html',
    styleUrls: ['./authstudent-navbar.component.css']
})
export class AuthstudentNavbarComponent implements OnInit {

    constructor(
        private language: LanguageService,
        private router: Router,
    ) { }

    AuthStudentURL = AuthStudentURL;

    ngOnInit() {
    }

    changeLanguage(lang: string) {
        window.location.reload();
        this.language.setLanguage(lang);
        // console.log(lang);
    }

}

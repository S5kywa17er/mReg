import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { AuthStudentURL } from 'src/app/authstudent/authstudent.url';

@Component({
    selector: 'app-auth-navbar',
    templateUrl: './auth-navbar.component.html',
    styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

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

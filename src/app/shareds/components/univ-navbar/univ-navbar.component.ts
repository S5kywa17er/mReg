import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { AppURL } from 'src/app/app.url';
import { Router } from '@angular/router';

@Component({
    selector: 'app-univ-navbar',
    templateUrl: './univ-navbar.component.html',
    styleUrls: ['./univ-navbar.component.css']
})
export class UnivNavbarComponent implements OnInit {

    constructor(
        private language: LanguageService,
        private router: Router,
    ) { }

    AppURL = AppURL;

    ngOnInit() {
    }

    changeLanguage(lang: string) {
        window.location.reload();
        this.language.setLanguage(lang);
        // console.log(lang);
    }

}

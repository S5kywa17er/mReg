import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { AppURL } from 'src/app/app.url';
import { AccountService } from '../../services/account.service';

@Component({
    selector: 'app-univ-sidebar',
    templateUrl: './univ-sidebar.component.html',
    styleUrls: ['./univ-sidebar.component.css']
})
export class UnivSidebarComponent implements OnInit {

    constructor(
        private language: LanguageService,
        private acccount: AccountService,
    ) { }

    AppURL = AppURL;

    ngOnInit() {
    }

}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(private translate: TranslateService) {

        // console.log(localStorage.getItem('lang'));
        if (!localStorage.getItem('lang')) {
            this.translate.setDefaultLang('th');
            this.translate.use('th');
            localStorage.setItem('lang', 'th');
        } else if (localStorage.getItem('lang')) {
            this.translate.setDefaultLang(localStorage.getItem('lang'));
            this.translate.use(localStorage.getItem('lang'));
        } else {
            this.translate.setDefaultLang('th');
            localStorage.setItem('lang', 'th');
        }
    }

    setLanguage(lang: string) {
        // setTimeout(() => { this.translate.use(lang); }, 2000);
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
        // console.log(lang);
    }

}

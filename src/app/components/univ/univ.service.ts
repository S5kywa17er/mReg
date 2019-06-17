import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IWebmsg } from './univ.interface';
import { AuthenService } from 'src/app/services/authen.service';

@Injectable()
export class WebmsgService {
    constructor(
        private http: HttpService,
        private authen: AuthenService,

    ) { }

    getInitWebmsg(Token?: string) {
        return this.http
            .requestGet(`api/webmsg/getwebmsg/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IWebmsg>;
    }

    getWebmsg(webmsgid?: any, Token?: string) {
        return this.http
            .requestGet(`api/webmsg/getwebmsg/${localStorage.getItem('lang')}/${webmsgid}`, Token)
            .toPromise() as Promise<IWebmsg>;
    }

}

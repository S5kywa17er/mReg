import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { AppURL } from 'src/app/app.url';
import { IWebmsg, IUnivComponent } from './univ.interface';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthenService } from 'src/app/services/authen.service';
import { WebmsgService } from './univ.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { WebmsgComponent } from './webmsg/webmsg.component';

declare const App: any;

@Component({
    selector: 'app-univ',
    templateUrl: './univ.component.html',
    styleUrls: ['./univ.component.css'],
    providers: [WebmsgService]
})
export class UnivComponent implements OnInit {

    constructor(
        private language: LanguageService,
        private alert: AlertService,
        private authen: AuthenService,
        private detect: ChangeDetectorRef,

        private webmsglst: WebmsgService,
        private webmsgitem: WebmsgService,
        private modalService: BsModalService,
    ) {
        this.onLoadInitialWebMsg();
    }

    Url = AppURL;

    webmsgs: IWebmsg;
    webmsgitems: IWebmsg;
    // iwebmsg: IWebmsg;

    webmsgRef: BsModalRef;

    ngOnInit() {
        App.initialLoadPage();
    }

    onClickWebmsg(webmsg: IWebmsg) {
        this.onLoadWebMsg(webmsg.webmsgid);
        const initialState: {
            webmsg: string,
            webtitle: string,
            sender: string
        } = {
            webmsg: webmsg.webmsg,
            webtitle: webmsg.webtitle,
            sender: webmsg.sender
        } as any;

        this.webmsgRef = this.modalService.show(WebmsgComponent, { initialState });

    }

    private onLoadInitialWebMsg() {
        this.webmsglst
            .getInitWebmsg(this.authen.getAuthenticated())
            .then(lstWebmsg => { this.webmsgs = lstWebmsg; })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadWebMsg(webmsgid?: any) {
        this.webmsgitem
            .getWebmsg(webmsgid, this.authen.getAuthenticated())
            .then(lstWebmsg => {
                this.webmsgitems = lstWebmsg;
                // this.iwebmsg = this.webmsgitems;
            })
            .catch(err => this.alert.notify(err.Message));
    }

}

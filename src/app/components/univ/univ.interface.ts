import { BsModalRef } from 'ngx-bootstrap';
import { TemplateRef } from '@angular/core';

export interface IUnivComponent {
    Url: any;
}

export interface IWebmsg {
    webmsgid: any;
    webtitle: string;
    webmsg: string;
    targettype: string;
    priority: string;
    sender: string;
}

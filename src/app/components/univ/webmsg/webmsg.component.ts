import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-webmsg',
    templateUrl: './webmsg.component.html',
    styleUrls: ['./webmsg.component.css']
})
export class WebmsgComponent implements OnInit {

    constructor(
        public webmsgRef: BsModalRef,
    ) { }

    webmsg: string;
    webtitle: string;
    sender: string;

    ngOnInit() {
    }

}

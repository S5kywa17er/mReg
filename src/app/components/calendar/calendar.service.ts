import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IStrWhere } from './calendar.interface';
declare let $;

@Injectable()
export class CalendarService {
    constructor(
        private http: HttpService,
        private authen: AuthenService
    ) {
        // console.log(this.authen.getAuthenticated());
    }

    getScheduleGroup(Token?: string) {
        return this.http
            .requestGet(`api/calendar/getschedulegroup/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IScheduleGroup>;
    }

    getScheduleItem(strWhere?: IStrWhere, Token?: string) {
        return this.http
            .requestGet(`api/calendar/getscheduleitem/${localStorage.getItem('lang')}/${strWhere.groupid}/${strWhere.semester}`, Token)
            .toPromise() as Promise<IScheduleItem>;
    }

}

export interface IScheduleGroup {
    schedulegroupid: any;
    schedulegroupname: string;
}

export interface IScheduleItem {
    seq: any;
    title: string;
    datetime: string;
    showtype: string;
}

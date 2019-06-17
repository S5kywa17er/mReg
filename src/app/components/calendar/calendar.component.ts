import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarService, IScheduleGroup, IScheduleItem } from './calendar.service';
import { LanguageService } from 'src/app/services/language.service';
import { SemesterService, ISemester } from 'src/app/shareds/services/semester.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthenService } from 'src/app/services/authen.service';
import { ICalendarComponent, IStrWhere } from './calendar.interface';
declare const App: any;

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    providers: [CalendarService]
})
export class CalendarComponent implements OnInit, ICalendarComponent {

    constructor(
        private language: LanguageService,
        private alert: AlertService,
        private authen: AuthenService,
        public initsemester: SemesterService,
        private detect: ChangeDetectorRef,

        private calendargroup: CalendarService,
        private calendaritem: CalendarService,
    ) {
        this.onLoadCalendargroup();
    }

    calendargroups: IScheduleGroup;
    calendaritems: IScheduleItem;
    semesters: ISemester = {} as any;

    igroupid: IScheduleGroup;
    isemester: ISemester = {} as any;

    ngOnInit() {
        App.initialLoadPage();
    }

    onChangeUpdate(): void {
        // console.log(this.igroupid);
        // console.log(this.isemester);
        if (!this.igroupid) { return this.alert.invalid_fill_data(); }

        this.onLoadCalendarItem({
            groupid: this.igroupid,
            semester: this.isemester
        });

        this.detect.detectChanges();
    }

    private onLoadCalendargroup() {
        this.calendargroup
            .getScheduleGroup(this.authen.getAuthenticated())
            .then(lstScheduleGroup => { this.calendargroups = lstScheduleGroup; })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadCalendarItem(strWhere?: IStrWhere) {
        this.calendaritem
            .getScheduleItem(strWhere, this.authen.getAuthenticated())
            .then(lstScheduleItem => { this.calendaritems = lstScheduleItem; })
            .catch(err => this.alert.data_not_found());
    }

}

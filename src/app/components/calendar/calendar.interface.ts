import { IScheduleItem, IScheduleGroup } from './calendar.service';
import { ISemester } from 'src/app/shareds/services/semester.service';

export interface ICalendarComponent {
    calendargroups: IScheduleGroup;
    calendaritems: IScheduleItem;
    semesters: ISemester;

    igroupid: IScheduleGroup;
    isemester: ISemester;
}

export interface IStrWhere {
    groupid?: any;
    semester?: any;
}

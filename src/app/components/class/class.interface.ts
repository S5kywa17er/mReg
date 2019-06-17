import { ISemester } from 'src/app/shareds/services/semester.service';
import { ICampus, ILevel } from 'src/app/shareds/services/initial.service';

export interface IClassComponent {

    semester: ISemester;
    campus: ICampus;
    levels: ILevel;
    searchStr: string;
    coursecodes: string;

    isemester: ISemester;
    icampus: ICampus;
    ilevel: ILevel;
    isearchstr: string;
    icoursecode: string;

}
export interface IClassCourse {
    courseid: any;
    coursecode: string;
    coursename: string;
    courseunit: string;
    countofsection: string;
}

export interface IClassSection {
    classid: any;
    courseid: any;
    coursecode: string;
    section: string;
    sectioncode: string;
    totalseat: string;
    enrollseat: string;
    instructor: string;
    classstatus: string;
}

export interface IClassInfo {
    classid: any;
    weekday: string;
    timefrom: string;
    timeto: string;
    examdatetime: string;
}

export interface IWhClass {
    campusid?: any;
    levelid?: any;
    searchstr?: any;

    semester: any;
}

export interface IWhClassCourse {
    coursecode: string;
    semester: any;

    campusid?: any;
    levelid?: any;
}

export interface IWhClassinfo {
    classid: any;
}

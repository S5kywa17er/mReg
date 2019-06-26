import { ILevel } from 'src/app/shareds/services/initial.service';

export interface IProgramComponent {
    levels: ILevel;

    ilevel: ILevel;
    iprogram: any;
}

export interface IProgramInfo {
    levelid: any;
    facultyid: any;
    programid: any;
    // departmentid: any;
    // program: string;
    // programname: string;
    // credittotal: string;
    // gradepointmin: string;
    // studyyearmax: string;
}

export interface IWhLevel {
    levelid?: any;
}

export interface IWhProgramid {
    programid?: any;
}

export interface IWhCourseid {
    courseid?: any;
}

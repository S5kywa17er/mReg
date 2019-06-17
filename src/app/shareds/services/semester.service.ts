import { Injectable } from "@angular/core";

@Injectable()
export class SemesterService {
    public defaultSemester: ISemester[] = [];

    constructor() { this.getSemester(); }

    public getSemester() {
        if (localStorage.getItem('lang') === 'th') {
            var yeardiff: number = new Date().getFullYear() + 543;
        } else {
            var yeardiff: number = new Date().getFullYear();
        }

        for (let smax = 2; smax <= 3; smax++) {
            this.defaultSemester.push({
                semesterindex: new Date().getFullYear() + 542 + smax.toString(),
                semesterinfo: smax.toString() + '/' + (yeardiff - 1).toString()
            });
        }

        for (let smax = 1; smax <= 2; smax++) {
            this.defaultSemester.push({
                semesterindex: new Date().getFullYear() + 543 + smax.toString(),
                semesterinfo: smax.toString() + '/' + (yeardiff).toString()
            });
        }

        this.defaultSemester.sort();
    }
}

export interface ISemester {
    semesterindex: any;
    semesterinfo: string;
}

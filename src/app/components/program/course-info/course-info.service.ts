import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { Injectable } from '@angular/core';
// import { ICourseInfo } from './course-info.interface';

@Injectable()
export class CourseInfoService {
    constructor(
        private http: HttpService,
        private authen: AuthenService,
    ) { }

    // getCourseInfo(courseid: any, Token?: string) {
    //     return this.http
    //         .requestGet(`api/programstructure/getcourseinfo/${localStorage.getItem('lang')}/${courseid}`, Token)
    //         .toPromise() as Promise<ICourseInfo>;
    // }
}

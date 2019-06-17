import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IClassCourse, IWhClass, IWhClassCourse, IClassSection } from './class.interface';
declare let $;

@Injectable()
export class ClassService {
    constructor(
        private http: HttpService,
        private authen: AuthenService,
    ) { }

    getClassCourse(whclass: IWhClass) {
        let strWhere: string = '';

        if (whclass.searchstr) {
            strWhere = strWhere + '/' + whclass.searchstr;
        } else {
            strWhere = strWhere + '/-1';
        }

        if (whclass.campusid) {
            strWhere = strWhere + '/' + whclass.campusid;
        } else {
            strWhere = strWhere + '/-1';
        }

        if (whclass.levelid) {
            strWhere = strWhere + '/' + whclass.levelid;
        } else {
            strWhere = strWhere + '/-1';
        }

        console.log(strWhere);
        return this.http
            .requestGet(`api/classinfo/getsearchcourse/${localStorage.getItem('lang')}/${whclass.semester}${strWhere}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IClassCourse>;
    }

    getClassSection(whclasscourse: IWhClassCourse) {
        let strWhere: string = '';

        if (whclasscourse.campusid) {
            strWhere = strWhere + '/' + whclasscourse.campusid;
        } else {
            strWhere = strWhere + '/-1';
        }

        if (whclasscourse.levelid) {
            strWhere = strWhere + '/' + whclasscourse.levelid;
        } else {
            strWhere = strWhere + '/-1';
        }
        console.log(strWhere);
        return this.http
            .requestGet(`api/classinfo/getclasssection/${localStorage.getItem('lang')}/${whclasscourse.semester}/${whclasscourse.coursecode}${strWhere}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IClassSection>;
    }

    getClassInfo(str?: string) {
        console.log('xxx');
    }

}

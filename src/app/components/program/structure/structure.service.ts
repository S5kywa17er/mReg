import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IProgramStructure, ICourseInProgram } from './structure.interface';

@Injectable()
export class StructureService {
    constructor(
        private http: HttpService,
        private authen: AuthenService,
    ) { }

    getProgramStructure(programid: any, Token?: string) {
        return this.http
            .requestGet(`api/programstructure/getCourseinProgram/${localStorage.getItem('lang')}/${programid}`, Token)
            .toPromise() as Promise<IProgramStructure>;
    }

    getCourseInfo(courseid: any, Token?: string) {
        return this.http
            .requestGet(`api/programstructure/getcourseinfo/${localStorage.getItem('lang')}/${courseid}`, Token)
            .toPromise() as Promise<ICourseInProgram>;
    }
}

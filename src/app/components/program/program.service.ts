import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IWhLevel, IProgramInfo } from './program.interface';

@Injectable()
export class ProgramService {
    constructor(
        private http: HttpService,
        private authen: AuthenService
    ) { }

    getProgram(whlevel: IWhLevel) {
        return this.http
            .requestGet(`api/programinfo/getsearchprograms/${localStorage.getItem('lang')}/${whlevel.levelid}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IProgramInfo>;
    }

}

import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';

@Injectable()
export class InitialService {
    constructor(private http: HttpService) { }

    public getCampus(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getcampus/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<ICampus>;
    }

    public getLevels(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getlevel/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<ILevel>;
    }

    public getFacultys(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getfaculty/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IFaculty>;
    }

    public getDepartments(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getdepartment/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IDepartment>;
    }

    public getPrograms(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getprogram/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IProgram>;
    }

    public getDivisions(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getdivision/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IDivision>;
    }

    public getProgramcodes(controller: string, Token: string) {
        return this.http
            .requestGet(`api/${controller}/getprogramcode/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<IProgramcode>;
    }

    public getSysconfig(controller: string, Token: string, configcode: string) {
        return this.http
            .requestGet(`api/${controller}/getsysconfig/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<ISysconfig>;
    }

    public getSysbytedes(controller: string, Token: string, table: string, column: string) {
        return this.http
            .requestGet(`api/${controller}/getsysbytedes/${localStorage.getItem('lang')}`, Token)
            .toPromise() as Promise<ISysbytedes>;
    }
}

export interface ICampus {
    campusid: any;
    campusname: string;
}

export interface ILevel {
    levelid: any;
    levelname: string;
}

export interface IFaculty {
    facultyid: any;
    facultyname: string;
}

export interface IDepartment {
    departmentid: any;
    departmentname: string;
}

export interface IProgram {
    programid: any;
    programname: string;
}

export interface IDivision {
    divisioncode: string;
    divisioncodename: string;
}

export interface IProgramcode {
    programcode: string;
    programcodename: string;
}

export interface ISysconfig {
    config: string;
    configvalue: string;
}

export interface ISysbytedes {
    bytecode: string;
    bytedes: string;
}

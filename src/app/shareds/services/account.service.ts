import { Injectable } from "@angular/core";
import { HttpService } from './../../services/http.service';
import { ILogin } from 'src/app/components/login/login.interface';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpService) { }

    public UserLogin: IAccount = {} as any;
    public setUserInfo(userInfo: IAccount) {
        // this.UserLogin.utoken = userInfo.utoken;
        this.UserLogin.uid = userInfo.uid;
        this.UserLogin.ulogin = userInfo.ulogin;
        this.UserLogin.upassword = userInfo.upassword;
        this.UserLogin.urole = userInfo.urole;
        this.UserLogin.uprefix = userInfo.uprefix;
        this.UserLogin.ufirstname = userInfo.ufirstname;
        this.UserLogin.ulastname = userInfo.ulastname;

        return this.UserLogin;
    }

    userLogin(validdata: ILogin) {
        return this.http
            .requestPost('api/users/validate', validdata)
            .toPromise() as Promise<{ accessKey: string }>;
    }

    getUserLogin(accessKey: string) {
        return (this.http
            .requestGet(`api/users/getuserlogin/${localStorage.getItem('lang')}`, accessKey)
            .toPromise() as Promise<IAccount>)
            .then(userInfo => this.setUserInfo(userInfo));
    }

}

export interface IAccount {
    // utoken?: string;
    uid?: any;
    ulogin: string;
    upassword: string;
    urole?: IRoleUsers;

    uprefix?: string;
    ufirstname?: string;
    ulastname?: string;
}

export enum IRoleUsers {
    Admin = 0,
    Student,
    Staff,
    Officer
}

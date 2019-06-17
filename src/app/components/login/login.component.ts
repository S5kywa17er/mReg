import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shareds/services/account.service';
import { ILoginComponent } from './login.interface';
import { AppURL } from 'src/app/app.url';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements ILoginComponent {

    constructor(
        private frmbuilder: FormBuilder,
        private alert: AlertService,
        private router: Router,
        private account: AccountService,
        private authen: AuthenService,
        private activateRoute: ActivatedRoute,
    ) {
        this.initialLogin();
    }

    Url = AppURL;

    returnURL: string;
    frmLogin: FormGroup;

    onSubmit(): void {
        if (this.frmLogin.invalid) { return this.alert.invalid_data(); }
        this.account
            .userLogin(this.frmLogin.value)
            .then(resp => {
                this.authen.setAuthenticated(resp.accessKey);
                this.alert.notify('เข้าสู่ระบบสำเร็จ/Login Success.', 'info');
                // this.router.navigateByUrl(this.returnURL);
                // this.router.navigate(['/', AppURL.Students, AuthStuURL.Student]);
                console.log('ALEZ ALEZ ALEZ');
            })
            .catch(err => this.alert.notify(err.Message));
        // this.router.navigate(['/', AppURL.Students, AuthStuURL.Student]);
    }

    private initialLogin() {
        this.frmLogin = this.frmbuilder.group(
            {
                ulogin: ['', Validators.required],
                upassword: ['', Validators.required]
            });
    }

}

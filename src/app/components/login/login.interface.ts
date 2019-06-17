import { FormGroup, FormBuilder } from '@angular/forms';

export interface ILoginComponent {

    Url: any;
    returnURL: string;

    frmLogin: FormGroup;

    onSubmit(): void;
}

export interface ILogin {
    ulogin: string;
    upassword: string;
}

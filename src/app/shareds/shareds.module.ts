import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { AuthstudentSidebarComponent } from './components/authstudent-sidebar/authstudent-sidebar.component';
import { AuthstaffSidebarComponent } from './components/authstaff-sidebar/authstaff-sidebar.component';
import { UnivNavbarComponent } from './components/univ-navbar/univ-navbar.component';
import { UnivContentComponent } from './components/univ-content/univ-content.component';
import { UnivSidebarComponent } from './components/univ-sidebar/univ-sidebar.component';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule, ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { AlertService } from './services/alert.service';
import { SemesterService } from './services/semester.service';
import { InitialService } from './services/initial.service';

@NgModule({
    declarations: [
        AuthNavbarComponent,
        AuthSidebarComponent,
        AuthContentComponent,
        AuthstudentSidebarComponent,
        AuthstaffSidebarComponent,
        UnivNavbarComponent,
        UnivContentComponent,
        UnivSidebarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule,

        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot()
    ],
    exports: [
        AuthNavbarComponent,
        AuthSidebarComponent,
        AuthContentComponent,
        AuthstudentSidebarComponent,
        AuthstaffSidebarComponent,
        UnivNavbarComponent,
        UnivContentComponent,
        UnivSidebarComponent,

        FormsModule,
        ReactiveFormsModule,

        BsDropdownModule,
        ButtonsModule,
        ModalModule
    ],
    providers: [
        AlertService,
        SemesterService,
        InitialService
    ]
})
export class SharedsModule { }

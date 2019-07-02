import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';

import { AuthstudentSidebarComponent } from './components/authstudent-sidebar/authstudent-sidebar.component';
import { AuthstudentContentComponent } from './components/authstudent-content/authstudent-content.component';
import { AuthstudentNavbarComponent } from './components/authstudent-navbar/authstudent-navbar.component';

import { AuthstaffSidebarComponent } from './components/authstaff-sidebar/authstaff-sidebar.component';
import { AuthstaffContentComponent } from './components/authstaff-content/authstaff-content.component';
import { AuthstaffNavbarComponent } from './components/authstaff-navbar/authstaff-navbar.component';

import { UnivNavbarComponent } from './components/univ-navbar/univ-navbar.component';
import { UnivContentComponent } from './components/univ-content/univ-content.component';
import { UnivSidebarComponent } from './components/univ-sidebar/univ-sidebar.component';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule, ButtonsModule, ModalModule, AccordionModule } from 'ngx-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertService } from './services/alert.service';
import { SemesterService } from './services/semester.service';
import { InitialService } from './services/initial.service';


@NgModule({
    declarations: [
        AuthNavbarComponent,
        AuthSidebarComponent,
        AuthContentComponent,

        AuthstudentSidebarComponent,
        AuthstudentContentComponent,
        AuthstudentNavbarComponent,

        AuthstaffSidebarComponent,
        AuthstaffContentComponent,
        AuthstaffNavbarComponent,

        UnivNavbarComponent,
        UnivContentComponent,
        UnivSidebarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule,
        // BrowserAnimationsModule,

        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
    ],
    exports: [
        AuthNavbarComponent,
        AuthSidebarComponent,
        AuthContentComponent,

        AuthstudentSidebarComponent,
        AuthstudentContentComponent,
        AuthstudentNavbarComponent,

        AuthstaffSidebarComponent,
        AuthstaffContentComponent,
        AuthstaffNavbarComponent,

        UnivNavbarComponent,
        UnivContentComponent,
        UnivSidebarComponent,

        FormsModule,
        ReactiveFormsModule,
        // BrowserAnimationsModule,

        BsDropdownModule,
        ButtonsModule,
        ModalModule,
        AccordionModule,
    ],
    providers: [
        AlertService,
        SemesterService,
        InitialService
    ]
})
export class SharedsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { UnivComponent } from './components/univ/univ.component';
import { LoginComponent } from './components/login/login.component';
import { AppRouting } from './app.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedsModule } from './shareds/shareds.module';

import { CalendarComponent } from './components/calendar/calendar.component';
import { ClassComponent } from './components/class/class.component';
import { ProgramComponent } from './components/program/program.component';
import { WebmsgComponent } from './components/univ/webmsg/webmsg.component';
import { ProgramStructureComponent } from './components/program-structure/program-structure.component';
// import { PrgstuctureComponent } from './components/program/prgstucture/prgstucture.component';
import { StructureComponent } from './components/program/structure/structure.component';

@NgModule({
    declarations: [
        AppComponent,
        UnivComponent,
        LoginComponent,
        CalendarComponent,
        ClassComponent,
        ProgramComponent,
        WebmsgComponent,
        ProgramStructureComponent,
        // PrgstuctureComponent,
        StructureComponent,
    ],
    imports: [
        AppRouting,
        BrowserModule,
        SharedsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        WebmsgComponent,
        StructureComponent
    ]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

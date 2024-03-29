import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthenService } from 'src/app/services/authen.service';
import { SemesterService } from 'src/app/shareds/services/semester.service';
import { InitialService, ILevel } from 'src/app/shareds/services/initial.service';
import { IProgramComponent, IProgramInfo, IWhLevel, IWhProgramid, IWhCourseid } from './program.interface';
import { ProgramService } from './program.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ProgramStructureComponent } from '../program-structure/program-structure.component';
import { StructureComponent } from './structure/structure.component';
import { ICourseInfo } from './course-info/course-info.interface';
import { CourseInfoComponent } from './course-info/course-info.component';

declare const App: any;

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.css'],
    providers: [ProgramService]
})
export class ProgramComponent implements OnInit, IProgramComponent {

    constructor(
        private language: LanguageService,
        private alert: AlertService,
        private authen: AuthenService,
        public semester: SemesterService,
        private detect: ChangeDetectorRef,
        private router: Router,
        private modalService: BsModalService,

        private initlevel: InitialService,
        private programlst: ProgramService,

    ) { this.onLoadInitData(); }

    levels: ILevel;

    ilevel: ILevel;
    iprogram: any;

    programs: IProgramInfo;

    structureRef: BsModalRef;

    AppURL = AppURL;

    ngOnInit() {
        App.initialLoadPage();
    }

    onClickLevel(): void {
        this.onLoadProgram({ levelid: this.ilevel });
        this.detect.detectChanges();
    }

    onClickProgram(id: IWhProgramid) {
        // this.router.navigate(['', AppURL.ProgramStructure, id.programid]);

        // const initialState: { programid: any } = { programid: id.programid } as any;
        const initialState = id.programid;
        this.structureRef = this.modalService
            .show(StructureComponent, Object.assign({ initialState }, { class: 'gray modal-lg', animated: true }));
    }

    private onLoadInitData() {
        this.initlevel
            .getLevels('programinfo', this.authen.getAuthenticated())
            .then(lstLevel => { this.levels = lstLevel; })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadProgram(whlevel: IWhLevel) {
        this.programlst
            .getProgram(whlevel)
            .then(lstProgram => { this.programs = lstProgram; })
            .catch(err => this.alert.notify(err.Message));
    }

}

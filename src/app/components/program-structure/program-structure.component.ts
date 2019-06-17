import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ProgramStructureService } from './program-structure.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { IProgramStructureComponent, IProgramStructure, ICourseInProgram } from './program-structure.interface';
import { ActivatedRoute, Router } from '@angular/router';

declare const App: any;

@Component({
    selector: 'app-program-structure',
    templateUrl: './program-structure.component.html',
    styleUrls: ['./program-structure.component.css'],
    providers: [ProgramStructureService]
})
export class ProgramStructureComponent implements OnInit, IProgramStructureComponent {

    constructor(
        private language: LanguageService,
        private alert: AlertService,
        private authen: AuthenService,
        private detect: ChangeDetectorRef,
        private activatedRouter: ActivatedRoute,
        private router: Router,

        private programStructurelst: ProgramStructureService,
        public programStructureRef: BsModalRef,

    ) {
        this.activatedRouter.params.forEach(params => {
            this.programid = params.id;
        });
        this.onLoadInitialProgramStructure();
    }

    programid: any;
    programstructures: IProgramStructure;
    // courseinprograms: ICourseInProgram;

    ngOnInit() {
        App.initialLoadPage();
    }

    private onLoadInitialProgramStructure() {
        console.log(this.programid);
        if (!this.programid) { return; }
        this.programStructurelst
            .getProgramStructure(this.programid, this.authen.getAuthenticated())
            .then(lstProgramStructure => { this.programstructures = lstProgramStructure; console.log(this.programstructures); })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadCourses() { }
}

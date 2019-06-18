import { Component, OnInit } from '@angular/core';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap';
import { IStructureComponent, IProgramStructure } from './structure.interface';
import { StructureService } from './structure.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
    selector: 'app-structure',
    templateUrl: './structure.component.html',
    styleUrls: ['./structure.component.css'],
    providers: [StructureService]
})
export class StructureComponent implements OnInit, IStructureComponent {

    constructor(
        public structureRef: BsModalRef,
        private modalOpt: ModalOptions,
        private authen: AuthenService,
        private alert: AlertService,

        private programStructurelst: StructureService,
    ) {
        this.programid = this.modalOpt.initialState.valueOf();
        console.log(this.programid);
        this.onLoadProgramStructure();
    }

    programstructures: IProgramStructure;
    condition: string;
    programid: any;

    ngOnInit() {
    }

    private onLoadProgramStructure() {
        // console.log(this.programid);
        if (!this.programid) { return; }
        this.programStructurelst
            .getProgramStructure(this.programid, this.authen.getAuthenticated())
            .then(lstProgramStructure => { this.programstructures = lstProgramStructure; console.log(this.programstructures); })
            .catch(err => this.alert.notify(err.Message));
    }

}

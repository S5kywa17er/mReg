import { Component, OnInit, TemplateRef, Input, ViewChild } from '@angular/core';
import { BsModalRef, ModalOptions, AccordionModule, BsModalService, ModalDirective } from 'ngx-bootstrap';
import { IStructureComponent, IProgramStructure, ICourseInProgram } from './structure.interface';
import { StructureService } from './structure.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { SharedsModule } from 'src/app/shareds/shareds.module';

@Component({
    selector: 'app-structure',
    templateUrl: './structure.component.html',
    styleUrls: ['./structure.component.css'],
    providers: [StructureService]
})
export class StructureComponent implements IStructureComponent {

    constructor(
        private structureRef: BsModalRef,
        private modalOpt: ModalOptions,

        private authen: AuthenService,
        private alert: AlertService,

        private programStructurelst: StructureService,
        private courselst: StructureService,
        private modalService: BsModalService,
    ) {
        this.programid = this.modalOpt.initialState.toString();
        this.onLoadProgramStructure();
    }

    @Input('modalRef') modalRef: BsModalRef;
    // @ViewChild('childModal', {}) childModal: ModalDirective;

    programstructures: IProgramStructure;
    courseinfo: ICourseInProgram;

    // modalRef: BsModalRef;

    condition: string;
    programid: string = '';
    courseid: string = '';
    icourseid: any;

    customClass = 'customClass';
    isFirstOpen = true;

    bsModalRef: BsModalRef;

    // showChildModal(): void {
    //     this.childModal.show();
    // }

    onClickCourse(courses: ICourseInProgram, template: TemplateRef<any>) {
        console.log(courses);
        // this.onLoadCourseInfo(course.courseid);
        const initialState = {
            list: [
                'course code',
                'course name',
                'description',
                '...'
            ],
            title: 'xxxxxx'
        };

        // this.bsModalRef = this.modalService.show({}, { initialState });
        this.bsModalRef = this.modalService.show(template, Object.assign({ initialState }, { class: 'modal-sm', animated: true }));
    }

    openModal(template: TemplateRef<any>) {
        // console.log(this.icourseid);
        // this.onLoadCourseInfo(this.icourseid);
        // Object.assign({ initialState }, { class: 'gray modal-lg', animated: true })

        // let bsModalRef = this.modalService
        //     .show(ConfirmPopupComponent, Object.assign({}, this.modalConfig, { class: 'modal-sm', initialState }));
        // const initialState: {
        //     coursecode: string,
        //     coursename: string,
        //     coursenameeng: string,
        //     courseunit: string
        // } = {
        //     coursecode: this.programstructures.courses.coursecode,
        //     coursename: this.programstructures.courses.coursename,
        //     coursenameeng: this.programstructures.courses.coursenameeng,
        //     courseunit: this.programstructures.courses.courseunit

        // } as any;
        // console.log(initialState);
        this.bsModalRef = this.modalService.show(template, { class: 'modal-sm', animated: true });
    }

    private onLoadProgramStructure() {
        if (!this.programid) { return; }
        this.programStructurelst
            .getProgramStructure(this.programid, this.authen.getAuthenticated())
            .then(lstProgramStructure => { this.programstructures = lstProgramStructure; })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadCourseInfo(id: any) {
        this.courselst
            .getCourseInfo(id, this.authen.getAuthenticated())
            .then(lstcourseinfo => { this.courseinfo = lstcourseinfo; })
            .catch(err => this.alert.notify(err.Message));
    }

}

@Component({
    selector: 'app-structure',
    template: `
      <div class="modal-header">
            <h4 class="modal-title pull-left">{{title}}</h4>
            <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
                <span aria-hidden="true">&times;</span>
            </button>
      </div>
      <div class="modal-body">
            <ul *ngIf="list.length">
                <li *ngFor="let item of list">{{item}}</li>
            </ul>
      </div>
      <div class="modal-footer">
            <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
      </div>
    `
})

export class CourseinfoComponent implements OnInit {
    title: string;
    closeBtnName: string;
    list: any[] = [];

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {
        // this.list.push('PROFIT!!!');
    }
}

import { Component, OnInit, TemplateRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BsModalRef, ModalOptions, AccordionModule, BsModalService, ModalDirective } from 'ngx-bootstrap';
import { IStructureComponent, IProgramStructure, ICourseInProgram } from './structure.interface';
import { StructureService } from './structure.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { ICourseInfo } from '../course-info/course-info.interface';
import { CourseInfoComponent } from '../course-info/course-info.component';

@Component({
    selector: 'app-structure',
    templateUrl: './structure.component.html',
    styleUrls: ['./structure.component.css'],
    providers: [StructureService]
})
export class StructureComponent implements IStructureComponent {

    constructor(
        public structureRef: BsModalRef,
        private modalOpt: ModalOptions,
        private modalService: BsModalService,

        private authen: AuthenService,
        private alert: AlertService,
        private detect: ChangeDetectorRef,

        private programStructurelst: StructureService,
        // private courselst: StructureService,

    ) {
        this.programid = this.modalOpt.initialState.toString();
        this.onLoadProgramStructure();
    }

    // @Input('modalRef') modalRef: BsModalRef;
    isAnimated: boolean = true;
    isContentOpen: boolean = false;

    programstructures: IProgramStructure;
    courseinfo: ICourseInProgram[];

    condition: string;
    programid: string = '';
    courseid: string = '';
    icourseid: any;

    courseinfoModalRef: BsModalRef;

    onClickCourse(courses: ICourseInfo) {
        const initialState: {
            coursecode: any;
            revisioncode: string;
            coursename: string;
            coursenameeng: string;
            facultyname: string;
            departmentname: string;
            courseunit: string;
            coursedes: string;
            prerequisite: string;
        } = {
            coursecode: courses.coursecode,
            revisioncode: courses.revisioncode,
            coursename: courses.coursename,
            coursenameeng: courses.coursenameeng,
            facultyname: courses.facultyname,
            departmentname: courses.departmentname,
            courseunit: courses.courseunit,
            coursedes: courses.coursedes,
            prerequisite: courses.prerequisite
        };
        this.courseinfoModalRef = this.modalService
            .show(CourseInfoComponent, Object.assign({ initialState }, { class: 'second', animated: true }));

        this.detect.detectChanges();
    }

    // openModal(template: TemplateRef<any>, courses?: ICourseInfo) {
    //     console.log(courses);
    //     this.courseinfoModalRef = this.modalService
    //         .show(CourseInfoComponent, { class: 'second', animated: true });
    // }

    private onLoadProgramStructure() {
        if (!this.programid) { return; }
        this.programStructurelst
            .getProgramStructure(this.programid, this.authen.getAuthenticated())
            .then(lstProgramStructure => { this.programstructures = lstProgramStructure; })
            .catch(err => this.alert.notify(err.Message));
    }

    // private onLoadCourseInfo(id: any) {
    //     this.courselst
    //         .getCourseInfo(id, this.authen.getAuthenticated())
    //         .then(lstcourseinfo => { this.courseinfo = lstcourseinfo; })
    //         .catch(err => this.alert.notify(err.Message));
    // }

}



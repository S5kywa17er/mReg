import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthenService } from 'src/app/services/authen.service';
import { SemesterService, ISemester } from 'src/app/shareds/services/semester.service';
import { IClassComponent, IClassCourse, IClassSection, IWhClass, IWhClassCourse } from './class.interface';
import { ICampus, ILevel, InitialService } from 'src/app/shareds/services/initial.service';
import { ClassService } from './class.service';
declare const App: any;

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css'],
    providers: [ClassService]
})
export class ClassComponent implements OnInit, IClassComponent {

    constructor(
        private language: LanguageService,
        private alert: AlertService,
        private authen: AuthenService,
        private detect: ChangeDetectorRef,

        public initsemester: SemesterService,
        private initcampus: InitialService,
        private initlevel: InitialService,

        private courselst: ClassService,
        private sectionlst: ClassService,
    ) {
        // console.log(initsemester.defaultSemester);
        this.onLoadInitData();
    }

    semester: ISemester = {} as any;
    campus: ICampus;
    levels: ILevel;
    searchStr: string = '';
    coursecodes: string = '';

    isemester: ISemester = {} as any;
    icampus: ICampus;
    ilevel: ILevel;
    isearchstr: string = '';
    icoursecode: string = '';

    courses: IClassCourse;
    sections: IClassSection;

    ngOnInit() {
        App.initialLoadPage();
    }

    onSubmitSearch(): void {
        if (this.isemester[0] == null) { return this.alert.invalid_fill_data(); }

        this.onLoadClassCourse(
            {
                semester: this.isemester,
                searchstr: this.isearchstr,
                campusid: this.icampus,
                levelid: this.ilevel
            });

        this.sections = null;

        this.detect.detectChanges();
    }

    onClickCourse(): void {

        this.onLoadClassSection(
            {
                semester: this.isemester,
                coursecode: this.icoursecode,
                campusid: this.icampus,
                levelid: this.ilevel
            });

        this.detect.detectChanges();
    }

    private onLoadInitData() {
        this.initcampus
            .getCampus('classinfo', this.authen.getAuthenticated())
            .then(lstCampus => { this.campus = lstCampus; })
            .catch(err => this.alert.notify(err.Message));

        this.initlevel
            .getLevels('classinfo', this.authen.getAuthenticated())
            .then(lstLevel => { this.levels = lstLevel; })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadClassCourse(whclass: IWhClass) {
        this.courselst
            .getClassCourse(whclass)
            .then(lstCourse => { this.courses = lstCourse; })
            .catch(err => this.alert.notify(err.Message));
    }

    private onLoadClassSection(whclasscourse: IWhClassCourse) {
        this.sectionlst
            .getClassSection(whclasscourse)
            .then(lstSection => { this.sections = lstSection; })
            .catch(err => this.alert.notify(err.Message));
    }

}

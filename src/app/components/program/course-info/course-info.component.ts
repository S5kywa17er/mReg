import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ICourseInfoComponent, ICourseInfo } from './course-info.interface';
import { CourseInfoService } from './course-info.service';

@Component({
    selector: 'app-course-info',
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

    constructor(public courseinfoModalRef: BsModalRef) { }

    courseinfos: ICourseInfo[];

    coursecode: string;
    revisioncode: string;
    coursename: string;
    coursenameeng: string;
    facultyname: string;
    departmentname: string;
    courseunit: string;
    coursedes: string;
    prerequisite: string;

    ngOnInit(): void { }

}

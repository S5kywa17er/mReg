export interface ICourseInfoComponent {
    courseinfos: ICourseInfo;
}

export interface ICourseInfo {
    courseid?: any;
    coursecode?: any;
    revisioncode?: string;
    coursename?: string;
    coursenameeng?: string;
    facultyname?: string;
    departmentname?: string;
    courseunit?: string;
    coursedes?: string;
    prerequisite?: string;
}

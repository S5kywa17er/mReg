export interface IStructureComponent {
    programstructures: IProgramStructure;
}
export interface IProgramStructure {
    programid: string;
    conditionid: string;
    conditiondes: string;
    description: string;
    credittotal: string;
    conditiontype: string;
    courses: ICourseInProgram;
}
export interface ICourseInProgram {
    courseid: any;
    coursecode: any;
    revisioncode: string;
    coursename: string;
    coursenameeng: string;
    facultyname: string;
    departmentname: string;
    courseunit: string;
    coursedes: string;
    prerequisite: string;
}

// export interface IWhid { id: any; opt: string; }
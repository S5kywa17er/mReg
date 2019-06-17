export interface IProgramStructureComponent {
    programstructures: IProgramStructure;
    // courseinprograms: ICourseInProgram;
}

export interface IProgramStructure {
    programid: string;
    conditionid: string;
    description: string;
    credittotal: string;
    conditiontype: string;
    courselst: ICourseInProgram;
}

export interface ICourseInProgram {
    courseid: any;
    coursecode: string;
    coursename: string;
    courseunit: string;
}

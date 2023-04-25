export class Semester {
    id!: string;
    name!: string;
    year!: string;
}

export class SemesterOfStudent {
    id!: string;
    semester!: Semester;
    gpa!: number;
}

export class SemesterOfStudentListRes {
    message!: string;
    data!: SemesterOfStudent[];
}

export class SemesterOfStudentRes {
    message!: string;
    data!: SemesterOfStudent;
}

export class Subject {
    id!: string;
    subjectCode!: string;
    name!: string;
    credit!: number;
}

export class SubjectOfStudent {
    id!: string;
    subject!: Subject;
    attendancePoint!: number;
    testPoint!: number;
    practicePoint!: number;
    examPoint!: number;
    finalPoint!: number;
    gpa!: number;
    letterGrade!: string;
}

export class SubjectOfStudentRes {
    message!: string;
    data!: SubjectOfStudent[];
}
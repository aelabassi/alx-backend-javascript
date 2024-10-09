export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
export interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentInterface;
}

export class StudentClass implements StudentInterface {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }
}

export function studentInstance(student: StudentConstructor, firstName: string, lastName: string): StudentInterface {
    return new student(firstName, lastName);
}

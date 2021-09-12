import { Members } from "./members.model";

export class Classes {
    GroupId: number;
    GroupName: string
    OrganizationName: string;
    TeacherName: string;
    TeacherPhone: string;
    TeacherEmail: string;
    AgeGroup: string[]
    MaxGroupSize: number;
    Status: string;
    Members: Members[];
}
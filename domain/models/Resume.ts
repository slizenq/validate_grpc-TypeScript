import { Entity } from "./Entity";
import { Direction } from "./values/Direction";
import { Directions } from "./values/Directions";
import { Photo } from "./values/Photo";
import { ResumeId } from "./values/ResumeId";
import { Skill } from "./values/Skill";
import { SkillsVO } from "./values/SkillsVO";
import { Portfolio } from "./values/Portfolio";
import { AboutMe } from "./values/AboutMe";
import { AboutProject } from "./values/AboutProject";
import { StudentGroup } from "./values/StudentGroup";
import { FirstName } from "./values/firstName";
import { LastName } from "./values/lastName";
import { MidleName } from "./values/MidleName";
import { PhoneNumber } from "./values/phoneNumber";
import type { Education } from "./values/Education";

export interface ResumeProps {
    firstName: FirstName;
    lastName: LastName;
    middleName: MidleName;
    direction: Direction;
    photo: Photo;
    phone: PhoneNumber;
    // directions: Directions,
    // resumeId: ResumeId,
    // skill: Skill,
    skills: SkillsVO;
    education: Education;
    aboutProject?: AboutProject;
    aboutMe?: AboutMe;
    portfolio?: Portfolio;
}

class Resume extends Entity<ResumeProps> {
    private constructor(props: ResumeProps) {
        super(props);
        this.props.photo = props.photo;
        // this.props.directions = props.directions;
        // this.props.resumeId = props.resumeId;
        // this.props.skill = props.skill;
        this.props.direction = props.direction;
        this.props.skills = props.skills;
        this.props.education = props.education;
        this.props.aboutMe = props.aboutMe;
        this.props.aboutProject = props.aboutProject;
        this.props.firstName = props.firstName;
        this.props.lastName = props.lastName;
        this.props.middleName = props.middleName;
        this.props.phone = props.phone;

        // this.props.portfolio = props.portfolio;
    }

    public static create(props: ResumeProps) {
        // if (props.photo === null || props.photo === undefined) {
        //   throw new Error('Загрузите фото');
        // } else if (props.direction === null || props.direction === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.directions === null || props.directions === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.resumeId === null || props.resumeId === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.skill === null || props.skill === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.skills === null || props.skills === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.studentGroup === null || props.studentGroup === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.aboutMe === null || props.aboutMe === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.aboutProject === null || props.aboutProject === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else if (props.portfolio === null || props.portfolio === undefined) {
        //   throw new Error("Загрузите")
        // }
        // else {
        return new Resume(props);
        // }
    }
}

export { Resume };

//

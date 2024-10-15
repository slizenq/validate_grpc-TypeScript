import { ValueObject } from "./ValueObject";

interface USkill {
    value: string;
}

class Skill extends ValueObject<USkill> {
    private constructor(props: USkill) {
        super(props);
    }

    public static create(skill: string): Skill {
        if (skill === undefined || skill === null || skill.length <= 1 || skill.length > 30) {
            throw new Error('Недостаточно/превышено количество информации о ваших способностях');
        } else {
            return new Skill({ value: skill });
        }
    }
}

export {Skill};
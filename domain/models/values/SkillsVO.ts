import { ValueObject } from "./ValueObject";

interface USkills {
  value: [];
}

class SkillsVO extends ValueObject<USkills> {
  private constructor(props: USkills) {
    super(props);
  }

  public static create(skills: []): SkillsVO {
    return new SkillsVO({ value: skills });
  }
}

export { SkillsVO };

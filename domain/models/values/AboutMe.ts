import { ValueObject } from "./ValueObject";

interface UAboutMe {
  value: string;
}

class AboutMe extends ValueObject<UAboutMe> {
  private constructor(props: UAboutMe) {
    super(props);
  }

  public static create(info: string): AboutMe {
    console.log(1);
    if (info.length > 350) {
      throw new Error("Превышено количество информации о вас");
    } else {
      return new AboutMe({ value: info });
    }
  }
}

export { AboutMe };

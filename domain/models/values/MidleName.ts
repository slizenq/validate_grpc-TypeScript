import { ValueObject } from "./ValueObject";

interface IMidleName {
    value: string;
}

class MidleName extends ValueObject<IMidleName> {
    private constructor(props: IMidleName) {
        super(props);
    }

    public static create(midleName: string): MidleName {
        const midleNameRegex =
        /^[А-ЯЁ](?:[а-яё]+(?:-[А-ЯЁ][а-яё]+)*)?$/;
        if (!midleName.match(midleNameRegex)) {
            throw new Error('Длина имени должна быть больше 2 символов и меньше 100.');
        } else {
            return new MidleName({ value: midleName });
        }
    }
}

export { MidleName };

import { ValueObject } from "./ValueObject";

interface ILastName {
    value: string;
}

class LastName extends ValueObject<ILastName> {
    private constructor(props: ILastName) {
        super(props);
    }

    public static create(lastName: string): LastName {
        const lastNameRegex =
        /^[А-ЯЁ](?:[а-яё]+(?:-[А-ЯЁ][а-яё]+)*)?$/;
        if (!lastName.match(lastNameRegex) || lastName.length >= 100) {
            throw new Error('Длина имени должна быть больше 2 символов и меньше 100.');
        } else {
            return new LastName({ value: lastName });
        }
    }
}

export { LastName };
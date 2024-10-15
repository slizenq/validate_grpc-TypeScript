import { ValueObject } from "./ValueObject";

interface IFirstName {
    value: string;
}

class FirstName extends ValueObject<IFirstName> {
    private constructor(props: IFirstName) {
        super(props);
    }

    public static create(firstName: string): FirstName {

        const firstNameRegex =
        /^[А-ЯЁ](?:[а-яё]+(?:-[А-ЯЁ][а-яё]+)*)?$/;
        if (!firstName.match(firstNameRegex)) {
            throw new Error('Длина имени должна быть больше 2 символов и меньше 100.');
        } else {
            return new FirstName({ value: firstName });
        }
    }
}

export { FirstName };
import { ValueObject } from "./ValueObject";

interface UPhoneNumber {
    value: string;
}

class PhoneNumber extends ValueObject<UPhoneNumber> {
    private constructor(props: UPhoneNumber) {
        super(props);
    }

    public static create(phone: string): PhoneNumber {
        // Проверка на корректный формат телефонного номера
        if (phone.length <= 0 || phone.length < 18) {
            throw new Error("Некорректный формат телефонного номера");
        } else {
            return new PhoneNumber({ value: phone });
        }
    }
}

export { PhoneNumber };

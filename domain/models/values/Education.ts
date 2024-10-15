import { ValueObject } from "./ValueObject";


interface IEducation {
    value: string
}

class Education extends ValueObject<IEducation> {

    private constructor (props: IEducation) {
        super(props);
    }
    public static create (education: string) : Education {
        
        if (education === undefined || education === null ) {
            throw new Error('ПУСТО ХУЮСТО');
        } 
        else if (education.length < 0) {
            throw new Error('Пустое или слишком длинное значение для учебного заведения');
        }
        
        else {
            return new Education({value : education});
        }
    }
}

export {Education};
// 
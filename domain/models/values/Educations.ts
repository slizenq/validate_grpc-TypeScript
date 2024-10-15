import { ValueObject } from "./ValueObject";


interface UEducations { 
    value: string; 
} 

class Educations extends ValueObject<UEducations> { 
    private constructor(props: UEducations) { 
        super(props); 
    } 

    public static create(info: string): Educations { 
        if (info === undefined || info === null || info.length <= 1 || info.length > 350) { 
            throw new Error('Недостаточно/превышено количество информации об образовании'); 
        } else { 
            return new Educations({ value: info }); 
        } 
    } 
}
 
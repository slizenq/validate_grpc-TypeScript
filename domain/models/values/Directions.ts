import { ValueObject } from "./ValueObject";

interface IDirections {
    value: []
}

class Directions extends ValueObject<IDirections> {

    private constructor (props: IDirections) {
        super(props);
    }
    public static create (directions: []) : Directions {
        
        if (directions === undefined || directions === null || directions.length <= 0) {
            throw new Error('Массив пустой или не существует');
        } else {
            return new Directions({value : directions});
        }
    }
}

export {Directions};
//


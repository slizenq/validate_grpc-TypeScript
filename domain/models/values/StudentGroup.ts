import { ValueObject } from "./ValueObject";


interface IStudentGroup {
    value: string
}

class StudentGroup extends ValueObject<IStudentGroup> {

    private constructor (props: IStudentGroup) {
        super(props);
    }

    public static create (studentGroup: string) : StudentGroup {
        
        if (studentGroup === undefined || studentGroup === null || studentGroup.length > 15) {
            throw new Error('Пустое или слишком длинное название группы'); 
        } else {
        return new StudentGroup({value : studentGroup});
        }
    }
}
export {StudentGroup};
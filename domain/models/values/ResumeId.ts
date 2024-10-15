import { ValueObject } from "./ValueObject";


interface IResumeId {
    value: number
}

class ResumeId extends ValueObject<IResumeId> {

    private constructor (props: IResumeId) {
        super(props);
    }

    public static create (resumeId: number) : ResumeId {
        
        if (resumeId === undefined || resumeId === null || typeof resumeId !== 'number' || resumeId < 0) {
            throw new Error('ID неверный');
        } else {
            return new ResumeId({value : resumeId});
        }
    }
}
export {ResumeId};
//
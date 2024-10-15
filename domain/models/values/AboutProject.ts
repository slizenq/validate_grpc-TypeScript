import { ValueObject } from "./ValueObject";


interface IAboutProject {
    value: string
}

class AboutProject extends ValueObject<IAboutProject> {

    private constructor (props: IAboutProject) {
        super(props);
    }

    public static create (aboutProject: string) : AboutProject {
        
        if (aboutProject.length > 400) {
            throw new Error('Пустое или слишком длинное описание');
        } else {
        return new AboutProject({value : aboutProject});
        }
    }
}
export {AboutProject};
//
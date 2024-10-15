interface Resume {
    props: any;
    firstName: string;
    lastName: string;
    middleName: string;
    phone: string;
    direction: string;
    photo: Uint8Array[];
    skills: string[];
    studentGroup: string;
    aboutProject: string;
    aboutMe: string;
    portfolio: string;
}

const globalState = {
    resume: null as Resume | null,
};

export function setResume(resume: Resume) {
    globalState.resume = resume;
}

// export function setResume(resume: Resume) {
//     return globalState.resume
// }

export function getResume() {
    return globalState.resume;
}

import { getResume } from "~/assets/store/globalState";
import { ResumeSended, Skill, Direction } from "./resume";
import { CloudEvent, HTTP } from "cloudevents";
import axios from "axios";
import { responsiveArray } from "ant-design-vue/es/_util/responsiveObserve";
import { Base64 } from "js-base64";

export async function sendCloudEventWithProtobuf() {
  var resume = getResume();

  if (!resume) {
    console.error("Резюме не найдено в глобальном состоянии");
    return;
  }

  const resumeSended = ResumeSended.create({
    resumeId: "",
    firstName: resume.props.firstName.props.value,
    middleName: resume.props.middleName.props.value,
    lastName: resume.props.lastName.props.value,
    phoneNumber: resume.props.phone.props.value.replace(/[ +\-()]/g, ""),
    education: resume.props.education.props.value,
    aboutMe: resume.props.aboutMe.props.value,
    skills: resume.props.skills.props.value.map((skill: any) =>
      Skill.create({ skill })
    ),
    photo: new Uint8Array(resume.props.photo.props.value),
    directions: [
      Direction.create({ direction: resume.props.direction.props.value }),
    ],
    aboutProjects: resume.props.aboutProject.props.value,
    portfolio: resume.props.portfolio.props.value,
    // studentGroup: resume.props.studentGroup.props.value,
    createdAt: new Date(),
  });

  // console.log(resumeSended);
  console.log(resumeSended.photo);

  const resumeSendedBytes = ResumeSended.encode(resumeSended).finish();
  const base64Data = Base64.fromUint8Array(new Uint8Array(resumeSendedBytes));

  const cloudEvent = new CloudEvent({
    id: "1234",
    time: new Date().toISOString(),
    type: "resume.send",
    source: "https://myapp.com",
    specversion: "1.0",
    datacontenttype: "application/protobuf",
    data: base64Data,
    data_base64: base64Data,
  });

  // http://10.10.4.22:8080
  let response;
  try {
    response = await axios.post("http://10.10.4.22:8080/", cloudEvent, {
      headers: { "Content-Type": "application/cloudevents+json" },
    });
    return response.status;
  } catch (error) {
    response = error;
    console.error("Ошибка при отправке CloudEvent:", error);
    return response;
  }
}

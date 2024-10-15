<script lang="ts">
import { sendCloudEventWithProtobuf } from "~/assets/proto/client";
import { defineComponent, reactive, ref } from "vue";
import { setResume } from "~/assets/store/globalState";
import { Image, type FormInstance } from "ant-design-vue";
import { genImageMaskStyle } from "ant-design-vue/es/image/style";
import { AboutMe } from "~/domain/models/values/AboutMe";
import { FirstName } from "~/domain/models/values/firstName";
import { LastName } from "~/domain/models/values/lastName";
import { MidleName } from "~/domain/models/values/MidleName";
import { AboutProject } from "~/domain/models/values/AboutProject";
import { PhoneNumber } from "~/domain/models/values/phoneNumber";
import { Education } from "~/domain/models/values/Education";
import { Direction } from "~/domain/models/values/Direction";
import { Portfolio } from "~/domain/models/values/Portfolio";
import { Photo } from "~/domain/models/values/Photo";
import { SkillsVO } from "~/domain/models/values/SkillsVO";
import { Resume } from "~/domain/models/Resume";
import * as Inter from "~/domain/models/Resume";
import Skills from "./Skills.vue";
import ButtonSh from "./ButtonSh.vue";
import EducationalList from "./Educational.vue";
import DirectionsList from "./Directions.vue";
import PopUps from "./UI/PopUps.vue";
import type { RuleObject, Rule } from "ant-design-vue/es/form";

var accArray: any[] = [];

interface FormState {
  last: string;
  first: string;
  middle: string;
  phone: string;
  education: string;
  directions: string;
  aboutMe: string;
  aboutProj: string;
  port: string;
  skills: string[];
  portfolio: string;
}

var SkillsArray: any[] = [];
var PhotoBytesArray: any[] = [];

export default defineComponent({
  components: {
    Skills,
    ButtonSh,
    EducationalList,
    DirectionsList,
    PopUps,
  },

  data() {
    return {
      textButton: "Отправить форму",
      lastNameValue: "",
      firstNameValue: "",
      middleNameValue: "",
      phoneNumbeValue: "",
      aboutMeValue: "",
      aboutProjectValue: "",
      educationalValue: "",
      directionsValue: "",
      educationalLabel: "",
      directionsLabel: "",
      photosURL: [],
      portfolioValue: "",
      skills: [],
      focus: {
        portfolio: false,
        aboutMe: false,
        aboutProject: false,
      },
      statusPortfolio: true,
      startForm: true,
      errorModalVisible: false,
      accessModalVisible: false,
      Classes: {
        LASTNAME: LastName,
        FIRSTNAME: FirstName,
        MIDDLENAME: MidleName,
        PHONE: PhoneNumber,
        ABOUTME: AboutMe,
        ABOUTPROJ: AboutProject,
        EDUCATION: Education,
        DIRECTION: Direction,
        PORTFOLIO: Portfolio,
        PHOTO: Photo,
        SKILLS: SkillsVO,
        RESUME: Resume,
      },
      formState: reactive<FormState>({
        last: "",
        first: "",
        middle: "",
        phone: "",
        education: "",
        directions: "",
        aboutMe: "",
        aboutProj: "",
        port: "",
        portfolio: "",
        skills: [] as string[],
      }),
      formRef: ref<FormInstance>(),
      rules: {
        last: [
          {
            required: true,
            validator: this.checkLastName,
            trigger: "change",
          },
        ],
        first: [
          {
            required: true,
            validator: this.checkFirstName,
            trigger: "change",
          },
        ],
        middle: [
          {
            required: true,
            validator: this.checkMiddleName,
            trigger: "change",
          },
        ],
        phone: [
          {
            required: true,
            validator: this.checkPhone,
            trigger: "change",
          },
        ],
        education: [
          {
            required: true,
            validator: this.checkEducation,
            trigger: "change",
          },
        ],
        directions: [
          {
            required: true,
            validator: this.checkDirections,
            trigger: "change",
          },
        ],
        port: [
          {
            required: false,
            validator: this.checkPort,
            trigger: "change",
          },
        ],
      } as { [key: string]: RuleObject | RuleObject[] },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
  },
  methods: {
    updatePhotosURL(newLabel: []) {
      this.photosURL = newLabel;
    },
    updateEducationalLabel(newLabel: string) {
      this.formState.education = newLabel;
    },
    updateDirectionsLabel(newLabel: string) {
      this.formState.directions = newLabel;
    },
    updateSkills(newSkills: string[]) {
      this.formState.skills = newSkills;
    },
    checkInput(className: string, value: any) {
      try {
        let valueValidated = (this.Classes as any)[className].create(value);
        return valueValidated;
      } catch (error) {
        return "";
      }
    },

    async handleSubmit() {
      // await sendCloudEventWithProtobuf()
      let hasFalse = false;
      for (let key of accArray) {
        if (key == false) {
          hasFalse = true;
        }
      }
    },
    closeModal() {
      if (this.errorModalVisible) {
        this.errorModalVisible = false;
      }
      if (this.accessModalVisible) {
        this.accessModalVisible = false;
      }
    },
    checkLastName(rule: RuleObject, value: string) {
      if (value.length <= 1) {
        return Promise.reject("Обязательное поле");
      } else {
        if (this.checkInput("LASTNAME", this.formState.last) === "") {
          return Promise.reject("Некорректная фамилия");
        } else {
          return Promise.resolve();
        }
      }
    },
    checkFirstName(rule: RuleObject, value: string) {
      if (value.length <= 1) {
        return Promise.reject("Обязательное поле");
      } else {
        if (this.checkInput("FIRSTNAME", this.formState.first) === "") {
          return Promise.reject("Некорректное имя");
        } else {
          return Promise.resolve();
        }
      }
    },
    checkMiddleName(rule: RuleObject, value: string) {
      if (value.length <= 1) {
        return Promise.reject("Обязательное поле");
      } else {
        if (this.checkInput("MIDDLENAME", value) === "") {
          return Promise.reject("Некорректное отчество");
        } else {
          return Promise.resolve();
        }
      }
    },
    checkPhone(rule: RuleObject, value: string) {
      if (this.checkInput("PHONE", value) === "") {
        return Promise.reject("Введите номер полностью");
      } else {
        return Promise.resolve();
      }
    },
    checkEducation(rule: RuleObject, value: string) {
      if (!value) {
        return Promise.reject("Обязательное поле");
      }
      if (this.checkInput("EDUCATION", value) === "") {
        return Promise.reject("Обязательное поле");
      } else {
        return Promise.resolve();
      }
    },
    checkDirections(rule: RuleObject, value: string) {
      if (!value) {
        return Promise.reject("Обязательное поле");
      }
      if (this.checkInput("DIRECTION", value) === "") {
        return Promise.reject("Обязательное поле");
      } else {
        return Promise.resolve();
      }
    },
    checkPort(rule: RuleObject, value: string) {
      if (!value) {
        this.statusPortfolio = true;
        return Promise.resolve();
      } else {
        if (this.checkInput("PORTFOLIO", value) === "") {
          this.statusPortfolio = false;
          return Promise.reject("Некорректная ссылка");
        } else {
          this.statusPortfolio = true;
          return Promise.resolve();
        }
      }
    },
    async handleFinish(values: FormState) {
      // console.log(values, this.formState);
      // console.log(this.formState.skills)
      SkillsArray = [];
      PhotoBytesArray = [];
      for (let i of this.formState.skills) {
        SkillsArray.push(i);
      }
      for (let i of this.photosURL) {
        PhotoBytesArray.push(i);
      }
      //   console.log(this.checkInput("SKILLS", SkillsArray));

      let objectResume: Inter.ResumeProps = {
        firstName: this.checkInput("FIRSTNAME", this.formState.first),
        lastName: this.checkInput("LASTNAME", this.formState.last),
        middleName: this.checkInput("MIDDLENAME", this.formState.middle),
        phone: this.checkInput("PHONE", this.formState.phone),
        direction: this.checkInput("DIRECTION", this.formState.directions),
        photo: this.checkInput("PHOTO", PhotoBytesArray),
        skills: this.checkInput("SKILLS", SkillsArray),
        education: this.checkInput("EDUCATION", this.formState.education),
        aboutProject: this.checkInput("ABOUTPROJ", this.formState.aboutProj),
        aboutMe: this.checkInput("ABOUTME", this.formState.aboutMe),
        portfolio: this.checkInput("PORTFOLIO", this.formState.port),
      };
      // let res = this.Classes["RESUME"].create(objectResume);
      // setResume(res);
      // console.log(res);
      try {
        let res = Resume.create(objectResume);
        setResume(res);
        console.log(res);
        console.log("Cloud event sent successfully");
      } catch (error) {
        console.error("Error sending cloud event:", error);
      }
      const responce = await sendCloudEventWithProtobuf();
      console.log(responce);
      if (responce == 200) {
        this.accessModalVisible = true;
        this.errorModalVisible = false;
      } else {
        this.accessModalVisible = false;
        this.errorModalVisible = true;
      }
    },

    async convertPhotosToBytes(
      photosURL: string[]
    ): Promise<Uint8Array | string> {
      // Реализуйте логику для загрузки и преобразования фото в нужный формат
      // Возвращайте Uint8Array или строку в зависимости от вашей логики
      return "";
    },
    handleFinishFailed(errors: any) {
      // this.errorModalVisible = true;
      // this.accessModalVisible = false;
      // console.log(errors);
    },
    handleValidate(...args: any[]) {
      for (let key of args) {
        if (key == false) {
          accArray.unshift(false);
        }
      }
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="resume_label">
      <p>Резюме</p>
    </div>
    <div class="form__main">
      <a-form
        class="aform"
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :rules="rules"
        v-bind="layout"
        @finish="handleFinish"
        @validate="handleValidate"
        @finishFailed="handleFinishFailed"
        @submit="handleSubmit"
      >
        <div class="right_part" id="my_target_block">
          <h3>Для связи</h3>

          <a-form-item name="last">
            <a-input
              v-model:value="formState.last"
              placeholder="Фамилия"
              class="input"
            />
          </a-form-item>

          <a-form-item name="first">
            <a-input
              v-model:value="formState.first"
              placeholder="Имя"
              class="input"
            />
          </a-form-item>

          <a-form-item name="middle">
            <a-input
              v-model:value="formState.middle"
              placeholder="Отчество"
              class="input"
            />
          </a-form-item>

          <a-form-item name="phone">
            <a-input
              v-maska="'+7 (###) ###-##-##'"
              v-model:value="formState.phone"
              placeholder="+7"
              class="input"
            />
          </a-form-item>
          <a-form-item name="education">
            <EducationalList
              v-model:value="formState.education"
              :status="formState.education ? 'default' : 'error'"
              @update:eduLabel="updateEducationalLabel"
            />
          </a-form-item>
          <h3>Расскажи о себе</h3>
          <a-form-item>
            <a-textarea
              @focus="focus.aboutMe = true"
              @blur="focus.aboutMe = false"
              v-model:value="formState.aboutMe"
              placeholder="Возможно, у тебя есть хобби, напиши о них или о своих личных
качествах"
              :auto-size="{ minRows: 6, maxRows: 6 }"
              :maxlength="350"
              class="input_spec"
            />
          </a-form-item>

          <p v-if="focus.aboutMe == true" class="portf">Необязательное поле</p>
          <p
            v-if="focus.aboutMe != true"
            style="visibility: hidden"
            class="portf"
          >
            Необязательное поле
          </p>

          <h3>Ссылка на портфолио</h3>
          <a-form-item name="port">
            <a-input
              @focus="focus.portfolio = true"
              @blur="focus.portfolio = false"
              placeholder="https://"
              class="input http"
              v-model:value="formState.port"
            />
          </a-form-item>

          <p
            v-if="statusPortfolio == true && focus.portfolio == true"
            class="portf"
          >
            Необязательное поле
          </p>
          <p v-else style="visibility: hidden" class="portf">
            Необязательное поле
          </p>
        </div>
        <div class="left_part">
          <h3>Добавь свое фото</h3>
          <Photo @update:urlPush="updatePhotosURL" />
          <h3>Твое направление</h3>

          <a-form-item name="directions" class="direc">
            <DirectionsList
              v-model:value="formState.directions"
              :status="formState.directions ? 'default' : 'error'"
              @update:directLabel="updateDirectionsLabel"
            />
          </a-form-item>
          <h3>О проектах</h3>
          <a-form-item>
            <a-textarea
              @focus="focus.aboutProject = true"
              @blur="focus.aboutProject = false"
              v-model:value="formState.aboutProj"
              placeholder="Какие проекты у вас были?
Чем вы занимались?
Как вы планируете свою работу?"
              :auto-size="{ minRows: 6, maxRows: 6 }"
              :maxlength="400"
              class="input_spec"
            />
          </a-form-item>

          <p v-if="focus.aboutProject == true" class="portf">
            Необязательное поле
          </p>
          <p v-else style="visibility: hidden">Необязательное поле</p>
          <h3>Навыки</h3>

          <Skills
            :initialSkills="formState.skills"
            @update:skills="updateSkills"
          />

          <ButtonSh
            @click="handleSubmit"
            href=""
            :textButton="textButton"
            :visible="startForm"
            html-type="submit"
            type="primary"
            :open="false"
          />

          <PopUps
            :show="errorModalVisible || accessModalVisible"
            :errorModalVisible="errorModalVisible"
            :accessModalVisible="accessModalVisible"
            @some-event="closeModal"
          />
        </div>
      </a-form>
    </div>
  </div>
</template>

<style scoped>
.portf {
  animation: text 1s;
}
@keyframes text {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.font_weight {
  font-weight: 600;
}
.dialog_title {
  font-size: 3em;
  color: #002bcf;
}
.dialog_description {
  font-size: 2em;
  color: #f54925;
}
.right_part .input[data-v-a46d7196] {
  margin: 10px 0 4px 0;
}

.select_direct_right[data-v-bac71013] {
  margin-bottom: 100px;
}

.direc {
  margin-bottom: 4px;
}

.left_part {
  width: 50%;
}

.form__main {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

* {
  color: #000000;
  margin: 0;
  padding: 0;
  font-family: Ruda;
}

.aform {
  width: 100%;
  padding-top: 3px;
  display: flex;
  justify-content: space-around;
  gap: 50px;
}

h3 {
  margin-bottom: 24px;
  margin-top: 48px;
  font-size: 24px;
  font-weight: 600;
}

.right_part {
  display: grid;
  width: 50%;
}

.input_spec {
  font-family: Ruda;
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #4e66ff;
  max-width: 530px;
  border-radius: 10px;
  font-size: 14px;
  color: #181818;
}

.input {
  border: 1px solid #4e66ff;
  border-radius: 10px;
  padding-left: 16px;
  width: 310px;
  height: 43px;
  font-size: 14px;
  padding-right: 6px;
  /* color: #181818; */
}

.right_part .input {
  margin-bottom: 12px;
}

.right_part .http {
  margin-bottom: 4px;
}

.right_part p {
  color: #1044ff;
  font-size: 14px;
}

.left_part p {
  color: #1044ff;
  font-size: 14px;
}

.container {
  width: 85%;
  margin: 0 auto;
  margin-top: 126px;
}

@media (max-width: 822px) {
  .container {
    width: 98%;
  }
  form {
    flex-wrap: wrap;
  }
  .left_part,
  .right_part {
    width: 85%;
  }
}

.resume_label {
  border: 2px solid #bfcaf3;
  border-radius: 36px;
  width: 200px;
}

.resume_label p {
  padding: 8px;
  text-align: center;
  justify-content: center;
  color: #002bcf;
  font-size: 24px;
}
</style>

// package: resume
// file: resume.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Skill extends jspb.Message {
  getSkill(): string;
  setSkill(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    skill: string,
  }
}

export class Direction extends jspb.Message {
  getDirection(): string;
  setDirection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Direction.AsObject;
  static toObject(includeInstance: boolean, msg: Direction): Direction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Direction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Direction;
  static deserializeBinaryFromReader(message: Direction, reader: jspb.BinaryReader): Direction;
}

export namespace Direction {
  export type AsObject = {
    direction: string,
  }
}

export class ResumeSended extends jspb.Message {
  getResumeid(): string;
  setResumeid(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getMiddlename(): string;
  setMiddlename(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  getEducation(): string;
  setEducation(value: string): void;

  getAboutme(): string;
  setAboutme(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  getPhoto(): Uint8Array | string;
  getPhoto_asU8(): Uint8Array;
  getPhoto_asB64(): string;
  setPhoto(value: Uint8Array | string): void;

  clearDirectionsList(): void;
  getDirectionsList(): Array<Direction>;
  setDirectionsList(value: Array<Direction>): void;
  addDirections(value?: Direction, index?: number): Direction;

  getAboutprojects(): string;
  setAboutprojects(value: string): void;

  getPortfolio(): string;
  setPortfolio(value: string): void;

  getStudentgroup(): string;
  setStudentgroup(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeSended.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeSended): ResumeSended.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeSended, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeSended;
  static deserializeBinaryFromReader(message: ResumeSended, reader: jspb.BinaryReader): ResumeSended;
}

export namespace ResumeSended {
  export type AsObject = {
    resumeid: string,
    firstname: string,
    middlename: string,
    lastname: string,
    phonenumber: string,
    education: string,
    aboutme: string,
    skillsList: Array<Skill.AsObject>,
    photo: Uint8Array | string,
    directionsList: Array<Direction.AsObject>,
    aboutprojects: string,
    portfolio: string,
    studentgroup: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}


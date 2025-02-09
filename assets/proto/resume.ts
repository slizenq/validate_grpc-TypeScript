// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v5.27.1
// source: resume.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "resume";

export interface Skill {
    skill: string;
}

export interface Direction {
    direction: string;
}

export interface ResumeSended {
    resumeId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    education: string;
    aboutMe: string;
    skills: Skill[];
    photo: Uint8Array;
    directions: Direction[];
    aboutProjects: string;
    portfolio: string;
    studentGroup: string;
    createdAt: Date | undefined;
}

function createBaseSkill(): Skill {
    return { skill: "" };
}

export const Skill = {
    encode(
        message: Skill,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.skill !== "") {
            writer.uint32(10).string(message.skill);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Skill {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSkill();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.skill = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Skill {
        return {
            skill: isSet(object.skill) ? globalThis.String(object.skill) : "",
        };
    },

    toJSON(message: Skill): unknown {
        const obj: any = {};
        if (message.skill !== "") {
            obj.skill = message.skill;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Skill>, I>>(base?: I): Skill {
        return Skill.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Skill>, I>>(object: I): Skill {
        const message = createBaseSkill();
        message.skill = object.skill ?? "";
        return message;
    },
};

function createBaseDirection(): Direction {
    return { direction: "" };
}

export const Direction = {
    encode(
        message: Direction,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.direction !== "") {
            writer.uint32(10).string(message.direction);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Direction {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDirection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.direction = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Direction {
        return {
            direction: isSet(object.direction)
                ? globalThis.String(object.direction)
                : "",
        };
    },

    toJSON(message: Direction): unknown {
        const obj: any = {};
        if (message.direction !== "") {
            obj.direction = message.direction;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Direction>, I>>(base?: I): Direction {
        return Direction.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<Direction>, I>>(
        object: I
    ): Direction {
        const message = createBaseDirection();
        message.direction = object.direction ?? "";
        return message;
    },
};

function createBaseResumeSended(): ResumeSended {
    return {
        resumeId: "",
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        education: "",
        aboutMe: "",
        skills: [],
        photo: new Uint8Array(0),
        directions: [],
        aboutProjects: "",
        portfolio: "",
        studentGroup: "",
        createdAt: undefined,
    };
}

export const ResumeSended = {
    encode(
        message: ResumeSended,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resumeId !== "") {
            writer.uint32(10).string(message.resumeId);
        }
        if (message.firstName !== "") {
            writer.uint32(18).string(message.firstName);
        }
        if (message.middleName !== "") {
            writer.uint32(26).string(message.middleName);
        }
        if (message.lastName !== "") {
            writer.uint32(34).string(message.lastName);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(42).string(message.phoneNumber);
        }
        if (message.education !== "") {
            writer.uint32(50).string(message.education);
        }
        if (message.aboutMe !== "") {
            writer.uint32(58).string(message.aboutMe);
        }
        for (const v of message.skills) {
            Skill.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.photo.length !== 0) {
            writer.uint32(74).bytes(message.photo);
        }
        for (const v of message.directions) {
            Direction.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        if (message.aboutProjects !== "") {
            writer.uint32(90).string(message.aboutProjects);
        }
        if (message.portfolio !== "") {
            writer.uint32(98).string(message.portfolio);
        }
        if (message.studentGroup !== "") {
            writer.uint32(106).string(message.studentGroup);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(114).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResumeSended {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResumeSended();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.resumeId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.firstName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.middleName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.lastName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.phoneNumber = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.education = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.aboutMe = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.skills.push(Skill.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.photo = reader.bytes();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.directions.push(
                        Direction.decode(reader, reader.uint32())
                    );
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.aboutProjects = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }

                    message.portfolio = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }

                    message.studentGroup = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }

                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ResumeSended {
        return {
            resumeId: isSet(object.resumeId)
                ? globalThis.String(object.resumeId)
                : "",
            firstName: isSet(object.firstName)
                ? globalThis.String(object.firstName)
                : "",
            middleName: isSet(object.middleName)
                ? globalThis.String(object.middleName)
                : "",
            lastName: isSet(object.lastName)
                ? globalThis.String(object.lastName)
                : "",
            phoneNumber: isSet(object.phoneNumber)
                ? globalThis.String(object.phoneNumber)
                : "",
            education: isSet(object.education)
                ? globalThis.String(object.education)
                : "",
            aboutMe: isSet(object.aboutMe)
                ? globalThis.String(object.aboutMe)
                : "",
            skills: globalThis.Array.isArray(object?.skills)
                ? object.skills.map((e: any) => Skill.fromJSON(e))
                : [],
            photo: isSet(object.photo)
                ? bytesFromBase64(object.photo)
                : new Uint8Array(0),
            directions: globalThis.Array.isArray(object?.directions)
                ? object.directions.map((e: any) => Direction.fromJSON(e))
                : [],
            aboutProjects: isSet(object.aboutProjects)
                ? globalThis.String(object.aboutProjects)
                : "",
            portfolio: isSet(object.portfolio)
                ? globalThis.String(object.portfolio)
                : "",
            studentGroup: isSet(object.studentGroup)
                ? globalThis.String(object.studentGroup)
                : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
        };
    },

    toJSON(message: ResumeSended): unknown {
        const obj: any = {};
        if (message.resumeId !== "") {
            obj.resumeId = message.resumeId;
        }
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.middleName !== "") {
            obj.middleName = message.middleName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.phoneNumber !== "") {
            obj.phoneNumber = message.phoneNumber;
        }
        if (message.education !== "") {
            obj.education = message.education;
        }
        if (message.aboutMe !== "") {
            obj.aboutMe = message.aboutMe;
        }
        if (message.skills?.length) {
            obj.skills = message.skills.map((e) => Skill.toJSON(e));
        }
        if (message.photo.length !== 0) {
            obj.photo = base64FromBytes(message.photo);
        }
        if (message.directions?.length) {
            obj.directions = message.directions.map((e) => Direction.toJSON(e));
        }
        if (message.aboutProjects !== "") {
            obj.aboutProjects = message.aboutProjects;
        }
        if (message.portfolio !== "") {
            obj.portfolio = message.portfolio;
        }
        if (message.studentGroup !== "") {
            obj.studentGroup = message.studentGroup;
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toISOString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<ResumeSended>, I>>(
        base?: I
    ): ResumeSended {
        return ResumeSended.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<ResumeSended>, I>>(
        object: I
    ): ResumeSended {
        const message = createBaseResumeSended();
        message.resumeId = object.resumeId ?? "";
        message.firstName = object.firstName ?? "";
        message.middleName = object.middleName ?? "";
        message.lastName = object.lastName ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        message.education = object.education ?? "";
        message.aboutMe = object.aboutMe ?? "";
        message.skills = object.skills?.map((e) => Skill.fromPartial(e)) || [];
        message.photo = object.photo ?? new Uint8Array(0);
        message.directions =
            object.directions?.map((e) => Direction.fromPartial(e)) || [];
        message.aboutProjects = object.aboutProjects ?? "";
        message.portfolio = object.portfolio ?? "";
        message.studentGroup = object.studentGroup ?? "";
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};

function bytesFromBase64(b64: string): Uint8Array {
    if ((globalThis as any).Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if ((globalThis as any).Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
          [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
      };

function toTimestamp(date: Date): Timestamp {
    const seconds = Math.trunc(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = (t.seconds || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof globalThis.Date) {
        return o;
    } else if (typeof o === "string") {
        return new globalThis.Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}

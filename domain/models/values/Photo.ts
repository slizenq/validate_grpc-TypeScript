import { ValueObject } from "./ValueObject";

interface IPhoto {
  value: [];
}

class Photo extends ValueObject<IPhoto> {
  private constructor(props: IPhoto) {
    super(props);
  }
  public static create(photo: []): Photo {
    return new Photo({ value: photo });
  }
}
export { Photo };

//

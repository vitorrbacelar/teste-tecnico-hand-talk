type ObjectType = 'cube' | 'cone' | 'dodecahedron';

export class Object3D {
  readonly shape: ObjectType;
  readonly rotation: [number, number, number];
  readonly color: string;

  constructor(
    type: ObjectType,
    rotation: [number, number, number],
    color: string,
  ) {
    this.shape = type;
    this.rotation = rotation;
    this.color = color;
  }
}

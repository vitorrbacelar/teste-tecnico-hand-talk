import { Object3D } from './Object3D';

export class User {
  readonly userID: string;
  readonly objectsConfig: Object3D[];

  constructor(userID: string, objectsConfig: Object3D[]) {
    this.userID = userID;
    this.objectsConfig = objectsConfig;
  }
}

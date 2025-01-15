import { Object3D } from '../entities/Object3D';
import { User } from '../entities/User';

export interface IRealtimeDatabaseService {
  getUserConfig: (userID: string) => Promise<User>;
  setUserConfig: (
    userID: string,
    index: number,
    userConfig: Object3D,
  ) => Promise<void>;
}

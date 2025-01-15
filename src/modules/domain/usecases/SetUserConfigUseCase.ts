import { Object3D } from '../entities/Object3D';
import { User } from '../entities/User';
import { IRealtimeDatabaseService } from '../interfaces/IRealtimeDatabaseService';

export class SetUserConfigUsecase {
  constructor(private RealtimeDatabaseService: IRealtimeDatabaseService) {}

  async execute(userID: string, index: number, userConfig: Object3D) {
    await this.RealtimeDatabaseService.setUserConfig(userID, index, userConfig);
  }
}

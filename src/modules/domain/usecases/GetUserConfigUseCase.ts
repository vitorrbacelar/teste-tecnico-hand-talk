import { User } from '../entities/User';
import { IRealtimeDatabaseService } from '../interfaces/IRealtimeDatabaseService';

export class GetUserConfigUseCase {
  constructor(private RealtimeDatabaseService: IRealtimeDatabaseService) {}

  async execute(userID: string) {
    return await this.RealtimeDatabaseService.getUserConfig(userID);
  }
}

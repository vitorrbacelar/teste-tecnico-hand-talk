import { IFirebaseAuthUserService } from '../interfaces/IFirebaseAuthUserService';

export class LogoutUseCase {
  constructor(private FirebaseAuthUserService: IFirebaseAuthUserService) {}

  async execute(): Promise<void> {
    return await this.FirebaseAuthUserService.logout();
  }
}

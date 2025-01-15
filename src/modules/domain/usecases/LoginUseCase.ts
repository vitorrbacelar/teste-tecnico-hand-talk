import { IFirebaseAuthUserService } from '../interfaces/IFirebaseAuthUserService';
import { UserCredential } from 'firebase/auth';

export class LoginUseCase {
  constructor(private FirebaseAuthUserService: IFirebaseAuthUserService) {}

  async execute(email: string, password: string): Promise<UserCredential> {
    return await this.FirebaseAuthUserService.login(email, password);
  }
}

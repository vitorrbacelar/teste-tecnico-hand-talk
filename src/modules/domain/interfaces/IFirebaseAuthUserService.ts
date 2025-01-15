import { UserCredential } from 'firebase/auth';

export interface IFirebaseAuthUserService {
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

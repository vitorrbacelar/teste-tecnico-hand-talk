import {
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../../configs/firebase/firebaseConfig';
import { IFirebaseAuthUserService } from '../domain/interfaces/IFirebaseAuthUserService';

export class FirebaseAuthUserService implements IFirebaseAuthUserService {
  async login(email: string, password: string): Promise<UserCredential> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential;
    } catch (error) {
      throw new Error('Falha ao realizar a autenticação');
    }
  }

  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error('Falha ao realizar logout');
    }
  }
}

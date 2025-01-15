import { ref, get, set } from 'firebase/database';
import { database } from '../../configs/firebase/firebaseConfig';
import { IRealtimeDatabaseService } from '../domain/interfaces/IRealtimeDatabaseService';
import { User } from '../domain/entities/User';
import { Object3D } from '../domain/entities/Object3D';

export class RealtimeDatabaseService implements IRealtimeDatabaseService {
  async getUserConfig(userID: string): Promise<User> {
    try {
      const refData = ref(database, 'users/' + userID);

      const data = await get(refData);
      return data.val();
    } catch (error) {
      throw new Error('Falha ao recuperar os dados');
    }
  }

  async setUserConfig(userID: string, index: number, userConfig: Object3D) {
    try {
      const refData = ref(
        database,
        'users/' + userID + '/objectsConfig/' + index,
      );

      set(refData, userConfig);
    } catch (error) {
      throw new Error('Falha ao enviar os dados');
    }
  }
}

import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './Login/LoginStack';
import LoggedInStack from './LoggedIn/LoggedInStack';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../configs/firebase/firebaseConfig';

export default function Navigator() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currUser => {
      setUser(currUser);
    });

    return () => unsub();
  }, []);

  return (
    <NavigationContainer>
      {user ? <LoggedInStack /> : <LoginStack />}
    </NavigationContainer>
  );
}

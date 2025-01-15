import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Object3D } from '../modules/domain/entities/Object3D';

type ObjectConfigProviderProps = {
  children: ReactNode;
};

const defaultObjectConfigs: Object3D[] = [
  { shape: 'cube', color: 'red', rotation: [90, 90, 90] },
  { shape: 'cone', color: 'yellow', rotation: [45, 45, 45] },
  { shape: 'dodecahedron', color: 'blue', rotation: [0, 0, 0] },
];

const ObjectConfigContext = createContext<{
  objectConfigs: Object3D[];
  setObjectConfigs: React.Dispatch<React.SetStateAction<Object3D[]>>;
}>({
  objectConfigs: defaultObjectConfigs,
  setObjectConfigs: () => {},
});

export function ObjectConfigProvider({ children }: ObjectConfigProviderProps) {
  const [objectConfigs, setObjectConfigs] = useState(defaultObjectConfigs);

  return (
    <ObjectConfigContext.Provider value={{ objectConfigs, setObjectConfigs }}>
      {children}
    </ObjectConfigContext.Provider>
  );
}

export const useObjectConfig = () => useContext(ObjectConfigContext);

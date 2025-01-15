import React, { createContext, ReactNode, useContext, useState } from 'react';

type ObjectConfigProviderProps = {
  children: ReactNode;
};

type ObjectConfig = {
  shape: 'cube' | 'cone' | 'dodecahedron';
  color: string;
  rotation: number;
};

const defaultObjectConfigs: ObjectConfig[] = [
  { shape: 'cube', color: 'red', rotation: 90 },
  { shape: 'cone', color: 'yellow', rotation: 45 },
  { shape: 'dodecahedron', color: 'blue', rotation: 0 },
];

const ObjectConfigContext = createContext<{
  objectConfigs: ObjectConfig[];
  setObjectConfigs: React.Dispatch<React.SetStateAction<ObjectConfig[]>>;
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

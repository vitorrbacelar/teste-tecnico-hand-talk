import React from 'react';
import Cube from '../components/Cube/Cube';
import Cone from '../components/Cone/Cone';
import Dodecahedron from '../components/Dodecahedron/Dodecahedron';
import { Object3D } from '../modules/domain/entities/Object3D';

export class Object3DFactory {
  static create(object: Object3D) {
    const { shape, rotation, color } = object;

    switch (shape) {
      case 'cube':
        return <Cube rotation={rotation} color={color} />;
      case 'cone':
        return <Cone rotation={rotation} color={color} />;
      case 'dodecahedron':
        return <Dodecahedron rotation={rotation} color={color} />;
      default:
        throw new Error(`Erro ao criar o objeto ${shape}}`);
    }
  }
}

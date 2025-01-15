import React from 'react';
import Cube from '../components/Cube/Cube';
import Cone from '../components/Cone/Cone';
import Dodecahedron from '../components/Dodecahedron/Dodecahedron';
import { Object3D } from '../modules/domain/entities/Object3D';
import { positionByIndex } from '../functions/positionByIndex';

export class Object3DFactory {
  static create(object: Object3D, index: number) {
    const { shape, rotation, color } = object;

    switch (shape) {
      case 'cube':
        return (
          <Cube
            rotation={rotation}
            color={color}
            position={positionByIndex(index)}
          />
        );
      case 'cone':
        return (
          <Cone
            rotation={rotation}
            color={color}
            position={positionByIndex(index)}
          />
        );
      case 'dodecahedron':
        return (
          <Dodecahedron
            rotation={rotation}
            color={color}
            position={positionByIndex(index)}
          />
        );
      default:
        throw new Error(`Erro ao criar o objeto ${shape}}`);
    }
  }
}

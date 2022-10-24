/* eslint-disable no-magic-numbers */
import React, { Suspense } from 'react';

import propTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import '../style/Modal.scss';

function Modal({ closeModal, title, planetComponent}) {
  const Planet = planetComponent;
  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        <button type="button" onClick={ () => closeModal(false) }> X </button>
        <div>
          {`${title} em 3D`}
        </div>
        <div className="modelContainer">
          <Canvas className="Canvas">
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={5} />
            <ambientLight intensity={0.4}/>
            <pointLight position={ [-5, 15, 1] } intensity={2} />
            <Suspense fallback={ null }>
              <Planet />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React, { useState } from 'react';
import Modal from './Modal';

function Button3D({ planetName, planet3D }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button type="button" onClick={ () => { setOpenModal(true); } }>Ver 3D</button>
      {openModal && <Modal closeModal={ setOpenModal } title={ planetName } planetComponent={ planet3D } />}
    </>
  );
}

export default Button3D;

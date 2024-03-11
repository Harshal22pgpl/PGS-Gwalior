
'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalCard from '@/components/ModalHome/ModalCard';
import { isNil } from 'lodash';

const ModalHome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(()=>{
     const routeCount =localStorage.getItem('routeCount')
     const isFirstRender = JSON.parse(localStorage.getItem("isFirstRender"));
     if(isNil(routeCount) && isFirstRender){
        setModalIsOpen(true)
        localStorage.setItem('isFirstRender', false)
        localStorage.setItem("routeCount", 1);
     }
     if(routeCount>=5){
        setModalIsOpen(true)
        localStorage.clear()
        localStorage.setItem('isFirstRender', false)
        localStorage.setItem("routeCount", 1);
     }
    },[])
    const handleModalClose = () => {
        setModalIsOpen(false);
    };



  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      contentLabel="Example Modal"
    >
      <div className="w-full h-full ">
        <button
          onClick={handleModalClose}
          className="fixed font-bold text-2xl text-red-600 w-12 h-12 z-30  right-14 top-14 duration-300 hover:transform hover:scale-x-125 hover:scale-y-125 bg-transparent"
        >
          <span className="sr-only">Close Modal</span>
          &#10005;
        </button>
        <ModalCard />
      </div>
    </Modal>
  );
};

export default ModalHome;

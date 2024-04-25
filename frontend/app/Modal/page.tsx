'use client'
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

export default function Component() {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal style={{}} size={'md'} show={openModal} onClose={() => setOpenModal(false)}>
                <div style={{ backgroundColor: '#050505', color: '#F1ECE9', border: '3px solid #AD6F3D' }}>
                    <Modal.Body>
                        <div className="flex flex-col items-center" >
                            <h2 className={"mb-4 text-2xl"}>Cookies</h2>
                            <img src="cookie.png" style={{ width: '200px' }} className={"mb-4"}/>
                            <p className="max-w-sm text-center mb-6" style={{color: '#DBBCA4'}}>
                                Ce site utilise les cookies afin d’améliorer l’expérience utilisateur.
                                Vous pouvez consulter la charte <a className={'underline'} href="#">ici</a>.
                            </p>
                            <div className="flex items-center gap-8">
                                <Button
                                    style={{ backgroundColor: '#80002D', color: '3C2214'}}
                                    className={'rounded-none'}
                                    onClick={() => setOpenModal(false)}>Refuser</Button>
                                <Button
                                    style={{ backgroundColor: '#DBBCA4', color: '#3C2214' }}
                                    className={'rounded-none'}
                                    onClick={() => setOpenModal(false)}>Accepter</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>


        </>
    );
}

import React, {useContext, useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";
import $ from "jquery";

// @ts-ignore
const ModalContext = React.createContext();

export function useModalContext() {
    return useContext(ModalContext);
}

export function ModalProvider({children}:any) {

    const [isOpen, setOpen] = useState(false);
    const [modalChildren, setModalChildren] = useState<any>();

    useEffect(() => {
        if (isOpen) {
            $('#doxx-modal-container').fadeIn('fast');
        } else {
            $('#doxx-modal-container').fadeOut('fast');
            setModalChildren(null);
        }

        window.addEventListener('keydown', (e:any) => {
            console.log(e.key)
            if (e.key === 'Escape') {
                $('#doxx-modal-container').fadeOut('fast');
                setOpen(false);
                setModalChildren(null);
            }
        })

    }, [isOpen])

    const value = {
        setOpen,
        setModalChildren,
    }

    return (
        <ModalContext.Provider value={value}>
            <Container id="doxx-modal-container">
                {modalChildren}
            </Container>
            {children}
        </ModalContext.Provider>
    )
}

const Container = styled.div`
    display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    width:100vw;
    height:100vh;
    z-index: 200;
`

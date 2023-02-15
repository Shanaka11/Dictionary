import { useEffect, useRef, useState } from 'react'
import { Overlay, DialogContainer, DialogTitle, DialogContent } from './Dialog.styled'

interface IDialogProps {
    show: boolean
    onClose: () => void
    children: React.ReactNode
    title: string
}

const Dialog:React.FC<IDialogProps> = ({
    show,
    onClose,
    title,
    children
}) => {

    const modalRef = useRef<HTMLDivElement>(null)

    const closeModal = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if( modalRef.current === event.target){
            onClose()
        }
    }

    if (!show) return null

    return (
        <Overlay 
            onClick={closeModal} 
            ref={modalRef}
        >
            <DialogContainer
                open={show}
            >
                <DialogContent>
                    <DialogTitle>
                        { title }
                    </DialogTitle>
                    { children }
                </DialogContent>
            </DialogContainer>
        </Overlay>
    )
}

export default Dialog
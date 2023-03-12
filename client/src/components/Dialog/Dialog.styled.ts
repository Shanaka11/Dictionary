import styled from "@emotion/styled";
import { measurements } from "../../style";

export const Overlay = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    cursor: 'pointer',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
})

export const DialogContainer = styled.div<{ open?:boolean }>({
    cursor: 'default',
    zIndex: 10,
    backgroundColor: 'white',
    height: 'fit-content',
    padding: measurements.marginBase * 2,
    position: 'absolute',
    top: '-100%',
    transition: 'top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94)',

    '@media only screen and (max-width: 800px)' : {
        width: '90%'
    }
},
({ open }) => {
    if (open) return { top: 0 }
})

export const DialogContent = styled.div({
    width: measurements.lengthLg,
    display: 'flex',
    flexDirection: 'column',

    '@media only screen and (max-width: 800px)' : {
        width: '100%',
        paddingLeft: measurements.marginBase,
        paddingRight: measurements.marginBase
    }
})

export const DialogTitle = styled.h1({
    fontSize: '1.4em',
    margin: measurements.marginBase,
    marginBottom: measurements.marginBase * 4
})
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
    justifyContent: 'center',
    animation : 'fade-in 200ms ease-in-out forwards',

    '@keyframes fade-in' : {
        '0%' : {
          opacity: 0,
        }
      }
})

export const DialogContainer = styled.div<{ open?:boolean }>({
    cursor: 'default',
    zIndex: 10,
    backgroundColor: 'white',
    height: 'fit-content',
    padding: measurements.marginBase * 2,
    position: 'absolute',
    '@media only screen and (max-width: 800px)' : {
        width: '90%'
    }
})

export const DialogContent = styled.div({
    width: measurements.lengthLg,
    display: 'flex',
    flexDirection: 'column',

    'p' : {
        margin: measurements.marginBase
    },

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
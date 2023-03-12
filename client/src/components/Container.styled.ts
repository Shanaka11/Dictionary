import styled from "@emotion/styled";
import { breakpoints, measurements } from "../style";


const Container = styled.div({
    width: measurements.containerMainWidth,
    display: 'grid',

    '@media only screen and (max-width: 800px)' : {
        width: '100%',
        paddingLeft: measurements.marginBase,
        paddingRight: measurements.marginBase
    }
})

export const ContainerBase = styled.div({
    width: '100vw',
    display: "flex",
    justifyContent: 'center'
})

export const ActionContainer = styled.div({
    display: 'flex',
    width: '100%',
    marginBottom: measurements.marginBase * 2
})

export default Container
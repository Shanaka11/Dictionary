import styled from "@emotion/styled";
import { breakpoints, measurements } from "../style";


const Container = styled.div({
    width: measurements.lengthLg,
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
export default Container
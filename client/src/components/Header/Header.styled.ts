import styled from "@emotion/styled";
import { measurements } from "../../style";

export const HeaderBase = styled.div({
    height: 50,
    width: '100vw',
    backgroundColor: 'white',
    display: "grid",
    placeItems: 'center',
    boxShadow: '0px 9px 16px -13px rgba(252,186,3,1)',
    marginBottom: measurements.marginBase * 2
})

export const HeaderContainer = styled.div({
    width: measurements.containerMainWidth,
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',


    '@media only screen and (max-width: 800px)' : {
        width: '100%',
        paddingLeft: measurements.marginBase,
        paddingRight: measurements.marginBase
    }
})

export const HeaderLogoText = styled.div({
    fontWeight: 'bold'
})
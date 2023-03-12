import styled from "@emotion/styled";
import { colors, measurements } from "../style";



const ButtonBase = styled.button<{
    endButton?: boolean,
    btnStyle?: 'filled' | 'letter',
    margin?: boolean
}>({
    padding: measurements.marginBase * 2,
    minWidth: 80,
    border: 'none',
    borderRadius: 5,
    textTransform: 'uppercase',
    cursor: 'pointer',
    backgroundColor: colors.primary,
    color: "white",
    fontWeight: 'bold',
    transition: '400ms ease-in-out',

    '&:hover, &:active' : {
        backgroundColor: colors.primaryLight,
        color: colors.textPrimary
    }
},
({ endButton }) => {
    if (endButton) return { marginLeft:  measurements.marginBase}
},
( { btnStyle } ) => {
    if(btnStyle === 'letter') return { 
        backgroundColor: "white",
        color: colors.primary,

        '&:hover, &:active' : {
            backgroundColor: colors.primaryLight
        }
    }
}, ({ margin }) => {
    if( margin )return {
        marginLeft: measurements.marginBase * 2
    }
})

export default ButtonBase
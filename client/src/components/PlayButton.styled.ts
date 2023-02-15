import styled from "@emotion/styled";
import { colors } from "../style";

const PlayButton = styled.button({
    height: 50,
    width: 50,
    borderRadius: '50%',
    border: `2px solid ${colors.primary}`,
    backgroundColor: colors.background,
    transition: 'background-color 400ms ease-in-out',
    cursor: 'pointer',
    position: 'relative',

    '&:hover': {
        backgroundColor: colors.primary
    },

    'svg': {
        position: 'absolute',
        top: 3, 
        left: 6,
        fill: colors.primary,
        transition: 'fill 400ms ease-in-out',

        '&:hover' : {
            fill: "white"
        }
    }
})

export default PlayButton
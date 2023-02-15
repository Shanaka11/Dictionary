import styled from '@emotion/styled'
import { colors } from '../style'

const Voice = styled.span<{active:boolean}>({
    width: 50,
    height: 50,
    display: "inline-block",
    position: "relative",

    '&::after, &::before' : {
        content: '""',
        boxSizing: "border-box",
        width: 50,
        height: 50,
        borderRadius: "50%",
        border: `2px solid ${colors.primary}`,
        position: "absolute",
        left: 0,
        top: 0,
        // animation: "animloader 2s linear infinite"
    },

    '&::after' : {
        animationDelay: '1s'
    },

    '@keyframes animloader' : {
        '0%' : {
          transform: 'scale(0)',
          opacity: 1,
        },
        '100%' : {
          transform: 'scale(1)',
          opacity: 0.4,
        }
      }
}, ({active}) => {
    if (!active) return {}
    return {
        '&::after, &::before' : {
            animation: "animloader 400ms linear infinite"
        }
    }
})

export default Voice
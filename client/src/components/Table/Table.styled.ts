import styled from '@emotion/styled'
import { colors, measurements } from '../../style'

export const TableContainer = styled.div({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
})

export const Cell = styled.div<{
    action?:boolean
}>({
    position: 'relative',
    width: 'calc(80%/4)',
    height: measurements.cellHeight,
    background: colors.background,
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    textTransform: 'capitalize',

    transition: 'background 300ms ease-in-out',

    '&:hover' : {
        background: colors.primaryLight
    },

    '@media only screen and (max-width: 800px)' : {
        width: 'calc(100%/4)',
    },

    '@media only screen and (max-width: 600px)' : {
        width: 'calc(100%/3)',
    },

    '@media only screen and (max-width: 400px)' : {
        width: 'calc(100%/2)',
    },

    '@media only screen and (max-width: 300px)' : {
        width: 'calc(100%)',
    }

}, ({ action }) => {
    if (action) return {
        display: 'flex',
        justifyContent: 'space-around',
        background: colors.primaryLight,
        '&:hover' : {
            background: colors.primary
        }
    }
},)

export const CellActionButton = styled.button<{red?: boolean}>({
    borderRadius: '50%',
    backgroundColor: colors.toast.success.primary,
    padding: measurements.marginBase,
    border: 'none',
    height: 30,
    width: 30,
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    transform: 'rotateY(180deg)',
    transition: 'transform 0.6s ease-in-out',

    '&:hover' : {
        backgroundColor: colors.toast.success.accent
    }
}, ({ red }) => {
    if(red) return {
        backgroundColor: colors.toast.error.primary,

        '&:hover' : {
            backgroundColor: colors.toast.error.accent
        }
    }
})
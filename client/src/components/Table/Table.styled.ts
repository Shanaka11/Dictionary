import styled from '@emotion/styled'
import { colors, measurements } from '../../style'

export const TableContainer = styled.div({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
})

export const Cell = styled.div({
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
})
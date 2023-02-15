import styled from "@emotion/styled";
import { colors, measurements } from "../style";

const TextField = styled.input<{error?: boolean}>({
    padding: measurements.marginBase * 2,
    width: '100%',
    borderRadius: 5,
    border: '1px solid #e6e6e6',

    '&:focus' : {
        outline: `1px solid ${colors.primary}`
    }
}, ({ error }) => {
    if(error) return { borderColor: 'red'}
})

export default TextField
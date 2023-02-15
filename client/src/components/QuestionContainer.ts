import styled from "@emotion/styled";
import { measurements } from "../style";

const QuestionContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    'p': {
        width: '100%'
    },

    'form': {
        width: '100%',
        marginTop: measurements.marginBase * 2
    }
})

export default QuestionContainer
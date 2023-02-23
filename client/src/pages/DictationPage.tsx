import { useQuery } from 'react-query'
import { PlayIcon } from '../assets/svg'
import { 
    Container, 
    QuestionContainer, 
    Voice, 
    PlayButton, 
    TextField, 
    ButtonContainer, 
    Button, 
    ContainerBase
} from '../components'
import { useSpeech } from '../hooks'
import { wordApi } from '../api'
import { FormEvent, useEffect, useState } from 'react'
import { useToast } from '../components/Toast'

const DictationPage = () => {

    const {
        isLoading,
        error,
        data
    } = useQuery(
        'words',
        wordApi.getWords
    )

    const showToast = useToast();
  

    const [index, setIndex] = useState(0)
    const [inWord, setInWord] = useState("")
    const [wordError, setWordError] = useState(false)

    const setNextIndex = () => {
        if(data){
            const wordSetLength = data?.data.length
            if(index + 1 === wordSetLength) return setIndex(0)
            return setIndex( prevIndex => prevIndex + 1)
        }
    }

    const { speak, isSpeaking } = useSpeech({
        rate: 0.8,
        pitch: 1,
        volume: 1
    })

    useEffect(() => {
        if(data){
            speak(data.data[index].word)
        }
    }, [index])
  
    const handleOnClick = () => {
        if(data && data.data.length > 0){
            speak(data?.data[index].word)
        }
    }

    const handleOnFormSubmit = (event:FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        if(data?.data[index].word.toLowerCase() !== inWord.toLowerCase()){
            setWordError(true)
            showToast({
                message: "Incorrect spellings",
                type: 'error'
            })
        }else{
            setInWord("")
            setNextIndex()
            setWordError(false)
        }
    }

    return (
        <ContainerBase>
            <Container>
                <div>
                    <h1>Write from Dictation</h1>
                    <p>The task is to write the words you hear in the given space. Make sure to accurately transcribe the dictation.</p>
                </div>
                <QuestionContainer>
                    {data && data?.data.length > 0 && <p>Word#: {index + 1} / {data.data.length}</p>}
                    {
                        (isSpeaking || isLoading ) ?
                        <Voice active={isSpeaking} />
                        :
                        <PlayButton
                        onClick={handleOnClick}
                        disabled={isSpeaking}
                        >
                        <PlayIcon />
                        </PlayButton>
                    }
                    <form onSubmit={handleOnFormSubmit}>
                        <TextField
                            name='word'
                            type="text"
                            autoComplete='off'
                            placeholder='Type here ...'
                            disabled={isLoading}
                            value={inWord}
                            onChange={(event) => setInWord(event.target.value)}
                            error={wordError}
                        />
                        <ButtonContainer>
                        <Button
                            type='submit'
                            disabled={isLoading}
                        > 
                            Submit 
                        </Button>
                        <Button
                            type='button'
                            disabled={isLoading}
                            onClick={setNextIndex}
                        > 
                            next 
                        </Button>
                        </ButtonContainer>
                    </form>
                </QuestionContainer>
            </Container>
        </ContainerBase>
    )
}

export default DictationPage
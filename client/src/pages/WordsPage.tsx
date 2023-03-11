import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { wordApi } from "../api"
import { Button, Container, ContainerBase } from "../components"
import { ActionContainer } from "../components/Container.styled"
import { Table } from "../components/Table"
import { useToast } from "../components/Toast"
import { useWord } from "../word"

type Props = {}

const WordsPage = (props: Props) => {

    // const [ addWord, setAddWord ] = useState(false)

    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery(
        'words',
        wordApi.getWords
    )

    const showToast = useToast()

    const {
        addWord
    } = useWord(refetch)

    useEffect(() => {
        if(error){
            showToast({
                type: 'error',
                //@ts-ignore
                message: error.message
            })
        }
    }, [error])

    const handleAddWordOnClose = () => {
        // setAddWord(false)
        refetch()
    }

    return (
        <ContainerBase>
            <Container>
                <h1>Words</h1>
                <p>List of all words in the database, click on a word to add it to your custom lists</p>
                <ActionContainer>
                    <Button
                        onClick={() => addWord()}
                    >
                        Add Words
                    </Button>
                </ActionContainer>
                <Table  data={data?.data || []}/>
            </Container>
        </ContainerBase>
    )
}

export default WordsPage
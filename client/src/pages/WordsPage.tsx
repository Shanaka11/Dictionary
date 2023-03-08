import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { wordApi } from "../api"
import { Button, Container, ContainerBase } from "../components"
import AddWordDialog from "../components/AddWord/AddWordDialog"
import { Table } from "../components/Table"
import { useToast } from "../components/Toast"

type Props = {}

const WordsPage = (props: Props) => {

    const [ addWord, setAddWord ] = useState(false)

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
        setAddWord(false)
        refetch()
    }

    return (
        <ContainerBase>
            <AddWordDialog
                show={addWord}
                onClose={handleAddWordOnClose}
            />
            <Container>
                <h1>Words</h1>
                <p>List of all words in the database, click on a word to add it to your custom lists</p>
                <Button
                    onClick={() => setAddWord(true)}
                >
                    Add Words
                </Button>
                <Table  data={data?.data || []}/>
            </Container>
        </ContainerBase>
    )
}

export default WordsPage
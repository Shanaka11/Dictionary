import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { wordApi } from "../api"
import { Container, ContainerBase } from "../components"
import { Table } from "../components/Table"
import { useToast } from "../components/Toast"

type Props = {}

const WordsPage = (props: Props) => {

    // const [ addWord, setAddWord ] = useState(false)

    const {
        isLoading,
        error,
        data,
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

    return (
        <ContainerBase>
            <Container>
                <h1>Words</h1>
                <p>List of all words in the database, click on a word to add it to your custom lists</p>
                <Table  data={data?.data || []}/>
            </Container>
        </ContainerBase>
    )
}

export default WordsPage
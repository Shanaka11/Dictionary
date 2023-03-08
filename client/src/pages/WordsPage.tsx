import { useQuery } from "react-query"
import { wordApi } from "../api"
import { Container, ContainerBase } from "../components"
import { Table } from "../components/Table"

type Props = {}

const WordsPage = (props: Props) => {

    const {
        isLoading,
        error,
        data
    } = useQuery(
        'words',
        wordApi.getWords
    )

    console.log(data?.data)

    return (
        <ContainerBase>
            <Container>
                <h1>Words</h1>
                <p>List of all words in the database, click on a word to add it to your custom lists</p>
                <div>
                    <Table  data={data?.data || []}/>
                </div>
            </Container>
        </ContainerBase>
    )
}

export default WordsPage
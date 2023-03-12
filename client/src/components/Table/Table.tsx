import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { Button, TextField } from '..'
import { IWord } from '../../types/IWord'
import { useWord } from '../../word'
import { ActionContainer } from '../Container.styled'
import { TableContainer } from './Table.styled'
import TableCell from './TableCell'
import TableCellAction from './TableCellAction'
import word from '../../api/word'

interface TableProps {
    data: IWord[]
}

const Table:React.FC<TableProps> = ({ data }) => {

    const [ selectedCell, setSelectedCell ] = useState<string>("")
    const [ searchText, setSearchText ] = useState("")
    const [ filteredData, setFilteredData ] = useState(data)

    const {
        addWord
    } = useWord()

    useEffect(() => {

        const search = debounce(() => {
            if(searchText !== ""){
                setFilteredData(data.filter((word) => word.word.toLowerCase().includes(searchText.toLowerCase())))
            }else{
                setFilteredData(data)
            }
        }, 500)

        search()

        return () => search.cancel()

    }, [searchText, data])

    const handleCellOnClick = (id: string) => {
        if(selectedCell === id) {
            setSelectedCell("")
        }else{
            setSelectedCell(id)
        }
    }

    return (
        <>
            <ActionContainer>
                <TextField
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder='Search'
                    flex={true}
                />
                <Button
                    onClick={() => addWord()}
                    margin={true}
                >
                    Add Words
                </Button>
            </ActionContainer>
            <TableContainer>
                {
                    filteredData.map((word) => {
                        if(word._id === selectedCell ){
                            return (
                                <TableCellAction 
                                    key={word._id}
                                    id={word._id}
                                    word={word}
                                    cellOnClick={handleCellOnClick}
                                />
                            )
                        }
                        return (
                            <TableCell 
                                key={word._id} 
                                id={word._id} 
                                text={word.word}
                                cellOnClick={handleCellOnClick}
                            />
                        )
                    })
                }
            </TableContainer>
        </>
    )
}

export default Table
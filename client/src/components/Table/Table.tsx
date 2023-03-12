import React, { useState } from 'react'
import { IWord } from '../../types/IWord'
import { TableContainer } from './Table.styled'
import TableCell from './TableCell'
import TableCellAction from './TableCellAction'

interface TableProps {
    data: IWord[]
}

const Table:React.FC<TableProps> = ({ data }) => {

    const [selectedCell, setSelectedCell] = useState<string>("")

    const handleCellOnClick = (id: string) => {
        if(selectedCell === id) {
            setSelectedCell("")
        }else{
            setSelectedCell(id)
        }
    }

    return (
        <TableContainer>
            {
                data.map((word) => {
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
    )
}

export default Table
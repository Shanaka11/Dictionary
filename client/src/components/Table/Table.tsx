import React from 'react'
import { IWord } from '../../types/IWord'
import { TableContainer } from './Table.styled'
import TableCell from './TableCell'

interface TableProps {
    data: IWord[]
}

const Table:React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
        {
            data.map((word) => {
                return (
                    <TableCell 
                        key={word._id} 
                        id={word._id} 
                        text={word.word}
                    />
                )
            })
        }
    </TableContainer>
  )
}

export default Table
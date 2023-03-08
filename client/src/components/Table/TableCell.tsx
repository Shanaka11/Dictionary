import { Cell } from './Table.styled'

interface TableCellProps {
    id?: string
    text: string
}

const TableCell:React.FC<TableCellProps> = ({
    id, 
    text 
}) => {
    return (
        <Cell>{text}</Cell>
    )
}

export default TableCell
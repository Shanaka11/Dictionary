import { Cell } from './Table.styled'

interface TableCellProps {
    id?: string
    text: string,
    cellOnClick: (id: string) => void
}

const TableCell:React.FC<TableCellProps> = ({
    id, 
    text,
    cellOnClick
}) => {

    const handleCellOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(id){
            cellOnClick(id)
        }
    }

    return (
        <Cell
            onClick={handleCellOnClick}
        >
            {text}
        </Cell>
    )
}

export default TableCell
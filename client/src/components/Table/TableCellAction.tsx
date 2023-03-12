import AddToListIcon from '../../assets/svg/AddToListIcon.svg'
import DeleteIcon from '../../assets/svg/DeleteIcon.svg'
import EditIcon from '../../assets/svg/EditIcon.svg'
import { IWord } from '../../types/IWord'
import { useWord } from '../../word'
import { Cell, CellActionButton } from './Table.styled'

interface TableCellProps {
    id?: string
    word: IWord
    cellOnClick: (id: string) => void
}

const TableCellAction:React.FC<TableCellProps> = ({
    id, 
    word,
    cellOnClick 
}) => {

  const {
    modifyWord,
    deleteWord
  } = useWord()

  const handleCellOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(id) cellOnClick(id)
  }

  const handleAddButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
  }

  const handleEditButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    modifyWord(word)
  }

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation() 
    deleteWord(word)
  }

  return (
      <Cell
        action={true}
        onClick={handleCellOnClick}
      >
        <CellActionButton
          title='Add word to list'
          onClick={handleAddButtonClick}
        >
          <AddToListIcon/>
        </CellActionButton>
        <CellActionButton
          title='Edit word'
          onClick={handleEditButtonClick}
        >
          <EditIcon />
        </CellActionButton>
        <CellActionButton
          title='Delete word'
          red
          onClick={handleDeleteButtonClick}
        >
          <DeleteIcon />
        </CellActionButton>
      </Cell>
  )
}

export default TableCellAction
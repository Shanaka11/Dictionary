import { useState } from 'react'
import { Button } from '..'
import AddWordDialog from '../AddWord/AddWordDialog'
import { HeaderBase, HeaderContainer, HeaderLogoText } from './Header.styled'

const Header = () => {

  const [addWord, setAddWord] = useState(false)

  const handleAddWordsOnClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    setAddWord(true)
  }

  return (
    <HeaderBase>
      <HeaderContainer>
        <AddWordDialog
          show={addWord}
          onClose={() =>  setAddWord(false)}
        />
        <HeaderLogoText>Dictation</HeaderLogoText>
        <Button
          onClick={handleAddWordsOnClick}
        >
          Add Words
        </Button>
      </HeaderContainer>
    </HeaderBase>
  )
}

export default Header
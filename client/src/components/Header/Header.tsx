import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '..'
import { useAuth } from '../../auth'
import Login from '../../auth/Login'
import { HeaderBase, HeaderContainer, HeaderLogoText } from './Header.styled'

const Header = () => {

  const [openLogin, setOpenLogin] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const {
    currentUser,
    signOutUser
  } = useAuth()

  useEffect(() => {
    if(currentUser) {
      const from = location.state?.from?.pathname
      setOpenLogin(false)
      if(from){
        navigate(from, {replace: true})
      }
    }
  }, [currentUser])
  
  const handleLoginOnClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    setOpenLogin(true)
  }

  const handleLogoutOnClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    signOutUser()
  }

  return (
    <HeaderBase>
      <HeaderContainer>
        {
          <Login 
            show={openLogin} 
            onClose={() => setOpenLogin(false)}
          />
        }
        <HeaderLogoText>Dictation</HeaderLogoText>
        {/* <AddWordDialog
          show={addWord}
          onClose={() =>  setAddWord(false)}
        />
        <HeaderLogoText>Dictation</HeaderLogoText>
        <Button
          onClick={handleAddWordsOnClick}
        >
          Add Words
        </Button> */}
        {
          localStorage.getItem("authToken") ?
          (
            <Button
              onClick={handleLogoutOnClick}
            >
              Logout { currentUser?.email }
            </Button>
          ) : (
            <Button
              onClick={handleLoginOnClick}
            >
              Login
            </Button>
          )
        }
      </HeaderContainer>
    </HeaderBase>
  )
}

export default Header
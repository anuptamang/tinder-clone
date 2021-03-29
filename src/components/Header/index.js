import './Header.scss'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum';


const Header = () => {
  return (
    <div className="header">
      <IconButton className="header__icon">
        <PersonIcon fontSize="medium" />
      </IconButton>
      <div className="header__logo">
        <img with={35} height={35} src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="Tinder"/>
      </div>
      <IconButton className="header__icon">
        <ForumIcon fontSize="medium" />
      </IconButton>
    </div>
  )
}

export default Header

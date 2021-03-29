import FlashOnIcon from '@material-ui/icons/FlashOn'
import ReplayIcon from '@material-ui/icons/Replay'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core'
import './SwipeButtons.scss'

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__button swipeButtons__button--replay">
        <ReplayIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__button swipeButtons__button--close">
        <CloseIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__button swipeButtons__button--star">
        <StarIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__button swipeButtons__button--favorite">
        <FavoriteIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__button swipeButtons__button--flash">
        <FlashOnIcon fontSize="medium" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons

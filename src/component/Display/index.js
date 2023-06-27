import {Para} from './styledComponents'
import './index.css'

const Display = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <li>
      <Para>
        {word} : {word.length}
      </Para>
    </li>
  )
}

export default Display

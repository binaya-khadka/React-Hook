import { Products } from './products'
import { Button } from 'react-bootstrap'
import {
  Rating
} from './component';
import * as styles from './styles/present'

export default function App() {

  const isValid: boolean = true;


  return (
    <div style={{ ...styles.centerText, ...styles.wrapper }}>
      {/* <h1>Hello {formatName(user)}</h1> */}
      {/* < Products />
      <Button variant="danger" disabled={!isValid}>Default</Button> */}
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div >
  )
}
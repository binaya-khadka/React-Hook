// import { Products } from './products'
import {
  Rating
} from './component';
import * as styles from './styles/present'

export default function App() {
  return (
    <div style={{ ...styles.centerText, ...styles.wrapper }}>
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div >
  )
}
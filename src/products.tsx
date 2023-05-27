import { Button } from 'react-bootstrap'

const Products = () => {
  // Button
  const isValid: boolean = true;

  // Products
  const products = ['ReactJS', 'React for dummies', 'Playground React'];
  const listProduct = products.map((item) => {
    return <li key={item.toString()}>{item}</li>
  })
  return (
    <>
      <h1>Products</h1>
      <ul>{listProduct}</ul>
      <Button variant="danger" disabled={!isValid}>Default</Button>
    </>
  )
}

export { Products }
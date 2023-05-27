const Products = () => {
  const products = ['ReactJS', 'React for dummies', 'Playground React'];
  const listProduct = products.map((item) => {
    return <li key={item.toString()}>{item}</li>
  })
  return (
    <>
      <h1>Products</h1>
      <ul>{listProduct}</ul>
    </>
  )
}

export { Products }
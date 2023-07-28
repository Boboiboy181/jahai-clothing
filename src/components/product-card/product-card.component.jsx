import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {
  Name,
  Price,
  ProductCartContainer,
  ProductCartFooter
} from './product-card.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCartFooter>
        <Name>{name}</Name>
        <Price>{`${price}$`}</Price>
      </ProductCartFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard

import React from 'react'
import Styles from './list-products-styles.scss'

const ProductList: React.FC = () => {
  return (
    <ul className={Styles.productlist}>
      <li >
        <img src={'https://picsum.photos/200/300'} alt={'llll'} />
        <strong >teste</strong>
        <span >descricao</span>
        <button
          type="button"
          data-testid="add-product-button"

          onClick={() =>
            console.log('lalala')
          }
        >
          <div data-testid="cart-product-quantity">
            0
          </div>

          <span >ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ul>
  )
}

export default ProductList

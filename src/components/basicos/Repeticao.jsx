import React from 'react'

import produtos from '../data/Products'

// eslint-disable-next-line 
export default props => {
  
    function getProdutosListItem() {
      return produtos.map(prod => {
        return <li key={prod.id}>
          {prod.id} - {prod.name} - R$ {prod.price}
          </li>
      })
    }
  
    return (
      <div>
        <h2>Repetição</h2>
        <ul>
          {getProdutosListItem()}
        </ul>
      </div>
  )
}
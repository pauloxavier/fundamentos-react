import React from 'react'
import If from './If'

// eslint-disable-next-line 
export default props => {
  
  return (
    <div>
      <h2>O número é {props.numero}</h2>
        {props.numero % 2 === 0 ?
            <span>Par</span>
            : <span>Impar</span> 
        }
    </div>
  )
}
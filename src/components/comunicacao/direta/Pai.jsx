import React from 'react'
import Filho from './Filho'

// eslint-disable-next-line
export default props => 
  <div>
      <Filho {...props}><strong>João</strong></Filho>
      <Filho sobrenome={props.sobrenome}>Maria</Filho>
      <Filho sobrenome="Silva">Pedro</Filho>
  </div>

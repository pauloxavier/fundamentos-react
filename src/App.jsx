import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import ComFilhos from './components/basicos/ComFilhos'
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf.jsx";
import Pai from "./components/comunicacao/direta/Pai"
import Super from "./components/comunicacao/indireta/Super"
import Input from "./components/form/Input"
import Contador from "./components/contador/Contador"

// eslint-disable-next-line
export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
    <Card titulo="# 10 - Contador" color="#FEAC5E">
          <Contador passo= {10} valor= {100}></Contador>
      </Card>
      <Card titulo="# 09 - Input" color="#BBB5">
          <Input></Input>
      </Card>
      <Card titulo="# 08 - Comunicação Indireta" color="#000">
          <Super></Super>
      </Card>
      <Card titulo="# 07 - Comunicação Direta" color="#FB0">
          <Pai sobrenome="Xavier"></Pai>
      </Card>
      <Card titulo="# 06 - Condicional V2" color="#FA6900">
        <CondicionalComIf numero={11}></CondicionalComIf>
      </Card>
      <Card titulo="# 05 - Condicional V1" color="#E94C6F">
        <Condicional numero={12}></Condicional>
      </Card>
      <Card titulo="# 04 - Repetição" color="#008BBA">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="# 03 - Componente com Filhos" color=" #D96459">
       <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos> 
      </Card>
      <Card titulo="# 02 - Componente com Parâmetro" color="#29ABA4">
        <ComParametros titulo="Esse é o título"
        subtitulo="Esse é o subtítulo" />
      </Card>   
      <Card titulo="# 01 - Primeiro Componente" color="#354458">
        <Primeiro/>
      </Card>   
    </div>
    
        
    </div>
);
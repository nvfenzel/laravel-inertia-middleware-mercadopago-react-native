import React from 'react'
import CardPrice from '@/Components/CardsComponents/CardPrice'
import './Home.css'
import CardGift from '@/Components/CardsComponents/CardGift'

const Home = (props) => {
  return (
    <div className='home_background'>
    <div className='title_home'>
    {props.data.auth.user===null? 
<h1>Encuentre cosas con estilos de vendedores independientes.</h1>
:
<h1>Bienvenido {props.data.auth.user.name}!!!</h1>
}
    </div>
    <div className='regalos_home'>
      <h1>Regalos populares en estos momentos</h1>
      <CardPrice/>
    </div>
    <div className='categorias_home'>
      <h1>Visita nuestras categorías populares de regalos</h1>
      <CardGift/>
    </div>
    </div>
  )
}

export default Home
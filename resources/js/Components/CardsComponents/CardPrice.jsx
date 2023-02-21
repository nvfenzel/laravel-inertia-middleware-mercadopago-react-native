import React from 'react'
import './CardPrice.css'
import anillo1 from '@/Image/anillo1.jpg'
import anillo2 from '@/Image/anillo2.jpg'
import anillo3 from '@/Image/anillo3.jpg'
import anillo4 from '@/Image/anillo4.jpg'
import anillo5 from '@/Image/anillo5.jpg'

const CardPrice = () => {
  return (
    <div className='Cards_all'>
      <div className='card_price'>
        <div className='card_img_size'>
          <img className='card_img' src={anillo1} alt="" />
        </div>
        <div>
          <h3 className='text_card'>
            Este es un texto cualquiera que quiero que se vea en el pie
          </h3>
        <div className='stars'>
          &#9733; &#9733; &#9733; &#9733; &#9733;&nbsp;
          <h3 className='number_stars'>(443)</h3>
        </div>
        <h3 className='price'>USD 234</h3>
        <div className='discount'>
          <h3 className='discount_before'>USD 234</h3>
          &nbsp;
          <h3 className='percent'>(50 % de descuento)</h3>
        </div>
        <div className='envio_component'>
          <h3 className='envio'>Envío GRATIS</h3>
        </div>
        </div>
      </div>
      <div className='card_price'>
        <div className='card_img_size'>
          <img className='card_img' src={anillo2} alt="" />
        </div>
        <div>
          <h3 className='text_card'>
            Este es un texto cualquiera que quiero que se vea en el pie
          </h3>
        <div className='stars'>
          &#9733; &#9733; &#9733; &#9733; &#9733;&nbsp;
          <h3 className='number_stars'>(443)</h3>
        </div>
        <h3 className='price'>USD 234</h3>
        <div className='discount'>
          <h3 className='discount_before'>USD 234</h3>
          &nbsp;
          <h3 className='percent'>(50 % de descuento)</h3>
        </div>
        <div className='envio_component'>
          <h3 className='envio'>Envío GRATIS</h3>
        </div>
        </div>
      </div>
      <div className='card_price'>
        <div className='card_img_size'>
          <img className='card_img' src={anillo3} alt="" />
        </div>
        <div>
          <h3 className='text_card'>
            Este es un texto cualquiera que quiero que se vea en el pie
          </h3>
        <div className='stars'>
          &#9733; &#9733; &#9733; &#9733; &#9733;&nbsp;
          <h3 className='number_stars'>(443)</h3>
        </div>
        <h3 className='price'>USD 234</h3>
        <div className='discount'>
          <h3 className='discount_before'>USD 234</h3>
          &nbsp;
          <h3 className='percent'>(50 % de descuento)</h3>
        </div>
        <div className='envio_component'>
          <h3 className='envio'>Envío GRATIS</h3>
        </div>
        </div>
      </div>
      <div className='card_price'>
        <div className='card_img_size'>
          <img className='card_img' src={anillo4} alt="" />
        </div>
        <div>
          <h3 className='text_card'>
            Este es un texto cualquiera que quiero que se vea en el pie
          </h3>
        <div className='stars'>
          &#9733; &#9733; &#9733; &#9733; &#9733;&nbsp;
          <h3 className='number_stars'>(443)</h3>
        </div>
        <h3 className='price'>USD 234</h3>
        <div className='discount'>
          <h3 className='discount_before'>USD 234</h3>
          &nbsp;
          <h3 className='percent'>(50 % de descuento)</h3>
        </div>
        <div className='envio_component'>
          <h3 className='envio'>Envío GRATIS</h3>
        </div>
        </div>
      </div>
      <div className='card_price'>
        <div className='card_img_size'>
          <img className='card_img' src={anillo5} alt="" />
        </div>
        <div>
          <h3 className='text_card'>
            Este es un texto cualquiera que quiero que se vea en el pie
          </h3>
        <div className='stars'>
          &#9733; &#9733; &#9733; &#9733; &#9733;&nbsp;
          <h3 className='number_stars'>(443)</h3>
        </div>
        <h3 className='price'>USD 234</h3>
        <div className='discount'>
          <h3 className='discount_before'>USD 234</h3>
          &nbsp;
          <h3 className='percent'>(50 % de descuento)</h3>
        </div>
        <div className='envio_component'>
          <h3 className='envio'>Envío GRATIS</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CardPrice
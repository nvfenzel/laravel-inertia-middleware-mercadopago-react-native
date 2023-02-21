import React from 'react'
import './CardGift.css'
import anillo1 from '@/Image/anillo1.jpg'
import anillo2 from '@/Image/anillo2.jpg'
import anillo3 from '@/Image/anillo3.jpg'
import anillo4 from '@/Image/anillo4.jpg'
import anillo5 from '@/Image/anillo5.jpg'

const CardGift = () => {
  return (
        <div className='Cards_all_gift'>
      <div className='card_price_gift'>
        <div className='card_img_size_gift'>
          <img className='card_img_gift' src={anillo1} alt="" />
        </div>
        <div className='text_box'>
          <h3 className='text_card_gift'>
            Este es un texto cualquiera
          </h3>
        </div>
      </div>
      <div className='card_price_gift'>
        <div className='card_img_size_gift'>
          <img className='card_img_gift' src={anillo2} alt="" />
        </div>
        <div className='text_box'>
          <h3 className='text_card_gift'>
            Este es un texto cualquiera
          </h3>
        </div>
      </div>
      <div className='card_price_gift'>
        <div className='card_img_size_gift'>
          <img className='card_img_gift' src={anillo3} alt="" />
        </div>
        <div className='text_box'>
          <h3 className='text_card_gift'>
            Este es un texto cualquiera
          </h3>
        </div>
      </div>
      <div className='card_price_gift'>
        <div className='card_img_size_gift'>
          <img className='card_img_gift' src={anillo4} alt="" />
        </div>
        <div className='text_box'>
          <h3 className='text_card_gift'>
            Este es un texto cualquiera
          </h3>
        </div>
      </div>
      <div className='card_price_gift'>
        <div className='card_img_size_gift'>
          <img className='card_img_gift' src={anillo5} alt="" />
        </div>
        <div className='text_box'>
          <h3 className='text_card_gift'>
            Este es un texto cualquiera
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CardGift
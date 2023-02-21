import React, {useState} from 'react'
import { Link } from '@inertiajs/inertia-react'
import car from '../SvgComponents/shoppingcart.svg'
import fav from '../SvgComponents/favorito.svg'
import search from '../SvgComponents/search_icon.svg'
import './Nav.css'

export default function Nav(props) {

    var navigation_one = props.data.navigation[0].navigation_one
    var navigation_two = props.data.navigation[0].navigation_two
    var navigation_tree = props.data.navigation[0].navigation_tree
    var navigation_four = props.data.navigation[0].navigation_four
    var navigation_five = props.data.navigation[0].navigation_five
    var navigation_six = props.data.navigation[0].navigation_six
    var navigation_seven = props.data.navigation[0].navigation_seven
    var navigation_eight = props.data.navigation[0].navigation_one
    var navigation_nine = props.data.navigation[0].navigation_nine

  return (
      <div className='nav'>
  <div className='search_nav'>
  <h1 className='caro_href_home'>Caro</h1>
  <input placeholder='Busca lo que se te ocurra' className='search' type="text" />
  <button className='button_search'>
    <img src={search} alt="" />
  </button>
  <button className='button_log_in'>
  <Link href={route('login')} className="">
                Entrar
            </Link>
    </button>
  <button className='button_fav'>
    <img src={fav} alt="" />
    </button>
  <button className='button_carrito'>
    <img src={car} alt="" />
    </button>
  </div>
  <ul className='navigation_list'>
    <li><a href="">{navigation_one}</a></li>
    <li><a href="">{navigation_two}</a></li>
    <li><a href="">{navigation_tree}</a></li>
    <li><a href="">{navigation_four}</a></li>
    <li><a href="">{navigation_five}</a></li>
    <li><a href="">{navigation_six}</a></li>
    <li><a href="">{navigation_seven}</a></li>
    <li><a href="">{navigation_eight}</a></li>
    <li><a href="">{navigation_nine}</a></li>
  </ul>
 </div>


)}


 {/* <div className="fixed top-0 right-0 px-6 py-4 sm:block">
    
</div>   */}
//   )
    {/* {props.auth.user ? (
        <Link href={route('dashboard')} className="">
            Dashboard
        </Link>
    ) : (
        <>
            <Link href={route('login')} className="">
                Sign in
            </Link>

            <Link
                href={route('register')}
                className=""
            >
                Sign up
            </Link>
        </>
    )} */}
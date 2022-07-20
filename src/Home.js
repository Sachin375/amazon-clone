import React, { useState } from 'react'
import Product from './Product';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Home.css";
function Home() {
  let [ind, setInd] = useState(0);
  let arr = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/Jun-WRS/Event/Deals-model-Unrec-3000._CB634972579_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/July2022GW/New_FST_Icons/Apay_ICICI/Shoes/s-pc-3000x._CB632756220_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April-22/DesktopTallhero_3000x1200_2._CB623843558_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PFS_Unrechero/D50756151_WLA_GW_Heroes_Unrec__Tall_Hero_3000x1200._CB632954420_.jpg"

  ]


  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image slide' src={arr[ind]} alt=''></img>
        
        <button className='homeLeftButton' onClick={() => {
          { ind > 0 ? ind = ind - 1 : ind = 4 }
          setInd(ind);

        }}><FaAngleLeft /></button>
        <button className='homeRightButton' onClick={() => {
          { ind < 4 ? ind = ind + 1 : ind = 0 }
          setInd(ind);
        }}><FaAngleRight /> </button>
        <div className='home_row'>
          <Product
            id="1"

            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={189.05}
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Acer Nitro 5 Gaming Laptop/12th Gen Intel Core i7-12700H Processor 14core/15.6(39.6cm) FHD 144Hz Display(16GB/512GB SSD/1TB HDD/RTX 3050Ti Graphics/Windows 11/RGB)"
            price={109990.00}
            image="https://m.media-amazon.com/images/I/61N6Ojp790L._SX522_.jpg"
            rating={3}
          />
        </div>

        <div className='home_row'>
          <Product
            id="3"

            title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
            price={19999.00}
            image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX522_.jpg"
            rating={4}
          />
          <Product
            id="4"

            title="Havells Glydo 1000 watt Dry Iron With American Heritage Non Stick Sole Plate, Aerodynamic Design, Easy Grip Temperature Knob & 2 years Warranty. (Charcoal Blue)"
            price={800.00}
            image="https://m.media-amazon.com/images/I/71jRXnLy8WL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="5"

            title="ASGARD Multi Functional Sports Digital Dial Men's Watch"
            price={349.00}
            image="https://m.media-amazon.com/images/I/71yUJm6cjvL._UX679_.jpg"
            rating={3}
          />

        </div>

        <div className='home_row'>
          <Product
            id="6"

            title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
            price={12299.00}
            image="https://m.media-amazon.com/images/I/61wFnp19zzL._SX522_.jpg"
            rating={5}
          />

        </div>

        <div className='home_row'>
          <Product
            id="7"

            title="Sparx Men's Sx0241g Running Shoes"
            price={1274.00}
            image="https://m.media-amazon.com/images/I/81paxG9XinL._UX500_.jpg"
            rating={3}
          />
          <Product
            id="8"

            title="Campus Sutra Men's Checkered Casual Shirts (AZZ18SHRT_PNCHK7_M_PLN_BLMA_AZ_M)"
            price={599.00}
            image="https://m.media-amazon.com/images/I/51wpu-iyHQL._AC_UL480_FMwebp_QL65_.jpg"
            rating={2}
          />
          <Product
            id="9"

            title="Gst Royale Plus Schott Glasstop Gt04"
            price={9490.00}
            image="https://m.media-amazon.com/images/I/51wzjqnJi6L._SL1000_.jpg"
            rating={4}
          />

        </div>
        <div className='home_row'>
          <Product
            id="10"

            title="boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours Playback"
            price={999.00}
            image="https://m.media-amazon.com/images/I/71iIrvRkZsL._SX466_.jpg"
            rating={3}
          />
          <Product
            id="11"

            title="Yoho Women Doctor Ortho slippers | Soft comfortable and stylish flip flop slippers"
            price={559.00}
            image="https://m.media-amazon.com/images/I/81rneC3XgPL._UY500_.jpg"
            rating={4}
          />
          <Product
            id="12"

            title="Unbreakable Muscle Rack Monkey Bars Training Fitness Equipment Chest Muscle Arm Multi-Function Carbon Fiber Push-Ups Board"
            price={1299.00}
            image="https://m.media-amazon.com/images/I/61ROs+UA6-L._SX466_.jpg"
            rating={4}
          />
          
          

        </div>
        
      </div>
    </div>
  )
}

export default Home
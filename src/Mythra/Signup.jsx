import React, { useState , useEffect } from "react";
import '../Form.css';
import { faL } from "@fortawesome/free-solid-svg-icons";
import { checkboxClasses } from "@mui/material";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import { FaRegHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import '../normal.css';

import logo from '../images/logo.jpeg';
import studio from '../images/studio.png';
import original from '../images/orginal.png';
import app from '../images/app.png';
import search from '../images/search.png';





export default function Signup() 
{

  const [searchTerm, setSearchTerm] = useState(""); // State to store search term


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');


 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password ||!phone) {
      alert('Please fill in both fields');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Phone:', phone);

    setUsername('');
    setPassword('');
    setPhone('');
  };

    return (
        <>

<Container fluid className="app bg-white">
      <Container fluid className="top bg-light p-2">
          <Row>
              <Col xs={1} className="mt-2">
              <Link to={'/myntra'} style={{color:"black", textDecoration:"none",cursor:"pointer"}}>
                        <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
                    </Link>
              </Col>


      <Col xs={5} className="mt-4 d-flex">
      <div className="link1">
    <span
      className="link"
      style={{
        marginLeft: "3%",
        fontWeight: "bold",
        fontSize: "15px",
        textDecoration: "none",
        color: "#282C3F",
        paddingBottom: "25px",
        paddingLeft: "5px",
        paddingRight: "5px",
      }}
      // to="/Men"
    >
      MEN
    </span>
    <div className="down">
      <div className="flex">
        <div className="a1">
          <ul>
            <li>Topwear</li>
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Sweaters</li>
            <li>Jackets</li>
            <li>Blazers & Coats</li>
            <li>Suits</li>
            <li>Rain Jackets</li>
          </ul>
          <ul class="nextul">
            <li>Indian & Festive Wear</li>
            <li>Kurtas & Kurta Sets</li>
            <li>Sherwanis</li>
            <li>Nehru Jackets</li>
            <li>Dhotis</li>
          </ul>
        </div>
        <div className="a2">
          <ul>
            <li>Bottom Wear</li>
            <li>Jeans</li>
            <li>Casual Trousers</li>
            <li>Formal Trousers</li>
            <li>Shorts</li>
            <li>Track Pants & Joggers</li>
          </ul>

          <ul class="nextul">
            <li>Innerwear & Sleepwear</li>
            <li>Briefs & Trunks</li>
            <li>Boxers</li>
            <li>Vests</li>
            <li>Sleepwear & Loungewear</li>
            <li>Thermals</li>
          </ul>
          <ul class="nextul">
            <li>Plus Size</li>
            <li>S, M, L, XL, XXl, XXl</li>
          </ul>
        </div>
        <div className="a1">
          <ul>
            <li>Footwear</li>
            <li>Casual Shoes</li>
            <li>Sports Shoes</li>
            <li>Formal Shoes</li>
            <li>Sneakers</li>
            <li>Sandals & Floaters</li>
            <li>Flip Flops</li>
            <li>Socks</li>
          </ul>
          <ul class="nextul">
            <li>Personal Care & Grooming</li>
            <li>Lotions</li>
            <li>Shaving kit</li>
          </ul>
          <ul clss="nextul">
            <li>Watches</li>
            <li>Fastrack</li>
            <li>Puma</li>
            <li>Rado</li>
          </ul>
        </div>
        <div className="a2">
          <ul>
            <li>Sports & Active Wear</li>
            <li>Sports Shoes</li>
            <li>Sports Sandals</li>
            <li>Active T-Shirts</li>
            <li>Track Pants & Shorts</li>
            <li>Tracksuits</li>
            <li>Jackets & Sweatshirts</li>
            <li>Sports Accessories</li>
            <li>Swimwear</li>
          </ul>
          <ul class="nextul">
            <li>Gadgets</li>
            <li>Smart Wearables</li>
            <li>Fitness Gadgets</li>
            <li>Headphones</li>
            <li>Speakers</li>
          </ul>
        </div>
        <div
          className="a1"
          style={{
            paddingRight: "25px",
          }}
        >
          <ul>
            <li>Fashion Accessories</li>
            <li>Wallets</li>
            <li>Belts</li>
            <li>Perfumes & Body Mists</li>
            <li>Trimmers</li>
            <li>Deodorants</li>
            <li>Ties, Cufflinks & Pocket Squares</li>
            <li>Accessory Gift Sets</li>
            <li>Caps & Hats</li>
            <li>Mufflers, Scarves & Gloves</li>
            <li>Phone Cases</li>
            <li>Rings & Wristwear</li>
            <li>Helmets</li>
          </ul>
          <ul class="nextul">
            <li>Bags & Backpacks</li>
            <li>Reebok</li>
          </ul>
        </div>
      </div>
    </div>
      </div>

  <div className="link1">
    <span
      className="link"
      style={{
        marginLeft: "3%",
        marginBottom: "-2%",
        fontWeight: "bold",
        fontSize: "15px",
        textDecoration: "none",
        color: "#282C3F",
        paddingBottom: "25px",
        paddingLeft: "5px",
        paddingRight: "5px",
      }}
      // to="/Women"
    >
      WOMEN
    </span>
    <div
      className="down"
      style={{
        marginLeft: "-100px",
      }}
    >
      <div className="flex">
        <div className="a1">
          <ul>
            <li>Indian & Fusion Wear</li>
            <li>Kurtas & Suits</li>
            <li>Kurtis, Tunics & Tops</li>
            <li>Ethnic Wear</li>
            <li>Leggings, Salwars & Churidars</li>
            <li>Skirts & Palazzos</li>
            <li>Sarees</li>
            <li>Dress Materials</li>
            <li>Lehenga Cholis</li>
            <li>Dupattas & Shawls</li>
            <li>Jackets</li>
          </ul>

          <ul class="nextul">
            <li>Belts, Scarves & More</li>
          </ul>
          <ul class="nextul">
            <li>Watches & Wearables</li>
          </ul>
        </div>
        <div className="a2">
          <ul>
            <li>Western Wear</li>
            <li>Dresses</li>
            <li>Jumpsuits</li>
            <li>Tops</li>
            <li>Jeans</li>
            <li>Trousers & Capris</li>
            <li>Shorts & Skirts</li>
            <li>Shrugs</li>
            <li>Sweaters & Sweatshirts</li>
            <li>Jackets & Coats</li>
            <li>Blazers & Waistcoats</li>
          </ul>

          <ul class="nextul">
            <li>Plus Size</li>
          </ul>
          <ul class="nextul">
            <li>Sunglasses & Frames</li>
          </ul>
        </div>
        <div className="a1">
          <ul>
            <li>Footwear</li>
            <li>Flats</li>
            <li>Casual Shoes</li>
            <li>Heels</li>
            <li>Boots</li>
            <li>Sports Shoes & Floaters</li>
          </ul>

          <ul class="nextul">
            <li>Sports & Active Wear</li>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Sports Accessories</li>
            <li>Sports Equipment</li>
          </ul>
        </div>
        <div className="a2">
          <ul>
            <li>Lingerie & Sleepwear</li>
            <li>Bra</li>
            <li>Briefs</li>
            <li>Shapewear</li>
            <li>Sleepwear & Loungewear</li>
            <li>Swimwear</li>
            <li>Camisoles & Thermals</li>
          </ul>

          <ul class="nextul">
            <li>Beauty & Personal Care</li>
            <li>Makeup</li>
            <li>Skincare</li>
            <li>Premium Beauty</li>
            <li>Lipsticks</li>
            <li>Fragrances</li>
          </ul>
        </div>
        <div
          className="a1"
          style={{
            paddingRight: "25px",
          }}
        >
          <ul>
            <li>Gadgets</li>
            <li>Smart Wearables</li>
            <li>Fitness Gadgets</li>
            <li>Headphones</li>
            <li>Speakers</li>
          </ul>

          <ul class="nextul">
            <li>Jewellery</li>
            <li>Fashion Jewellery</li>
            <li>Fine Jewellery</li>
            <li>Earrings</li>
          </ul>
          <ul class="nextul">
            <li>Backpacks</li>
          </ul>
          <ul class="nextul">
            <li>Handbags, Bags & Wallets</li>
          </ul>
          <ul class="nextul">
            <li>Luggages & Trolleys</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="link1">
    <span
      className="link"
      style={{
        marginLeft: "3%",
        fontWeight: "bold",
        fontSize: "15px",
        textDecoration: "none",
        color: "#282C3F",
        paddingBottom: "25px",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginBottom: "-2%",
      }}
      // to="/Kids"
    >
      KIDS
    </span>
    <div
      className="down"
      style={{
        marginLeft: "-200px",
      }}
    >
      <div className="flex">
        <div className="a1">
        <ul>
        <li>Boys Clothing</li>
        <li>T-Shirts</li>
        <li>Shirts</li>
        <li>Shorts</li>
        <li>Jeans</li>
        <li>Trousers</li>
        <li>Clothing Sets</li>
        <li>Ethnic Wear</li>
        <li>Track Pants & Pyjamas</li>
        <li>Jacket, Sweater & Sweatshirts</li>
        <li>Party Wear</li>
        <li>Innerwear & Thermals</li>
        <li>Nightwear & Loungewear</li>
        <li>Value Packs</li>
      </ul>
        </div>
        <div className="a2">
        <ul>
        <li>Girls Clothing</li>
        <li>Dresses</li>
        <li>Tops</li>
        <li>Tshirts</li>
        <li>Clothing Sets</li>
        <li>Lehenga choli</li>
        <li>Kurta Sets</li>
        <li>Party wear</li>
        <li>Dungarees & Jumpsuits</li>
        <li>Skirts & shorts</li>
        <li>Tights & Leggings</li>
        <li>Jeans, Trousers & Capris</li>
        <li>Jacket, Sweater & Sweatshirts</li>
        <li>Innerwear & Thermals</li>
        <li>Nightwear & Loungewear</li>
        <li>Value Packs</li>
      </ul>
        </div>
        <div className="a1">
        <ul>
        <li>Footwear</li>
        <li>Casual Shoes</li>
        <li>Flipflops</li>
        <li>Sports Shoes</li>
        <li>Flats</li>
        <li>Sandals</li>
        <li>Heels</li>
        <li>School Shoes</li>
        <li>Socks</li>
      </ul>

      <ul class="nextul">
        <li>Toys</li>
        <li>Learning & Development</li>
        <li>Activity Toys</li>
        <li>Soft Toys</li>
        <li>Action Figure / Play set</li>
      </ul>
        </div>
        <div className="a2">
        <ul>
        <li>Infants</li>
        <li>Bodysuits</li>
        <li>Rompers & Sleepsuits</li>
        <li>Clothing Sets</li>
        <li>Tshirts & Tops</li>
        <li>Dresses</li>
        <li>Bottom wear</li>
        <li>Winter Wear</li>
        <li>Innerwear & Sleepwear</li>
        <li>Infant Care</li>
      </ul>

      <ul class="nextul">
        <li>Home & Bath</li>
      </ul>
      <ul class="nextul">
        <li>Home & Bath</li>
      </ul>
        </div>
        <div
          className="a1"
          style={{
            paddingRight: "25px",
          }}
        >
          <ul>
        <li>Kids Accessories</li>
        <li>Bags & Backpacks</li>
        <li>Watches</li>
        <li>Jewellery & Hair accessory</li>
        <li>Sunglasses</li>
        <li>Masks & Protective Gears</li>
        <li>Caps & Hats</li>
      </ul>

      <ul class="nextul">
        <li>Brands</li>
        <li>H&M</li>
        <li>Max Kids</li>
        <li>Pantaloons</li>
        <li>United Colors Of Benetton Kids</li>
        <li>YK</li>
        <li>U.S. Polo Assn. Kids</li>
        <li>Mothercare</li>
        <li>HRX</li>
      </ul>
        </div>
      </div>
    </div>
  </div>

  {/* <Link style={{ marginLeft: "2%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/homeandkitchen">Home & Living</Link> */}

  <div className="link1">
    <span
      className="link"
      style={{
        marginLeft: "3%",
        fontWeight: "bold",
        fontSize: "15px",
        textDecoration: "none",
        color: "#282C3F",
        paddingBottom: "25px",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginBottom: "-2%",
      }}
      // to="/Home&Living"
    >
      HOME&LIVING
    </span>
    <div
      className="down"
      style={{
        marginLeft: "-300px",
      }}
    >
      <div className="flex">
        <div className="a1">
        <ul>
        <li>Bed Linen & Furnishing</li>
        <li>Bedsheets</li>
        <li>Bedding Sets</li>
        <li>Blankets, Quilts & Dohars</li>
        <li>Pillows & Pillow Covers</li>
        <li>Bed Covers</li>
      </ul>

      <ul class="nextul">
        <li>Flooring</li>
        <li>Carpets</li>
        <li>Floor Mats & Dhurries</li>
        <li>Door Mats</li>
      </ul>
        </div>
        <div className="a2">
        <ul>
        <li>Bath</li>
        <li>Bath Towels</li>
        <li>Hand & Face Towels</li>
        <li>Beach Towels</li>
        <li>Towels Set</li>
        <li>Bath Rugs</li>
        <li>Bath Robes</li>
        <li>Bathroom Accessories</li>
      </ul>

      <ul class="nextul">
        <li>Lamps & Lighting</li>
        <li>Floor Lamps</li>
        <li>Ceiling Lamps</li>
        <li>Table Lamps</li>
        <li>Wall Lamps</li>
        <li>Outdoor Lamps</li>
        <li>String Lights</li>
      </ul>
        </div>
        <div className="a1">
        <ul>
        <li>Home Décor</li>
        <li>Plants & Planters</li>
        <li>Aromas & Candles</li>
        <li>Clocks</li>
        <li>Mirrors</li>
        <li>Wall Décor</li>
        <li>Wall Shelves</li>
        <li>Fountains</li>
        <li>Showpieces & Vases</li>
      </ul>

      <ul class="nextul">
        <li>Cushions & Cushion Covers</li>
      </ul>

      <ul class="nextul">
        <li>Curtains</li>
      </ul>

      <ul class="nextul">
        <li>Home Gift Sets</li>
      </ul>
        </div>
        <div className="a2">
        <ul>
        <li>Kitchen & Table</li>
        <li>Dinnerware & Serveware</li>
        <li>Cups and Mugs</li>
        <li>Bakeware & Cookware</li>
        <li>Kitchen Storage & Tools</li>
        <li>Bar & Drinkware</li>
        <li>Table Covers & Furnishings</li>
      </ul>

      <ul class="nextul">
        <li>Storage</li>
        <li>Organisers</li>
        <li>Hooks & Holders</li>
      </ul>
        </div>
        <div
          className="a1"
          style={{
            paddingRight: "25px",
          }}
        >
          <ul>
        <li>Brands</li>
        <li>Home Centre</li>
        <li>Spaces</li>
        <li>D'Decor</li>
        <li>Portico New York</li>
        <li>Pure Home & Living</li>
        <li>Swayam</li>
        <li>Raymond Home</li>
        <li>Maspar</li>
        <li>Corelle</li>
        <li>Trident</li>
        <li>Cortina</li>
        <li>Story@Home</li>
        <li>Random</li>
        <li>Ellementry</li>
        <li>ROMEE</li>
        <li>SEJ by Nisha Gupta</li>
      </ul>
        </div>
      </div>
    </div>
  </div>

 
<div className="link1">
    <span
      className="link"
      style={{
        marginLeft: "3%",
        fontWeight: "bold",
        fontSize: "15px",
        textDecoration: "none",
        color: "#282C3F",
        paddingBottom: "25px",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginBottom: "-2%",
      }}
      // to="/Beauty"
    >
      BEAUTY
    </span>
    <div
      className="down"
      style={{
        marginLeft: "-300px",
      }}
    >

      <div className="flex">
        <div className="a1">
        <ul>
        <li>Makeup</li>
        <li>Lipstick</li>
        <li>Lip Gloss</li>
        <li>Lip Liner</li>
        <li>Mascara</li>
        <li>Eyeliner</li>
        <li>Kajal</li>
        <li>Eyeshadow</li>
        <li>Foundation</li>
        <li>Primer</li>
        <li>Concealer</li>
        <li>Compact</li>
        <li>Nail Polish</li>
      </ul>
        </div>
        <div className="a2">
        <ul>
        <li>Skincare, Bath & Body</li>
        <li>Face Moisturiser</li>
        <li>Cleanser</li>
        <li>Masks & Peel</li>
        <li>Sunscreen</li>
        <li>Serum</li>
        <li>Face Wash</li>
        <li>Eye Cream</li>
        <li>Lip Balm</li>
        <li>Body Lotion</li>
        <li>Body Wash</li>
        <li>Body Scrub</li>
        <li>Hand Cream</li>
      </ul>

      <ul class="nextul">
        <li>Baby Care</li>
      </ul>

      <ul class="nextul">
        <li>Masks</li>
      </ul>
        </div>
        <div className="a1">
        <ul>
        <li>Haircare</li>
        <li>Shampoo</li>
        <li>Conditioner</li>
        <li>Hair Cream</li>
        <li>Hair Oil</li>
        <li>Hair Gel</li>
        <li>Hair Color</li>
        <li>Hair Serum</li>
        <li>Hair Accessory</li>
      </ul>

      <ul class="nextul">
        <li>Fragrances</li>
        <li>Perfume</li>
        <li>Deodorant</li>
        <li>Body Mist</li>
      </ul>
        </div>
        <div className="a2">
        <ul>
        <li>Appliances</li>
        <li>Hair Straightener</li>
        <li>Hair Dryer</li>
        <li>Epilator</li>
      </ul>

      <ul class="nextul">
        <li>Men's Grooming</li>
        <li>Trimmers</li>
        <li>Beard Oil</li>
        <li>Hair Wax</li>
      </ul>

      <ul class="nextul">
        <li>Beauty Gift & Makeup Set</li>
        <li>Beauty Gift</li>
        <li>Makeup Kit</li>
      </ul>

      <ul class="nextul">
        <li>Premium Beauty</li>
      </ul>

      <ul class="nextul">
        <li>Wellness & Hygiene</li>
      </ul>
        </div>
        <div
          className="a1"
          style={{
            paddingRight: "25px",
          }}
        >
           <ul>
        <li>Top Brands</li>
        <li>Lakme</li>
        <li>Maybelline</li>
        <li>LOreal</li>
        <li>Philips</li>
        <li>Bath & Body Works</li>
        <li>THE BODY SHOP</li>
        <li>Biotique</li>
        <li>Mamaearth</li>
        <li>MCaffeine</li>
        <li>Nivea</li>
        <li>Lotus Herbals</li>
        <li>LOreal Professionnel</li>
        <li>KAMA AYURVEDA</li>
        <li>M.A.C</li>
        <li>Forest Essentials</li>
      </ul>
        </div>
        
      </div>
    </div>
  </div>

  <div className="link1 ">
    <span
      className="link"
      style={{
        marginLeft: "3%",
        fontWeight: "bold",
        fontSize: "15px",
        textDecoration: "none",
        color: "#282C3F",
        paddingBottom: "25px",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginBottom: "-2%",
      }}
      // to="/Studio"
    >
      STUDIO<sup style={{
        color:"red"
      }}>NEW</sup>
    </span>
    <div
      className="down"
      style={{
        marginLeft: "-400px",
      }}
    >
      
       <img src={studio} style={{ width: "40%",marginTop:"10px", height: "500px", marginLeft:"30%" }} />

</div>
</div>

</Col>


         <Col xs={4} className="see mt-2">
                  <input type="text" placeholder="Search"
                  value={searchTerm}
                  style={{backgroundColor:"white"}}
                  onChange={(e) => setSearchTerm(e.target.value)} />
          </Col>

  <Col xs={2} className="mt-2 text-center d-flex">
      <div className="icon-container">
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "25px", marginRight: "5px" }} />
          <p style={{ fontSize: "15px" }}>Profile</p>
      </div>

      <div className="icon-container">
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px", marginRight: "5px" }} />
          <p style={{ fontSize: "15px" }}>Wishlist</p>
      </div>

      <div className="icon-container">
      <Link to={'/bag'} style={{color:"black", textDecoration:"none"}}>
          <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: "20px", marginRight: "5px" }} />
          <p style={{ fontSize: "15px" }}>Bag</p>
        </Link>  
      </div>

  </Col>
  </Row>         



    </Container>
    <div className='login bg-dark' style={{marginTop:"60px"}}>
    <h1 className='text-white text-center  p-3 '> SIGNIN FORM  </h1>
    <form  onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="email" 
          placeholder='User Name'          
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          placeholder='User Password'          
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <div>
        <label>Phone_No :</label>
        <input 
          type="phone" 
          placeholder='User Phone Number'          
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>
     
      <button type="submit" className='mt-2 w-50 text-center bg-info' style={{marginLeft:"13px",borderRadius:"25px"}}>Login   </button>  
      <div className=' text-end'>
    <a href="#" className='forgot-password text-primary'>Forget Password?</a>
  </div>
    </form>
    </div>


 
            </Container>
        </>
    );
}










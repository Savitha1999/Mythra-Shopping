import React , {useState , useEffect} from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../normal.css';


import logo from '../images/logo.jpeg';
import offer from '../images/offer.png';
import coupens from '../images/coupens.png';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import search from '../images/search.png';

import deal1 from '../images/deal1.png';
import deal2 from '../images/deal2.png';
import deal3 from '../images/deal3.png';
import deal4 from '../images/deal4.png';
import deal5 from '../images/deal5.png';
import deal6 from '../images/deal6.png';

// import wallet from '../images/wallet.jpg';
// import skincare from '../images/skincare.jpg';
// import pant from '../images/pant.jpeg';
// import tshirt from '../images/tshirt.jpg';
// import saree from '../images/saree.jpg';
// import bags from '../images/bags.jpg';
// import kurti from '../images/kurti.jpg';
// import jewellery from '../images/jewellery.jpg';
// import toys from '../images/toys.jpg';
// import books from '../images/books.jpg';
// import stationary from '../images/stationary.jpg';
// import cycle from '../images/cycle.jpg';
// import foundation from '../images/foundation.jpg';
// import bangle from '../images/bangle.jpg';
// import nail from '../images/nail.jpeg';
// import earrings from '../images/earring.jpeg';


import brands from '../images/brands.png';
import western from '../images/western.png';
import trending from '../images/trending.png';
import indian from '../images/indian.png';
import category from '../images/category.png';
import footwear from '../images/footwear.png';
import sports from '../images/sports.png';
import original from '../images/orginal.png';
import app from '../images/app.png';
import style1 from '../images/style1.png';
import style2 from '../images/style2.png';
import studio from '../images/studio.png';




export default function Home()
 {

    const [searchTerm, setSearchTerm] = useState(""); // State to store search term
   

    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
          <span key={interval}>
            {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]} {interval}{" "}
          </span>
        );
      });



    // Image data for different sections
    const mensImages = [
        { title: " ", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/29/00e27983-d373-4d86-9f25-3e46a18ec12a1690609817622-Top_casual_Styles-_Levi-s-_Tommy_Min_40.png"},
        { title: " ", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/3a834277-7c69-4e28-b50d-79a1a50fb4e81691079063461-image_png_762128704--1-.png" },
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png" },
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6ddcd2e5-20c6-4672-9b02-7d2117550f641691142512854-image_png242033865.png" } 
    ];

    const womensImages = [
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png" },
        { title: " ", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6366f7f4-3942-4cbc-af0d-3b63c0f9add71691142685532-image_png45885503.png" },
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png"},
        { title: "", image:"https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_223,c_limit,fl_progressive/w_223,h_293,q_50,dpr_2,fl_progressive/assets/images/2024/5/29/efd67c87-5949-491e-8319-463089d5f76d1716965725618-Card11.png" } 
    ];

    const kidsImages = [
        { title: "", image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/16/a8d21812-cc15-4272-a52b-1e9bc151d2921692168154190-ctt.jpg" },
        { title: "", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/16/b6faa8fc-9441-4cd2-b170-034165bec5371692167205209-aj2.jpg" },
        { title: "", image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/14/937f7591-3079-4e9c-9900-49d958495e131692015704516-bb1.jpg" },
        { title: "", image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/14/764a5b50-4da3-455f-abab-5efe3347d3511692004116109-sak.jpg" } 
    ];

    const BeautyImages = [
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw00vLeZTtuzxdBWLKVtPFjvH15CfGb13RWw&s"},
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_8VF1ScrkxPNfhFBFw6AYkU7TqHZZZeF25S8k8J4VKltQoaYocIPBarHKjiSAubccFA&usqp=CAU" },
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpc0bEaN2JKTAcG92KDMYlWsxBx2ePXK8YUJvyHPny5AXDlpvmb1DDpBmyt7W_9vud2Ug&usqp=CAU" },
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvDwoJ166IOQspcFJmk54n4GwTHZ06NwI1SafNlkZOS2YncVjPjg_vwCBrz0hOOjjP4E&usqp=CAU" }
    ];

    // Filter images based on searchTerm for each section
    const filteredMensImages = mensImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredWomensImages = womensImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredKidsImages = kidsImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredBeautyImages = BeautyImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


   

    return (
        <Container fluid className="app bg-white">
            <Container fluid className="top bg-light p-2">
                <Row>
                    <Col xs={1} className="mt-2">
                    <Link to={'/'} style={{color:"black", textDecoration:"none"}}>
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


               <Col xs={4} className="">
               {/* <FaSearch /> */}
                        <input type="text" placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </Col>

        <Col xs={2} className="mt-2 text-center d-flex">
            <div className="icon-container">
              <Link to={'/signup'} style={{color:"black", textDecoration:"none"}}>
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "25px", marginRight: "5px" }} />
                <p style={{ fontSize: "15px" }}>Profile</p>
                </Link>  
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


    {/* Main Content Section */}

            <Container fluid className="time text-center bg-white p-4">
            <div className="countdown">
      <span>Super Saver Sale Ends In</span>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
                <img src={offer} alt="Offer Deal" />
                <img src={coupens} alt="Coupens" />
            
                <Carousel controls={false} indicators={true} className="custom-carousel ">
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100 h-75 " src={slide1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500} >
                        <img className="d-block w-100 h-75" src={slide2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100 h-75" src={slide3} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100 h-75" src={slide4} alt="Fourth slide" />
                    </Carousel.Item>
                </Carousel>
            
 

        <Container fluid className="mt-5">
            <Carousel controls={false} indicators={true} className="carousel">
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100 h-75" src={style1} />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100 h-75" src={style2}  />
                    </Carousel.Item>
            </Carousel>
        </Container>
        </Container>


        <Container fluid className="bg-white mt-1">
          <h1 className="text-center p-4 mt-2 text-primary"> SHOP BY CATEGORY </h1>
          <Row>
            <Col xs={2}>
            <img src={deal1} style={{width:"85%"}} />
            </Col>
            <Col xs={2}>
            <img src={deal2} style={{width:"85%"}} />
            </Col>
            <Col xs={2}>
            <img src={deal3}  style={{width:"85%"}} />
            </Col>
            <Col xs={2}>
            <img src={deal4}  style={{width:"85%"}} />
            </Col>
            <Col xs={2}>
            <img src={deal5}  style={{width:"85%"}} />
            </Col>
            <Col xs={2}>
            <img src={deal6}  style={{width:"85%"}} />
            </Col>
          </Row>
        </Container>


 {/* MENS section */}
          <Container fluid className="mt-5 ">
                <h2 className="bg-info p-3 text-white">MENS</h2>
                <Container className="bg-light">
                  <Link to={'/mens'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="men">
                        { filteredMensImages.length > 0 ? (
                        filteredMensImages.map((item, index) => (
                            <Col xs={3} key={index}>
                                <img src={item.image} title={item.title} alt={`Mens ${item.title}`} />
                                <p>{item.title}</p>
                            </Col>
                        ))
                    ) : (
                        <p>No matching images found</p>
                        
                       ) }
                    </Row>
                    </Link>
                </Container>
            </Container>

            {/* WOMENS section */}
            <Container fluid className="mt-3">
                <h2 className="bg-info p-3 text-white">WOMENS</h2>
                <Container className="bg-light">
                  <Link to={'/womens'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="women">
                        { filteredWomensImages.length > 0 ? ( 
                        filteredWomensImages.map((item, index) => (
                            <Col xs={3} key={index}>
                                <img src={item.image} title={item.title} alt={`Womens ${item.title}`} />
                                <p>{item.title}</p>
                            </Col>
                        ))
                    ):(
                        <p>No matching images found</p>

                    )}
                    </Row>
                    </Link>
                </Container>
            </Container> 

            {/* KIDS section */}
            <Container fluid className="mt-3">
                <h2 className="bg-info p-3 text-white">KIDS</h2>
                <Container className="bg-light">
                <Link to={'/kids'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="kids">                   
                        {  filteredKidsImages.length > 0 ? (
                        filteredKidsImages.map((item, index) => (
                            <Col xs={3}    key={index}>
                                <img src={item.image} title={item.title} alt={`Kids ${item.title}`} />
                                <p>{item.title}</p>
                            </Col>
                        ))
                    ):(
                        <p>No matching images found</p>
                    )}
                    </Row>
                    </Link>
                </Container>
            </Container>

              {/* BEAUTY section */}
              <Container fluid className="mt-3" >
                <h2 className="bg-info p-3 text-white">BEAUTY</h2>
                <Container className="bg-light">
                  <Link to={'/beauty'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="beauty">
                        {  filteredBeautyImages.length > 0 ? (
                        filteredBeautyImages.map((item, index) => (
                            <Col xs={3} key={index}>
                                <img src={item.image} title={item.title} alt={`Beauty ${item.title}`} />
                                <p>{item.title}</p>
                            </Col>
                        ))
                    ):(
                        <p>No matching images found</p>
                    )}
                    </Row>
                    </Link>
                </Container>
            </Container>

            <Container fluid className="trends">
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN ACCESSORIES </h3>
                    <img src={trending} alt="trending ACCESSORIES" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > EXPLORE TOP BRANDS </h3>
                    <img src={brands} alt="brands" />               
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > CATEGORIES TO BAG </h3>
                    <img src={category}  alt="categories" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN WESTERN WEAR </h3>
                    <img src={western} alt="western wear" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" >TRENDING IN INDIAN WEAR</h3>
                    <img src={indian} alt="indian trending" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN SPORTS WEAR </h3>
                    <img src={sports}  alt="sports wears" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN FOOTWEAR </h3>
                    <img src={footwear}  alt="footwears" />
                </Row>

           </Container>


{/* FOOTER SECTION */}
            <Container fluid className="footer p-3 text-center bg-light mt-5">
             
              <Container>
                <Row>
                    <Col xs={3}>
                    <h5> ONLINE SHOPPING </h5>

                    <ul>
                        <li> MENS </li>
                        <li> WOMENS </li>
                        <li> KIDS </li>
                        <li> BEAUTY </li>
                        <li> HOME & LIVING </li>
                        <li> STUDIO </li>
                    </ul>

                    </Col>

                    <Col xs={3}>
                    <h5> CUSTOMER POLICIES </h5>
                    
                    <ul>
                    <li> Contact Us</li>
                    <li> FAQ </li>
                    <li> T&C </li>
                    <li> Terms Of Uses </li>
                    <li> Track Orders </li>
                    <li> Shipping </li>
                    <li> Canclellation </li>
                    <li> Returns </li>
                    <li> Privacy Policy </li>
                    <li> Grienance Officer </li>
                    </ul>

                    </Col>

                    <Col xs={3}>
                    <h5> EXPERIENCE MYNTRA APP ON MOBILE </h5>
                    <img src={app} />
                    </Col>

                    <Col xs={3}>
                    <img src={original} alt="guarantee all products" />
                    </Col>
                </Row>
               <Row>
                <h4 className="text-primary "> POPULAR SEARCHES </h4>
                <hr></hr>
                <p>
                    Kurta Pajama | Leather Jackets | Sherwani | Shirts | T-Shirts |
                Waistcoat | Photo Frames | Denim Shirts | Blazers | Mirror | Bags |
                Jackets | Blouse Designs | Crop Tops | Mysore Silk Saree | Kids Lehenga
                | Suit Design | Lehenga | Girl Dungarees | Top for Girl | Top for Girl |
                Lingerie | Gowns | Saree | Kids Ethnic Wear | Sweaters | Boys Games |
                Barbie Doll | Shoes For Men | Cricket Shoes | Lipstick | Make Up Kit |
                Fastrack Watches | Casual Shoes | Online Shopping | Dresses | Babydolls
                | Eye Makeup | Car Games | Nike Shoes | Puma | United Colors of Benetton
                | Fastrack | Watches | Backpacks | Men Kurtas | Titan Watches               
                </p>
                <hr ></hr>
               </Row>
               </Container>
               
                <Row className="mt-2">
                    <Col xs={3} className="mt-2">
                    <p> In case of any concern, <span className="text-primary"> Contact Us </span>  </p>
                    </Col>

                    <Col xs={3} >
                    <i className="fa-brands fa-twitter p-2 "></i>           
                    <i className="fa-brands fa-facebook p-2"></i>
                    <i className="fa-brands fa-youtube p-2"></i>
                    <i className="fa-brands fa-instagram p-2"></i>
                    </Col> 

                    <Col xs={3} className="mt-2">
                    <p> © 2024 www.myntra.com. All rights reserved. </p>
                    </Col>

                    <Col xs={3} className="mt-2">
                    <p> A Flipkart company </p>
                    </Col>
                    <hr></hr>
                </Row>

                <Row>
                    <Col xs={6}>
                    <h5> Registered Office Address </h5>
                    <br/> 
                    <address style={{textAlign:"left"}}>
                        Buildings Alyssa, <br />
                        Begonia and Clover situated in Embassy Tech Village, <br />
                        Outer Ring Road, <br />
                        Devarabeesanahalli Village, <br />
                        Varthur Hobli, <br />
                        Bengaluru – 560103, India
                    </address>
                    </Col>

                    <Col xs={6} className="mt-5">
                    <p> CIN: U72300KA2007PTC041799 </p>
                    <p> TelePhone : <span> +91-80-61561999 </span> </p>
                    </Col>
                    <hr></hr>
                </Row>


            </Container>

            
        </Container>
    );
}

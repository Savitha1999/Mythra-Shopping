import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import '../normal.css';

import logo from '../images/logo.jpeg';
import ts1 from '../images/ts1.png';
import original from '../images/orginal.png';
import app from '../images/app.png';
import ts2 from '../images/ts2.png';
import ts3 from '../images/ts3.png';
import ts4 from '../images/ts4.png';
import rate1 from '../images/rate1.png';
import more1 from '../images/more1.png';
import studio from '../images/studio.png';
import star from '../images/star.png';


export default function Mens() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [showBagNotification, setShowBagNotification] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const [sizes] = useState(["S", "M", "L", "XL"]);

    useEffect(() => {
        if (showBagNotification) {
            const timer = setTimeout(() => {
                setShowBagNotification(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showBagNotification]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };



    const handleAddToBag = () => {
      if (selectedSize) {
          const newItem = {
              id: Date.now(), 
              size: selectedSize,
              price: 899, 
              image: ts1, 
              brand: "Moda Rapido", 
              description: "Men Black & White Printed Round Neck T-shirt",
              code: "2378356",
              seller: "Truenet Commerce",
          };

          const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
          const updatedCartItems = [...existingItems, newItem];
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

          setCartItems(updatedCartItems);
          setShowBagNotification(true);
      }
      else {
          alert("Please select a size.");
      }
  };



    return (
        <Container fluid className="app bg-white">
            <Container fluid className="top bg-light p-2">
                <Row>
                    <Col xs={1} className="mt-2">
                        <Link to={'/'} style={{ color: "black", textDecoration: "none" }}>
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
                    <Col xs={4} className="see">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Col>
                    <Col xs={2} className="mt-2 text-center d-flex">
                        <div className="icon-container">
                            <Link to={'/signup'} style={{ color: "black", textDecoration: "none" }}>
                                <FontAwesomeIcon icon={faUser} style={{ fontSize: "25px", marginRight: "5px" }} />
                                <p style={{ fontSize: "15px" }}>Profile</p>
                            </Link>
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px", marginRight: "5px" }} />
                            <p style={{ fontSize: "15px" }}>Wishlist</p>
                        </div>
                        <div className="icon-container">
                            <Link to={"/bag"} style={{ color: "black", textDecoration: "none" }}>
                                <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: "20px", marginRight: "5px" }} />
                                {cartItems.length > 0 && (
                                    <Badge className="ml-1" bg="danger">
                                        {cartItems.length}
                                    </Badge>
                                )}
                                <p style={{ fontSize: "15px" }}>Bag</p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>


            {/* MENS SECTION */}

            <Container fluid className="purchase bg-white mt-3">
    <Row>
        <Col xs={12} md={4} lg={3} className="mb-3">
            <img src={ts1} className="img-fluid" alt="T-shirt 1" />
        </Col>
        <Col xs={12} md={4} lg={3} className="mb-3">
            <img src={ts2} className="img-fluid" alt="T-shirt 2" />
        </Col>
        <Col xs={12} md={12} lg={6} className="p-2">
            <h2 className="text-primary"><b>Moda Rapido</b></h2>
            <p>Men Black & White Printed Round Neck T-shirt</p>
            <img src={rate1} className="img-fluid" style={{ width: "150px" }} alt="Rating" />
            <hr />
            <p>MRP <span><FaRupeeSign />899</span></p>
            <h6 className="text-success">inclusive of all taxes</h6>
            <br />
            <p>MORE COLOR</p>
            <img src={more1} className="img-fluid" style={{ width: "100px" }} alt="More Colors" />
        </Col>
    </Row>

    <Row className="mt-4">
        <Col xs={12} md={4} lg={3} className="mb-3">
            <img src={ts3} className="img-fluid" alt="T-shirt 3" />
        </Col>
        <Col xs={12} md={4} lg={3} className="mb-3">
            <img src={ts4} className="img-fluid" alt="T-shirt 4" />
        </Col>
        <Col xs={12} md={12} lg={6}>
            <h5 style={{ color: "purple", fontStyle: "italic" }}>
                SELECT SIZE <IoIosArrowForward style={{ marginBottom: "5px" }} />
            </h5>
            {sizes.map((size, index) => (
                <Button
                    className="text-dark"
                    key={index}
                    style={{ borderRadius: "55%", marginRight: "10px" }}
                    onClick={() => handleSizeSelect(size)}
                    variant={selectedSize === size ? "info" : "outline-info"}
                >
                    {size}
                </Button>
            ))}
            <br /> <br />
            <Button
                style={{ width: "100%", maxWidth: "200px", padding: "13px", backgroundColor: "rgb(245, 43, 184)", border: "none" }}
                onClick={handleAddToBag}
            >
                <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: "8px" }} /> ADD TO BAG
            </Button>{' '}
            <Button style={{ width: "100%", maxWidth: "200px", padding: "13px", color: "black", border: "1px solid black" }} variant="light">
                <FaRegHeart style={{ marginRight: "8px", marginBottom: "4px" }} /> WISHLIST
            </Button>
            <br /> <br />
            <hr />
            <h3>Delivery Option <CiDeliveryTruck /></h3>
            <input type="text" placeholder="Enter Your PinCode" style={{ width: "100%", maxWidth: "300px", padding: "10px", border: "2px solid grey" }} />
            <h6 className="mt-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
            <br />
            <p style={{ fontWeight: "normal" }}>100% Original Products</p>
            <p style={{ fontWeight: "normal" }}>Pay on delivery might be available</p>
            <p style={{ fontWeight: "normal" }}>Easy 14 days returns and exchanges</p>
            <br />
            <h4>BEST OFFERS <MdOutlineLocalOffer /></h4>
            <h5>Best Price: <span style={{ color: "orangered" }}>Rs.1329</span></h5>
            <ul>
                <li> <GoDotFill /> Coupon code: <b> MYNTRA400 </b> </li>
                <li> <GoDotFill /> Coupon Discount: Rs. 400 off (check cart for final savings) </li>
                <li> <GoDotFill /> Applicable on: Orders above Rs. 1099 (only on first purchase) </li>
            </ul>

            <h4>PRODUCT DETAILS <BiDetail style={{ marginBottom: "5px" }} /> </h4>
            <p style={{ fontWeight: "normal" }}>Black and white printed T-shirt, has a round neck, long sleeves</p>
            <h5>Size & Fit</h5>
            <p style={{ fontWeight: "normal" }}>The model (height 6') is wearing a size M</p>
            <h5>Material & Care</h5>
            <p style={{ fontWeight: "normal" }}>Cotton</p>
            <p style={{ fontWeight: "normal" }}>Machine-wash</p>
            <br />
            <h4>Specifications</h4>
        </Col>
    </Row>

    <Row>
        <Col xs={12} md={6} className="mb-3">
        </Col>
        <Col xs={12} md={6} className="p-4">
            <p style={{ fontWeight: "normal" }}>Fabric</p>
            <h6>Cotton</h6>
            <hr />
            <p style={{ fontWeight: "normal" }}>Length</p>
            <h6>Regular</h6>
            <hr />
            <p style={{ fontWeight: "normal" }}>Multi Pack Set</p>
            <h6>Single</h6>
            <hr />
            <p style={{ fontWeight: "normal" }}>Occasion</p>
            <h6>Casual</h6>
            <hr />
          
        </Col>
        </Row>

        <Row>
        <Col xs={12} md={6} className="mb-3">
        </Col>
        <Col xs={12} md={6} className="p-4">
            <p style={{ fontWeight: "normal" }}>Fit</p>
            <h6>Regular Fit</h6>
            <hr />
            <p style={{ fontWeight: "normal" }}>Main Trend</p>
            <h6>Abstract</h6>
            <hr />
            <p style={{ fontWeight: "normal" }}>Neck</p>
            <h6>Round Neck</h6>
            <hr />
            <p style={{ fontWeight: "normal" }}>Pattern</p>
            <h6>Printed</h6>
            <hr />
            <p style={{ color: "red" }}>See More</p>
        </Col>
    </Row>

    <Row>
        <Col xs={12} md={6} className="mb-3">
        </Col>
        <Col xs={12} md={6}>
            <h4>Rating <FaRegStar /> </h4>
            <img src={star} className="img-fluid" style={{ width: "50%" }} alt="Rating" />
            <hr />
            <p style={{ color: "red" }}>View All 5495 Reviews</p>
            <h5>Product Code: 2378356</h5>
            <p style={{ fontWeight: "normal" }}>
                Seller: <span style={{ color: "rgb(245, 43, 184)", fontWeight: "bold" }}>Truenet Commerce</span>
            </p>
            <p>View Supplier Information</p>
        </Col>
    </Row>
</Container>

{showBagNotification && (
    <div
        className="bag-notification"
        style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1000
        }}
    >
        Item added to bag!
    </div>
)}

        {/* </Container> */}



{/* Footer Section */}

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

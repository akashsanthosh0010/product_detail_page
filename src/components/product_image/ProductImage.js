import { useEffect, useState } from 'react';
import './ProductImage.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBoltLightning, faHeart, faCartShopping, faList, faClock, faLocationDot, faGreaterThan } from '@fortawesome/free-solid-svg-icons';



function ProductImage() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  //for slider
  useEffect(() => {
    const slider_up = document.querySelector('.slider-up')
    const slider_down = document.querySelector('.slider-down')
    const slides = Array.from(document.querySelectorAll('.slide'))
    slider_up?.addEventListener('click', () => {
      slides[0].scrollIntoView({behavior: 'smooth', block: 'nearest'})
    })
    slider_down?.addEventListener('click', () => {
      slides[slides.length-1].scrollIntoView({behavior: 'smooth', block: 'nearest'})
    })
  })
  //To fetch data
  useEffect(() => {
    axios.post('https://coralperfumes.cloud6.ae/coral-api/get_product_variants/ck-beauty-sheer-for-women-eau-de-toilette-100ml/')
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setError(error);
      });
  }, []);

  if (error) return <div>Error: {error.message}</div>;


  if (!productData) return <div>Loading...</div>;
  
  
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row' id='row1'>
          <div className='col-lg-7 col-md-8 col-sm-12 colour-brown'>
            <div className='row thumbnail-row thumbnail-row-1 thumbnail-row-2'>
              <div className='col-lg-3 col-md-2 col-sm-12 product-varients'>
              <button className='slider-button slider-up'>
                  <FontAwesomeIcon icon={faGreaterThan} className='icon-up' />
                </button>
                <div className='slider'>
                  <div className='slide'>
                    <img src='https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711090759.webp'></img>
                  </div>
                  <div className='slide'>
                  <img src='https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711090759.webp'></img>
                  </div>
                  <div className='slide'>
                  <img src='https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711090759.webp'></img>
                  </div>
                  <div className='slide'>
                  <img src='https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711090759.webp'></img>
                  </div>
                  <div className='slide'>
                  <img src='https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711090759.webp'></img>
                  </div>
                </div>
                <button className='slider-button slider-down'>
                  <FontAwesomeIcon icon={faGreaterThan} className='icon-down' />
                </button>
              </div>
              <div className='col-lg-9 col-md-10 col-sm-12 thumbnail'>
                <h1></h1>
              <img src='https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711090759.webp' className='main-image' alt="Product Listing Image"></img>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-4 col-sm-12 productdetails'>
            <div className='product-details'>
                <h5 className='product-title'>{productData.product_data.category_products[1].name}</h5>
                <a href='#'><p className='provider'>By Coral Perfumes</p></a>
                <h5 className='price'><span className='new-price'>AED {productData.product_data.category_products[1].price_amount}</span><span className='old-price'>AED {productData.product_data.category_products[1].original_amount}</span><span className='offer'>{productData.product_data.category_products[1].discount_percentage}% OFF</span><span className='icon-wish'><FontAwesomeIcon icon={faHeart} /></span></h5>
                <p>VAT Included</p>
                <button className='btn btn-dark add-to-bag'>ADD TO BAG <span className='icon-bag'><FontAwesomeIcon icon={faBagShopping} /></span></button>
                <button className='count-button btn-increment'>+</button>
                <input className='value' placeholder='1'/>
                <button className='count-button btn-decrement'>-</button>
                <p className='select-size'>Select Size</p>
                <button className='btn btn-dark varient-button'>100ml AED 900 <span className='old_price'>AED 1000</span></button>
                <button className='btn btn-light varient-button-2'>200ml AED 1000 <span className='old_price'>AED 1500</span></button>
                <p className='select-cent'>Select Scent</p>
                <button className='btn btn-dark cent-button'>EDP</button>
                <button className='btn btn-light cent-button-1'>EDT</button>
                <button className='btn btn-light cent-button-2'>PARF</button>
            </div>
            <div className='flashsale'>
                <div className='column'>
                  <h5 className='flash-sale'>FLASH SALE<span className='icon-thunder'><FontAwesomeIcon icon={faBoltLightning} /></span></h5>
                  <p className='limited_offer'>Limited Time Offer</p>
                  <h6 className='ends-in'>Ends In</h6>
                </div>
                <div className='timer-row'>
                  <div className='times'>
                    <div className='timer timer1'>08</div>
                    <span className='time'>Hours</span>
                  </div>
                  <span className='colon'>:</span>
                  <div className='times'>
                    <div className='timer timer2'>00</div>
                    <span className='time'>Minitues</span>
                  </div>
                  <span className='colon'>:</span>
                  <div className='times'>
                    <div className='timer timer3'>00</div>
                    <span className='time'>Seconds</span>
                  </div>
                </div>
            </div>
            <div className='checkout'>
              <p className='pick-from-store'><span className='icon-cart'><FontAwesomeIcon icon={faCartShopping} /></span>Pick from Store and Save Delivery Fee</p>
              <p className='choose-checkout'><span className='icon-list'><FontAwesomeIcon icon={faList} /></span>Choose At Checkout</p>
            </div>
            <div className='intrest-tabby'>
                <span>
                  <img src='https://www.pfgrowth.com/wp-content/uploads/2023/03/tabby-logo-1.png' className='tabby'></img>
                </span>
                <h6 className='payment-tabby'>4 interest-Free Payments of 50 AED</h6>
            </div>
            <div className='intrest-tamara'>
                <span>
                  <img src='https://iconape.com/wp-content/files/ei/387896/png/387896.png' className='tamara'></img>
                </span>
                <h6 className='payment-tamara'>3 interest-Free Payments of 100 AED</h6>
            </div>
            <div className='deliver'>
              <p className='recive-order'><span className='icon-timer'><FontAwesomeIcon icon={faClock} /></span>Recive Your order today, jan 23</p>
              <p className='deliver-to-dubai'><span className='icon-location'><FontAwesomeIcon icon={faLocationDot} /></span>Deliver to dubai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImage;


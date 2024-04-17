import React from 'react'
import './ProductDescription.css'

export const ProductDescription = () => {
return (
    <div className='description'>
        <div className='row desc-row'>
            <div className='col-lg-7 col-md-8 col-sm-12 desc'>
                <h2 className='heading text-start'>
                    DESCRIPTION
                </h2>
                <p className='product-description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
            <div className='col-lg-5 col-md-4 col-sm-12'>
                <h2 className='heading text-start'>
                    PRODUCT DETAILS
                </h2>
                    <div className='details'>
                    <ul className='product-details-list'>
                        <li>SKU:1L019Z100MC2151</li>
                        <li>Colour:Black</li>
                        <li>Made in Italy</li>
                        <li>Designer:Casadei</li>
                    </ul>
                    <ul className='product-details-list'>
                        <li>Fragrance Type</li>
                        <li>Bottle Size: 11cm</li>
                        <li>Quantity 100ml - 200ml</li>
                    </ul>
                    </div>
            </div>
        </div>
    </div>
  )
}
export default ProductDescription
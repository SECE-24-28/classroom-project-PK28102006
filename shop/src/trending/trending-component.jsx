import React from 'react';
import { TrendingWrapper } from './trending-style';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';

const Trending = () => {
  const products = [
    {
      id: 1,
      name: 'Oxford Leatherette Sofa',
      desc: 'Minimalist Scandinavian frame paired with breathable.',
      price: '₹18,999',
      original: '₹25,000',
      discount: '24% Off',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 2,
      name: 'Breeze Wooden Swing Bed',
      desc: 'Handcrafted teak swing bed with premium rope detailing.',
      price: '₹25,000',
      original: '₹50,000',
      discount: '50% Off',
      image: 'https://i.pinimg.com/736x/38/e0/04/38e00450026670d8aefff1bb1a6d3633.jpg'
    }
  ];

  return (
    <TrendingWrapper id="trending">
      <div className="header">
        <h2>Trending Products</h2>
        <p>Tried, trusted, and loved</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <button className="nav-btn left"><ChevronLeft size={20} /></button>
              <img src={product.image} alt={product.name} />
              <button className="nav-btn right"><ChevronRight size={20} /></button>
            </div>
            
            <div className="info">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              
              <div className="price-row">
                <div className="price">
                  {product.price} <span className="original">{product.original}</span>
                </div>
                <div className="discount">
                   <Tag size={12} style={{marginRight: '4px', display:'inline-block'}} />
                   {product.discount}
                </div>
              </div>

              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </TrendingWrapper>
  );
};

export default Trending;

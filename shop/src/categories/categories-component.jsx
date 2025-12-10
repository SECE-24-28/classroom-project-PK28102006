import React from 'react';
import { CategoriesWrapper } from './categories-style';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Dining Sets', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2664&auto=format&fit=crop' },
    { name: 'Sofas & Seating', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Beds & Mattresses', image: 'https://i.pinimg.com/736x/ba/bb/d7/babbd77dfb14b23d0a3714d3e644345a.jpg' }
  ];

  return (
    <CategoriesWrapper id="explore">
      <div className="header">
        <h2>Explore Our Categories</h2>
        <p>Start building the home you've always imagined</p>
      </div>
      
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <div className="overlay">
              <span>{cat.name}</span>
              <div className="arrow-icon">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </CategoriesWrapper>
  );
};

export default Categories;

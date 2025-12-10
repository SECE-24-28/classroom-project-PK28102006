import styled from 'styled-components';

export const TrendingWrapper = styled.section`
  padding: 80px 60px;
  background-color: #FFFFFF;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  .header {
    margin-bottom: 50px;
    
    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #2D2D2D;
      margin-bottom: 8px;
    }
    
    p {
      color: #777;
    }
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .product-card {
    background: #FFF;
    border-radius: 12px;
    overflow: hidden;
    /* box-shadow: 0 4px 20px rgba(0,0,0,0.05); */
    border: 1px solid #eee;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      transform: translateY(-5px);
    }

    .image-container {
      position: relative;
      height: 350px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .nav-btn {
        position: absolute;
        bottom: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        z-index: 10;
        
        &.left { left: 20px; }
        &.right { right: 20px; }
        
        &:hover {
          background: #F49D37;
          color: white;
        }
      }
    }

    .info {
      padding: 24px;

      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #2D2D2D;
        margin-bottom: 8px;
      }

      p {
        color: #777;
        font-size: 0.95rem;
        margin-bottom: 20px;
        line-height: 1.5;
      }

      .price-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;

        .price {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2D2D2D;

          .original {
            font-size: 0.9rem;
            text-decoration: line-through;
            color: #999;
            margin-left: 8px;
            font-weight: 400;
          }
        }

        .discount {
          background-color: #E8F7F0;
          color: #00B266;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
        }
      }

      .shop-btn {
        width: 100%;
        padding: 12px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: #000;
        }
      }
    }
  }
`;

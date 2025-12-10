import styled from 'styled-components';

export const CategoriesWrapper = styled.section`
  padding: 60px 60px;
  background-color: #FFFFFF;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  .header {
    margin-bottom: 40px;
    
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #2D2D2D;
      margin-bottom: 8px;
    }
    
    p {
      color: #777;
      font-size: 0.95rem;
    }
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .category-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .overlay {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.9);
      padding: 15px 20px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      span {
        font-weight: 600;
        color: #2D2D2D;
        font-size: 0.95rem;
      }

      svg {
        color: #2D2D2D;
      }
    }
  }
`;

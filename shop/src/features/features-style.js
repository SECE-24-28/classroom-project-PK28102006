import styled from 'styled-components';

export const FeaturesWrapper = styled.section`
  padding: 60px 60px;
  background-color: #FFF8F0; /* Light cream background */
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  .features-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .icon {
      margin-bottom: 16px;
      color: #2D2D2D;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: #2D2D2D;
      margin-bottom: 6px;
    }

    p {
      color: #777;
      font-size: 0.85rem;
    }
  }
`;

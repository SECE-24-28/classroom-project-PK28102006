import styled from 'styled-components';

export const ShopNowWrapper = styled.div`
  display: flex;
  background: linear-gradient(180deg, #FEF4E9 0%, #FFFFFF 100%);
  min-height: 500px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .content {
    flex: 1;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    z-index: 2;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 30px;
      align-items: center;
      text-align: center;
    }
  }

  .title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #2D2D2D;
    margin-bottom: 32px;

    span {
      color: #F68F1E;
    }

    @media (max-width: 1024px) {
      font-size: 2.8rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .subtitle {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 32px;
    max-width: 450px;
    line-height: 1.6;
  }

  .button-group {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
    }
  }

  .button {
    padding: 12px 28px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s ease;
    font-family: inherit;
    background-color: transparent;
    color: #2D2D2D;
    border: 2px solid #ccc;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      background-color: #fff;
      border-color: #888;
    }

    &.primary {
      background-color: #2D2D2D;
      color: #FFFFFF;
      border: 2px solid #2D2D2D;

      &:hover {
        background-color: #000;
        border-color: #000;
      }
    }
  }

  .image-wrapper {
    flex: 1;
    height: 100%;
    min-height: 500px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 300px;
      border-bottom-left-radius: 300px;
      
      @media (max-width: 768px) {
         border-radius: 0;
         height: 300px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      min-height: auto;
    }
  }
`;

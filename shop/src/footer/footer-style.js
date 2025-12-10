import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #1A1A1A;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  padding: 80px 60px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px 20px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
    border-bottom: 1px solid #333;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 40px;
    }

    .brand {
      max-width: 300px;
      
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 24px;
        font-size: 1.25rem;
        font-weight: 700;

        svg {
          color: #F68F1E;
        }
      }

      p {
        color: #999;
        font-size: 0.9rem;
        line-height: 1.6;
      }
    }

    .links-section {
      display: flex;
      gap: 60px;

      @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 40px;
      }

      .column {
        display: flex;
        flex-direction: column;
        
        h4 {
          font-size: 0.95rem;
          margin-bottom: 24px;
          color: #FFF;
        }

        a {
          color: #999;
          text-decoration: none;
          margin-bottom: 12px;
          font-size: 0.85rem;
          transition: color 0.2s;

          &:hover {
            color: #F68F1E;
          }
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    color: #666;
    font-size: 0.75rem;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .legal-links {
      display: flex;
      gap: 24px;
      
      a {
        color: #666;
        text-decoration: none;
        &:hover { color: #FFF; }
      }
    }

    .social-links {
      display: flex;
      gap: 20px;
      
      a {
        color: #999;
        transition: color 0.2s;
        
        &:hover {
          color: #FFF;
        }
      }
    }
  }
`;

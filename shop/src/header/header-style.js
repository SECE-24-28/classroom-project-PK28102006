import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #FEF4E9; /* Matching the hero section background start */
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #2D2D2D;
    cursor: pointer;

    svg {
        color: #F68F1E;
    }
  }

  .nav-links {
    display: flex;
    gap: 40px;

    @media (max-width: 900px) {
      display: none; /* Mobile menu to be implemented if requested, hiding for simplicity now */
    }

    a {
      text-decoration: none;
      color: #2D2D2D;
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.2s;

      &:hover {
        color: #F68F1E;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 20px;

    .sign-in {
      text-decoration: none;
      color: #2D2D2D;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
        
      &:hover {
        color: #F68F1E;
      }
    }

    .register-btn {
      padding: 10px 24px;
      background-color: #2D2D2D;
      color: #FFFFFF;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: #000;
      }
    }
  }
`;

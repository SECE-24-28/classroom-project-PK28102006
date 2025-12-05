import styled from "styled-components";

export const TrustedByStyle = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 32px;
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
  }

  .parent {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-family: "Work Sans", sans-serif;
    gap: 40px;
  }

  .child {
    position: relative;
    width: 230px;
    height: 230px;
    display: flex;
    flex-direction: column;
    font-family: "Work Sans", sans-serif;
    align-items: center;
  }

  
 .icon{
     font-size: 1.5em;
 }


  /* WHITE BOX */
  .contentBox {
    width: 100%;
    height: 170px;
    background: white;
    border-radius: 15px;
    margin-top: 40px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }

  /* NUMBER */
  .numbers {
    font-size: 38px;
    font-weight: 700;
    color: #6b6b6b;
  }

  /* LABEL */
  .details {
    font-size: 16px;
    font-weight: 600;
    color: #6b6b6b;
    margin-top: 5px;
  }

  /* TEAL SHADOW BOX UNDER CARD */
  .shadowBox1 {
   border-radius: 10px;
    height: 50%;
    width: 110%;
    z-index: -1;
    right: 10px;
    left: -11px;
    background-color: rgb(0, 197, 190);
    position: absolute;
    bottom: 5px;
    top: 130px;
  }
    .shadowBox2 {
    border-radius: 10px;
    height: 50%;
    width: 110%;
    z-index: -1;
    right: 10px;
    left: -11px;
    background-color: rgb(0, 189, 235);
    position: absolute;
    bottom: 5px;
    top: 130px;
  }
    .shadowBox3 {
    border-radius: 10px;
    height: 50%;
    width: 110%;
    z-index: -1;
    right: 10px;
    left: -11px;
    background-color: rgb(243, 176, 79);
    position: absolute;
    bottom: 5px;
    top: 130px;
  }
    .shadowBox4 {
    border-radius: 10px;
    height: 50%;
    width: 110%;
    z-index: -1;
    right: 10px;
    left: -11px;
    background-color: rgb(255, 107, 107);
    position: absolute;
    bottom: 5px;
    top: 130px;
  }
`;
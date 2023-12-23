import React, { useState } from "react";
import styled from "styled-components";

// Renk ve stil değişkenleri
const $blue = "#29b6f6";
const $green = "#9ccc65";
const $purple = "#BA68C8";
// ... Diğer renkler

// Styled Components kullanarak CSS'i tanımla
const CardContainer = styled.div`
  position: relative;
  width: 30rem;
  height: 15rem;
  perspective: 150rem;
  // Diğer stilleri buraya ekle
`;

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  return (
    <CardContainer
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={flipCard}
    >
      <div className="card-front">
        {/* Front içeriği buraya gelebilir */}
        <span className="variable this">this</span>
        <span>.</span>
        <span className="method addEventListener">addEventListener</span>
        {/* ... Diğer front içeriği */}
      </div>
      <div className="card-back">
        {/* Back içeriği buraya gelebilir */}
        <span className="variable const">const</span>
        {/* ... Diğer back içeriği */}
      </div>
    </CardContainer>
  );
};

export default Card;

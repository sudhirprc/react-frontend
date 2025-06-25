import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ButtonContainer onClick={scrollToTop} $isVisible={isVisible}>
      <FaArrowUp />
    </ButtonContainer>
  );
};

export default BackToTopButton;

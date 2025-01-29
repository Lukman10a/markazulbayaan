import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const Button: React.FC = () => {
  return (
    <StyledButton>
      Contact
      <FaArrowRight className="icon" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid #e8ac04;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background: #e8ac04;
    box-shadow: 0 0 30px 5px #e8ac04;
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    animation: sh02 0.5s linear;
  }

  &::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
      left: 100%;
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }

  .icon {
    transition: color 0.2s ease-in;
  }

  &:hover .icon {
    color: black;
  }
`;

export default Button;

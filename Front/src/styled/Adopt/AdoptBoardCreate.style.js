import styled from "styled-components";

export const Container = styled.div`
  border: 1px #ff914d solid;
  border-radius: 30px;
  padding: 2vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  background-color: white;
`;

export const TitleInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.5vw;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) =>
      `${Math.max(
        33,
        props.valueLength
      )}%`}; // 1/3로 시작해서 입력 값에 따라 증가
    height: 1px;
    background-color: #ff914d;
    transition: width 0.3s;
  }
`;

export const TitleInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-left: 1vw;

  &::placeholder {
    color: #ccc;
  }
`;

export const ContentBox = styled.div`
  margin-top: 1vw;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 0.5vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  flex: 1;
  margin-right: 1vw;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5vw; // 원하는 세로 간격을 추가
  }
`;

export const Span = styled.span`
  color: rgba(255, 145, 77, 1);
`;

export const DogTextarea = styled.textarea`
  margin-top: 1%;
  margin-bottom: 1%;
  border: 1px #ff914d solid;
  border-radius: 30px;
  width: 100%;
  height: 11vw;
  padding: 2%;
  resize: none; /* Prevent textarea resizing */


  /* Style for the placeholder text */
  &::placeholder {
    color: rgba(255, 145, 77, 0.5);
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #ff914d;
  padding: 0.5vw 1vw;
  border-radius: 30px;
  color: white;
  margin-top: 0.5vw;
  left: 50%;
  transform: translateX(-50%); /* Add this to center the button horizontally */
  position: relative; /* Add this to enable the horizontal centering */

  /* Additional styles (optional) */
  display: block;
  width: fit-content;
  cursor: pointer;
`;

export const SamllText = styled.span`
  font-size: small;
  color: ${(props) =>
    props.charCount >= 100
      ? "rgba(255, 145, 77, 0.5)"
      : "#ccc"}; // desiredColor를 원하는 색상 값으로 변경하세요.
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2vw;
`;

export const Warning = styled.div`
  color: red;
  font-size: small;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 5px; //간격 조절

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 9.7vw;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 0.5vw;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -75px;

  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

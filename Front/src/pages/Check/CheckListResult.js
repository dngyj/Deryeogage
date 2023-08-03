import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// styled-components 추가
const ResultContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const PledgeContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const TotalScore = styled.h2`
  margin-bottom: 20px; // 추가된 스타일
`;

const ToggleButton = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function CheckListResult() {
  // 답변을 표시할지 결정하는 상태 추가
  const [showAnswers, setShowAnswers] = useState(false);
  const [data, setData] = useState({ score: "", promise: "" });

  useEffect(() => {
    // 토큰은 어떤 방식으로 저장되어 있는지에 따라 가져오는 방식이 달라집니다.
    // 아래의 코드는 localStorage에 'token' 이름으로 저장되어 있다고 가정한 것입니다.
    const token = localStorage.getItem("accessToken");

    axios
      .get(`${process.env.REACT_APP_API_URL}/pretests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData({ score: response.data.data.score, promise: response.data.data.promise });
        console.log(response)
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  const handleToggleClick = () => {
    setShowAnswers(!showAnswers);
  };
  console.log(data)

  return (
    <div>
      <h1>CheckListResult</h1>
      <ResultContainer>
        <TotalScore>총점: {data.score} </TotalScore>
        <h3>{localStorage.getItem("nickname")}님이 작성하신 입양 서약서</h3>
        <PledgeContainer>
          <p>{data.promise}</p>
        </PledgeContainer>
        <ToggleButton onClick={handleToggleClick}>
          {showAnswers ? "답변 숨기기" : "답변 보기"}
        </ToggleButton>
        {/* {showAnswers && (
          <div>
            <h3>답변 내용:</h3>
            <ul>
              {Object.entries(answers).map(([question, answer], index) => (
                <li key={index}>
                  {question}: {answer}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </ResultContainer>
    </div>
  );
}

export default CheckListResult;
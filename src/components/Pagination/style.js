import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const Page = styled.div`
  cursor: pointer;
  font-weight: ${({ active }) => active && "bold"};

  transition: 0.2s;

  :active {
    transform: scale(0.98);
    opacity: 0.7;
    transform: ${({ position }) => position && "rotate(180deg)"};
  }
`;

export const Arrow = styled.img`
  width: 35px;
  transform: ${({ position }) => position && "rotate(180deg)"};
  cursor: pointer;
  transition: 0.2s;

  :active {
    transform: scale(0.98);
    opacity: 0.7;
    transform: ${({ position }) => position && "rotate(180deg)"};
  }
`;

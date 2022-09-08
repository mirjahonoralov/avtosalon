import React from "react";
import { Page, PaginationWrapper } from "./style";

const Pagination = ({ total }) => {
  const items = [];
  if (total / 5 > 0) {
    for (let i = 1; i <= total / 5 + 1; i++) {
      items.push(i);
    }
  }
  return (
    <PaginationWrapper>
      {items.map((item) => (
        <Page>{item}</Page>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;

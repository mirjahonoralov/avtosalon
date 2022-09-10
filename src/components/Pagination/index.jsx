import React from "react";
import { Arrow, Page, PaginationWrapper } from "./style";
import arrow from "../../assets/icons/arrow-pagination.svg";

const Pagination = ({ total, setPage, page }) => {
  const items = [];
  const totalPages = total % 5 > 0 ? Math.floor(total / 5) + 1 : total / 5;

  if (totalPages > 0) {
    for (let i = 1; i <= totalPages; i++) items.push(i);
  }

  const next = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <PaginationWrapper>
      <Arrow position="left" src={arrow} onClick={() => prev()} />
      {items.map((item) => (
        <Page key={item} active={item === page} onClick={() => setPage(item)}>
          {item}
        </Page>
      ))}
      <Arrow src={arrow} onClick={() => next()} />
    </PaginationWrapper>
  );
};

export default Pagination;

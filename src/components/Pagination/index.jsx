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

      {items.length <= 5 ? (
        items.map((item) => (
          <Page key={item} active={item === page} onClick={() => setPage(item)}>
            {item}
          </Page>
        ))
      ) : (
        <>
          <Page active={1 === page} onClick={() => setPage(1)}>
            1
          </Page>

          {page >= 5 ? (
            <div>...</div>
          ) : (
            <Page active={2 === page} onClick={() => setPage(2)}>
              2
            </Page>
          )}

          {(page < 5
            ? [3, 4, 5]
            : page < items.length - 3
            ? [page - 1, page, page + 1]
            : [
                items.length - 4,
                items.length - 3,
                items.length - 2,
                items.length - 1,
              ]
          ).map((item) => (
            <Page
              key={item}
              active={item === page}
              onClick={() => setPage(item)}
            >
              {item}
            </Page>
          ))}

          {page < items.length - 3 && <div>...</div>}

          <Page
            active={items.length + 1 === page}
            onClick={() => setPage(items.length + 1)}
          >
            {items.length}
          </Page>
        </>
      )}
      <Arrow src={arrow} onClick={() => next()} />
    </PaginationWrapper>
  );
};

export default Pagination;

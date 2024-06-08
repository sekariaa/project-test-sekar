import React from "react";
import Pagination from "@mui/material/Pagination";

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const BasicPagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
}) => {
  return (
    <div className="flex justify-center mb-5">
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        showFirstButton
        showLastButton
        size="small"
      />
    </div>
  );
};

export default BasicPagination;

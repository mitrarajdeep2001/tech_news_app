import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useGlobalData } from "../Context/AppContext";

const Pages = () => {
  const { handlePageChange, page, nbPages } = useGlobalData();
  return (
    <div className="pagination">
      <Stack>
        <Pagination
          count={nbPages}
          shape="rounded"
          variant="outlined"
          page={page === 0 ? 1 : page + 1}
          color="primary"
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default Pages;

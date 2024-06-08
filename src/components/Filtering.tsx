import React from "react";
import { useRouter } from "next/navigation";

interface FilteringProps {
  params: {
    page: number;
    size: number;
    sort: string;
  };
  setParams: React.Dispatch<
    React.SetStateAction<{
      page: number;
      size: number;
      sort: string;
    }>
  >;
  totalData: number;
}

const Filtering: React.FC<FilteringProps> = ({
  params,
  setParams,
  totalData,
}) => {
  const router = useRouter();

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value);
    const newParams = { ...params, size: newSize };
    setParams(newParams);
    router.push(`/?page=${params["page"]}&size=${newSize}&sort=${params.sort}`);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const newParams = { ...params, sort: newSort };
    setParams(newParams);
    router.push(
      `/?page=${params["page"]}&size=${params["size"]}&sort=${newSort}`
    );
  };

  let startData = (params["page"] - 1) * params["size"] + 1;
  let endData = Math.min(params["page"] * params["size"], totalData);

  if (startData > totalData || endData > totalData) {
    startData = 0;
    endData = 0;
  }

  return (
    <section className="px-3 md:px-28 mb-5 flex flex-col md:flex-row justify-between items-center space-y-3">
      <div>
        Showing {startData}-{endData} of {totalData} data
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <p>Show per page:</p>
          <select
            name="show per page"
            id="showperpage"
            className="rounded-full border-2 bg-transparent px-5 py-1"
            value={params["size"]}
            onChange={handlePageSizeChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <p>Sort by:</p>
          <select
            name="sort by"
            id="sortby"
            className="rounded-full border-2 bg-transparent px-5 py-1"
            value={params.sort}
            onChange={handleSortChange}
          >
            <option value="-published_at">Terbaru</option>
            <option value="published_at">Terlama</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filtering;

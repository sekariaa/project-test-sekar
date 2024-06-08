"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

import CardComponent from "./CardComponent";
import Filtering from "@/components/Filtering";
import Pagination from "@/components/Pagination";
import NoDataHandling from "@/components/NoDataHandling";
import Loading from "@/components/Loading";

const defaultParams = {
  page: 1,
  size: 10,
  sort: "-published_at",
};

interface Idea {
  id: number;
  title: string;
  published_at: string;
}

export default function CardList() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [params, setParams] = useState(defaultParams);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    const pageNumber = searchParams.get("page") || defaultParams["page"];
    const pageSize = searchParams.get("size") || defaultParams["size"];
    const sort = searchParams.get("sort") || defaultParams.sort;

    setParams({
      page: parseInt(pageNumber as string),
      size: parseInt(pageSize as string),
      sort: sort as string,
    });
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": searchParams.get("page") || defaultParams["page"],
              "page[size]": searchParams.get("size") || defaultParams["size"],
              sort: searchParams.get("sort") || defaultParams.sort,
            },
          }
        );
        setIdeas(response.data.data);
        setTotalData(response.data.meta.total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const updateUrlParams = (updatedParams: any) => {
    const query = new URLSearchParams(updatedParams).toString();
    router.push(`/?${query}`);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const newParams = { ...params, page: value };
    setParams(newParams);
    updateUrlParams(newParams);
  };

  return (
    <div>
      <Filtering
        params={params}
        setParams={(newParams: any) => {
          setParams(newParams);
          updateUrlParams(newParams);
        }}
        totalData={totalData}
      />
      <div className="flex justify-center py-5">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {ideas.length === 0 ? (
              <NoDataHandling />
            ) : (
              <div className="px-3 md:px-28 mb-5 grid grid-cols-1 gap-x-5 gap-y-8 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                {ideas.map((idea) => (
                  <div key={idea.id}>
                    <CardComponent idea={idea} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Pagination
        count={Math.ceil(totalData / params["size"])}
        page={params["page"]}
        onChange={handlePageChange}
      />
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import ActionAreaCard from "./CardComponent";
import axios from "axios";

const params = {
  "page[number]": 1,
  "page[size]": 1,
  sort: "-published_at",
};

interface Idea {
  id: number;
  title: string;
  published_at: string;
}

export default function CardList() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: params,
          }
        );
        setIdeas(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {ideas.map((idea) => (
        <ActionAreaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
}

import React from "react";

const NoDataHandling = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        400 - Bad Request
      </h1>
      <p className="text-lg text-gray-600">
        Maaf, data yang anda cari tidak ditemukan.
      </p>
    </div>
  );
};

export default NoDataHandling;

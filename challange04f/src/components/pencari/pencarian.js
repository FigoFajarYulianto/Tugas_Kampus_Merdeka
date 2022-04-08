import React, { useEffect } from "react";
import Cardmobil from "../Card/Cardmobil";
import Pencarian from "../pencari/kotakpencarian";
import GetCars from "hooks/apimobil/data";
import { Spinner } from "@chakra-ui/react";

function Search() {
  const { response, getCars, isLoading, error } = GetCars();
  useEffect(() => {getCars();}, []);
  return (
    <div>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <Pencarian title={true} />
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-4 px-5 xl:px-0">
        {isLoading ? (
          <div className="flex justify-center items-center h-52 col-span-3">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange.500"
              size="xl"
            />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-52 col-span-3">
            <p>{error}</p>
          </div>
        ) : (
          response?.map((item) => {
            return (
              <Cardmobil
                key={item.id}
                id={item?.id}
                name={item?.name}
                image={item?.image}
                price={item?.price}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Search;

import React, { useEffect } from "react";
import { UsersIcon, CalendarIcon, CogIcon } from "@heroicons/react/outline";
import GetCarByID from "hooks/apimobil/dataid";
import { convertToIDR } from "utils/helper";
import { useParams } from "react-router-dom";
import BarPencarian from "../pencari/kotakpencarian";
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Spinner,} from "@chakra-ui/react";
import { include, exclude, refund } from "../../data/DetailCars";


function Detail() {
  let { id } = useParams("id", null);
  const { response, getCarByID, isLoading } = GetCarByID(id);

  useEffect(() => {getCarByID(id);}, []);

  return (
    <>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <BarPencarian title={true} />
      <div className="mx-auto max-w-screen-xl py-4 ">
        <div className="flex w-full flex-col-reverse md:flex-row lg:gap-8 px-5 xl:px-0">
          <div className="w-full lg:w-8/12 rounded-sm shadow-lg p-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Tentang Paket</h2>
            </div>
            <div>
              <h3>Include</h3>
              <ul className="list-disc mx-5">
                {include.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Exclude</h3>
              <ul className="list-disc mx-5">
                {exclude.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton px={0}>
                      <div className="flex w-full justify-between">
                        <h3 className="text-lg font-semibold">
                          Refund, Reschedule, Overtime
                        </h3>
                        <AccordionIcon />
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel px={0} pb={4}>
                    <ul className="list-disc mx-5">
                      {refund.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full lg:w-4/12 rounded-sm h-fit shadow-lg p-4">
            <div className="my-4 h-56 flex justify-center items-center">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="orange.500"
                    size="xl"
                  />
                </div>
              ) : (
                <img
                  src={response?.image}
                  alt="car"
                  className="max-w-sm overflow-hidden w-full h-auto"
                />
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{response?.name}</h2>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2 mb-2 my-4">
              <p className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-2" />4 Orang
              </p>
              <p className="flex items-center">
                <CogIcon className="w-5 h-5 mr-2" />
                Manual
              </p>
              <p className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Tahun 2020
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <h4>Total</h4>
              <h4 className="font-bold">{convertToIDR(response?.price)}</h4>
            </div>
            <button className="btnSecondaryGreen">Lanjutkan Pembayaran</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <button className="btnSecondaryGreenNotFull">
          Lanjutkan Pembayaran
        </button>
      </div>
    </>
  );
}

export default Detail;

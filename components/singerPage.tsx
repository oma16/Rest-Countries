"use client";
import React, {  useContext} from "react";
import { Country, ThemeContext } from "../components/pageLayout";
import Link from "next/link";
import arrowlight from "./../public/arrowlight.svg";
import arrowdark from "./../public/arrowdark.svg";
import Image from "next/image";
import LazyLoad from "react-lazy-load";


const CountryData = require("country-data-list").countries;

interface Props {
  params: { id: string };
}

const CountryDetailsPage = ({ params: { id } }: Props) => {
  const { mode,countries,loading }: any =
    useContext(ThemeContext);
 

  const singleCountry = countries?.find(
    (country: Country) =>
      CountryData[country.cca2]?.name?.replace(/[,\s]+/g, "") === id
  );
  
  
  return (
    <div className=" px-8 md:px-16 ">
      <Link href={"/"} >
        <button
          type="button"
          className={
            mode
              ? "darkElement py-3 px-8 rounded-lg my-5 shadow-xl"
              : "lightElement py-3 px-8 rounded-lg my-5  shadow-xl"
          }
        >
          <div className="flex">
            <div className="self-align mr-3">
              <Image
                src={arrowlight}
                alt="Dark mode"
                width={22}
                height={10}
                className={mode === "light" ? " hidden " : "flex"}
              />
              <Image
                src={arrowdark}
                alt="light mode"
                width={22}
                height={10}
                className={mode === "light" ? " flex " : "hidden"}
              />
            </div>
            <p> Back</p>
          </div>
        </button>
      </Link>
      
        {!loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8  lg:gap-16">
          <LazyLoad>
            <Image
              src={singleCountry?.flags?.svg}
              alt={singleCountry?.flags?.alt || "flag"}
              width={100}
              height={100}
              className="w-full h-52 md:h-80 xl:h-96  object-cover shadow-lg "
              priority
            />
          </LazyLoad>

          <div className="mt-5">
            <div>
              <h1 className="font-extrabold text-3xl my-6 font-nunito">
                {singleCountry?.name?.common}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-2">
              <div className="">
                <div className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Native Name:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry
                      ? Object.entries(singleCountry?.name?.nativeName).map(
                          (native: any, index) => (
                            <span key={index}>{(index ? ", " : "") + native[1].official} </span>
                          )
                        )
                      : ""}
                  </span>
                </div>
                <p className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Population:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry?.population.toLocaleString()}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Region:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry?.region}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Sub Region:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry?.subregion}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Capital:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry?.capital}
                  </span>
                </p>
              </div>
              <div className="">
                <p className="mb-2">
                  <span className="font-extrabold mr-1 text-base mb-2">
                    Top Level Domain:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry?.tld[0]}
                  </span>
                </p>
                <div className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Currencies:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry
                      ? Object.entries(singleCountry?.currencies).map(
                          (currency: any, index) => (
                            <span key={index}>{(index ? ", " : "") + currency[1].name} </span>
                          )
                        )
                      : ""}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-extrabold mr-1 text-base ">
                    Languages:
                  </span>{" "}
                  <span className="font-normal text-base opacity-70">
                    {singleCountry
                      ? Object.values(singleCountry?.languages).map(
                          (lang, index) => <span key={index}>{(index ? ", " : "") + lang} </span>
                        )
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row mt-10 mb-20 ">
              {singleCountry && singleCountry?.borders ? (
                <p className="mr-2 md:w-1/4 md:self-center font-extrabold mb-3 md:mb-0 text-base">
                  Border Countries:
                </p>
              ) : (
                ""
              )}
              <div className="flex  md:w-3/4  flex-wrap">
                {singleCountry
                  ? singleCountry?.borders?.map(
                      (border: any, index: number) => (
                        <Link
                          href={`/country/${CountryData[
                            `${border}`
                          ]?.name.replace(/[,\s]+/g, "")}`}
                          key={index}
                          className="self-center"
                        >
                          {CountryData[`${border}`]?.name && (
                            <button
                              type="button"
                              className={
                                mode
                                  ? "darkElement py-2 px-3 rounded-lg  mr-2 mb-2 shadow-xl"
                                  : "lightElement py-2 px-3 rounded-lg  mr-2 mb-2 shadow-xl"
                              }
                            >
                              {CountryData[`${border}`]?.name}
                            </button>
                          )}
                        </Link>
                      )
                    )
                  : ""}
              </div>
            </div>
          </div>
        </div>
        ) : (<div>Loading...</div>)}
      
    </div>
  );
};

export default CountryDetailsPage;

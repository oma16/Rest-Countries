"use client";
import Image from "next/image";
import {  useContext } from "react";
import { ThemeContext } from "./../components/pageLayout";
import SearchAndFilter from "@/components/searchAndFilter/searchAndFilter";
import Link from "next/link";

const CountryData = require("country-data-list").countries;

export default function HomePage() {
  const {
    mode,
    setMode,
    countries,
    setCountries,
    region,
    setRegion,
    loading,
    setLoading,
  }: any = useContext(ThemeContext);

  return (
    <div className="">
      <SearchAndFilter
        countries={countries}
        setCountries={setCountries}
        setMode={setMode}
        mode={mode}
        setRegion={setRegion}
        region={region}
        loading={loading}
        setLoading={setLoading}
      />

      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-16 gap-10 md:gap-14 xl:gap-10 mb-16">
          {region
            ?.sort((a: any, b: any) =>
              a.name.common < b.name.common
                ? -1
                : a.name.common > b.name.common
                ? 1
                : 0
            )
            ?.slice(0,8).map((country: any, index: number) => (
              <Link
                href={`/country/${CountryData[`${country.cca2}`]?.name?.replace(
                  /[,\s]+/g,
                  ""
                )}`}
                className={
                  mode
                    ? "cursor-pointer w-64 h-80 md:w-72 lg:w-64 shadow-xl pb-10 darkElement mx-auto rounded-lg"
                    : "cursor-pointer w-64 h-80 mx-auto md:w-72 lg:w-64 shadow-xl pb-10 lightElement rounded-lg"
                }
                key={index}
              >
                <div className="w-full h-36 rounded-tr-lg rounded-tl-lg">
                  <Image
                    src={country?.flags?.svg}
                    alt={country?.flags?.alt || "flag"}
                    width={10}
                    height={10}
                    priority
                    className="w-full h-36 rounded-tr-lg rounded-tl-lg object-cover"
                  />
                </div>
                <div className="px-5">
                  <p className="font-extrabold text-xl my-3 font-nunito">
                    {country?.name.common}
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    Population:{" "}
                    <span className="font-normal opacity-70">
                      {country?.population.toLocaleString()}
                    </span>
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    Region:{" "}
                    <span className="font-normal opacity-70">
                      {country?.region}
                    </span>
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    Capital:{" "}
                    <span className="font-normal opacity-70">
                      {country?.capital}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <div className="md:px-16">Loading...</div>
      )}
    </div>
  );
}

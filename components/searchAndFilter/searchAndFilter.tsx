import { ThemeContext, ThemeContextType } from "@/components/pageLayout";
import React, { useContext } from "react";
import { Country } from "@/components/pageLayout";

const SearchAndFilter = ({
  countries,
  region,
  setRegion,
}: ThemeContextType) => {
  const { mode }: any = useContext(ThemeContext);

  const handleFilter = (e: any) => {
    e.preventDefault();
    const value = e.target.value;

    if (value !== "") {
      const countryRegion = countries?.filter(
        (country: Country) =>
          country?.region?.toLowerCase() === value?.toLowerCase()
      );

      setRegion(countryRegion);
    } else {
      setRegion(region);
    }
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    const value = e.target.value;

    if (value !== "") {
      const countrySearch = countries?.filter((country: Country) =>
        country?.name.common.toLowerCase().includes(value?.toLowerCase())
      );

      setRegion(countrySearch);
    } else {
      setRegion(region);
    }
  };

  return (
    <div className="px-5 md:px-16 py-7 mb-8">
      <form
        action=""
        className="flex flex-col md:flex-row md:justify-between w-full"
      >
        <div className="w-full">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a country..."
            className={
              mode === "dark"
                ? "darkElement searchdark  px-5 py-3 w-full md:w-3/4  lg:w-1/2 mb-3 md:mb-0 rounded-lg focus:outline-0 cursor-pointer shadow-xl"
                : "lightElement searchlight px-5 py-3 w-full md:w-3/4  lg:w-1/2 mb-3 md:mb-0 rounded-lg focus:outline-0 cursor-pointer shadow-xl"
            }
            onChange={handleSearch}
          />
        </div>
        <div
          className={
            mode === "dark"
              ? "darkElement pr-3 rounded-lg focus:outline-0 w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-xl"
              : "lightElement pr-3 rounded-lg focus:outline-0 w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-xl"
          }
        >
          <select
            name="select"
            id="select"
            className={
              mode === "dark"
                ? "darkElement px-5 py-3 rounded-lg focus:outline-0 w-full cursor-pointer"
                : "lightElement px-5 py-3 rounded-lg focus:outline-0 w-full cursor-pointer"
            }
            onChange={handleFilter}
          >
            <option
              value=""
              className={
                mode === "dark"
                  ? "darkElement px-5 py-3  cursor-pointer"
                  : "lightElement px-5 py-3 cursor-pointer"
              }
            >
              Filter by Region
            </option>
            <option
              value="africa"
              className={
                mode === "dark"
                  ? "darkElement px-5 py-3  cursor-pointer"
                  : "lightElement px-5 py-3  cursor-pointer"
              }
            >
              Africa
            </option>
            <option
              value="americas"
              className={
                mode === "dark"
                  ? "darkElement px-5 py-3  cursor-pointer"
                  : "lightElement px-5 py-3 cursor-pointer"
              }
            >
              America
            </option>
            <option
              value="asia"
              className={
                mode === "dark"
                  ? "darkElement px-5 py-3 cursor-pointer"
                  : "lightElement px-5 py-3  cursor-pointer"
              }
            >
              Asia
            </option>
            <option
              value="europe"
              className={
                mode === "dark"
                  ? "darkElement px-5 py-3  cursor-pointer"
                  : "lightElement px-5 py-3  cursor-pointer"
              }
            >
              Europe
            </option>
            <option
              value="oceania"
              className={
                mode === "dark"
                  ? "darkElement px-5 py-3  cursor-pointer"
                  : "lightElement px-5 py-3  cursor-pointer"
              }
            >
              Oceania
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchAndFilter;

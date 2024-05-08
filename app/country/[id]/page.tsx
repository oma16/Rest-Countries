import React, { Suspense, useContext, useState } from "react";
import { Country, ThemeContext } from "../../../components/pageLayout";
import { Metadata } from "next";
import CountryDetailsPage from "@/components/singerPage";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";


export const metadata: Metadata = {
  title: "Rest Countries Details ",
  description: "Rest Countries API",
};

interface Props {
  params: { id: string };
}
const DetailsPage = ({ params }: Props) => {
  
  
  return (
    <div>
      <CountryDetailsPage params={params}/>
    </div>
  );
};

export default DetailsPage;

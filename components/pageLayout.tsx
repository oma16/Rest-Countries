"use client";
import Navbar from "@/components/navbar/navbar";
import { Inter,Nunito } from "next/font/google";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"],
variable: '--font-inter',
display: 'swap',
 });
const nunito = Nunito({ subsets: ["latin"],
variable: '--font-nunito',
display: 'swap',
 });


export interface ThemeContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}
interface Flags {
  svg: string;
  alt: string;
}
interface Name {
  common: string;
  nativeName:string;
}
export interface Country {
  name: Name;
  population: string;
  flags: Flags;
  region: string;
  capital: string;
  cca2:string;
  cca3:string;
}
export interface ThemeContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  region: Country[];
  setRegion: React.Dispatch<React.SetStateAction<Country[]>>;
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("light");
  const baseUrl = "https://restcountries.com/v3.1/all";
  
  
useEffect(() => {
  setMode(localStorage.getItem('mode') || mode)
  const fetchedData = async() =>{
    setLoading(true)
    try {
     await axios.get(baseUrl).then((res) => {
        setCountries(res.data);
        setRegion(res.data);
        setLoading(false);
      });
      
    } catch (error:any) {
      setError(error);
      
    }
   
  }
  fetchedData();
 
  
}, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, setMode, countries,setCountries ,region, setRegion, loading, setLoading}}>
      <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
        <body  className={`${mode === "dark" ? "dark w-full h-full" : "light w-full h-full"} ${nunito.className}`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

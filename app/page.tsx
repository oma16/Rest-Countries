import { Metadata } from "next";
import HomePage from "@/components/homePage";

 export const metadata: Metadata = {
    title: "Rest Countries",
    description: "Rest Countries API",
  };
export default function Home() {
  
  return (
        <div>
          <HomePage/>
        </div>
  );
}

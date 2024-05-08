import PageLayout from "@/components/pageLayout";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rest Countries Details ",
  description: "Rest Countries API",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}

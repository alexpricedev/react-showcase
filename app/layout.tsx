import { PropsWithChildren } from "react";

import { Header } from "@/components/Header";
import { FontUtils } from "@/utils/font.utils";

import "./globals.css";

export const metadata = {
  title: "NextJS Showcase",
  description:
    "An example of the best practices and patterns for the modern NextJS application",
};

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={FontUtils.withInter("bg-white")}>
        <Header />
        <div className="max-w-4xl m-auto p-4">{children}</div>
      </body>
    </html>
  );
}

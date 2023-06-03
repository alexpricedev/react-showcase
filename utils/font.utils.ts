import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const FontUtils = {
  withInter: (cls: string) => `${cls} ${inter.className}`,
};

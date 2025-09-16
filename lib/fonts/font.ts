import { Instrument_Serif } from "next/font/google";
import { Inter_Tight } from "next/font/google";

// Instrument Serif
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

// Inter Tight
export const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["200" , "400", "500", "700"],
});
import { Rubik } from "next/font/google";
import "./globals.css";
export const dynamic = 'force-dynamic'
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "U Help",
  description: "Ticketing system by U.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        </body>
    </html>
  );
}

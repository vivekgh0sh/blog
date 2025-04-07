import "./global.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: '@vivekgh0sh (Vivek Ghosh)',
    template: '%s | @vivekgh0sh (Vivek Ghosh)',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

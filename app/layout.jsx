import Footer from "@components/Footer";
import GoTop from "@components/GoTop";
import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "FixSavvy",
  description: "Get a handyman / fixer right now!",
};

const RootLayout = ({ children }) => {
  console.log("Layout mounted");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body suppressHydrationWarning>
        <Nav />
        <GoTop />
        <main className="app">
          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

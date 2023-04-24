import "../../app/globals.css";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='max-w-6xl mx-auto'>
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  );
}

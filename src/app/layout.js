import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FriendshipProvider } from "@/context/FriendshipContext";

export const metadata = {
  title: "KeenKeeper | Friendship Management",
  description: "A thoughtful dashboard for keeping friendships warm.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#f4f7fa] text-[#1f2937] antialiased">
        <FriendshipProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-220px)]">{children}</main>
          <Footer />
        </FriendshipProvider>
      </body>
    </html>
  );
}

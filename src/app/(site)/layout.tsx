import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import TopNav from "@/components/top-nav";
import { TrendingNewsModal } from "@/components/trending-news-modal";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <TrendingNewsModal />
    </div>
  );
}

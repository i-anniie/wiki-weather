import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "HomeQuest",
  description,
  ogImage,
}: Props) {
  const bgImages = ["/heroSlider1.jpg", "/heroSlider3.jpg", "/heroSlider4.jpg"];

  const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];

  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content="" />
        <meta property="og:image" content="" />
      </Head>
      <section
        className="h-screen"
        style={{
          backgroundImage: `url(${randomImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-sm bg-black/20 h-full flex flex-col">
          <Navbar />
          <div className="h-full w-full">{children}</div>
          <Footer />
        </div>
      </section>
    </>
  );
}

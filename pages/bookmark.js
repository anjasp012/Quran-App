import Addbookmark from "../components/Addbookmark";
import Bookmarkfolder from "../components/Bookmarkfolder";
import BottomBar from "../components/BottomBar";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar navtitle="Bookmarks" />
        <Addbookmark />
        <Bookmarkfolder />
        <BottomBar />
      </Layout>
    </>
  );
}

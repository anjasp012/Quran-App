import Link from "next/link";
import { useRouter } from "next/router";
import BottomBar from "../components/BottomBar";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ListSurat from "../components/ListSurat";
import Navbar from "../components/Navbar";

export default function Home(props) {
  const router = useRouter();
  const { surahs } = props;

  return (
    <>
      <Layout>
        <Navbar navtitle="Quran App" />
        <Header />
        <section className="mx-6">
          <h3 className="text-white mb-2 ml-2 mt-8">Daftar Surat</h3>
          <hr className="mb-6 opacity-30" />
          <ul className="space-y-4">
            {surahs.map((surah, index) => {
              return (
                <li
                  key={index}
                  onClick={() => router.push(`/${index}`)}
                  className="cursor-pointer group"
                >
                  <a className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-5">
                      <span className="border-2 group-hover:bg-purple-600 group-active:ring group-hover:ring-purple-400 transition-colors duration-150 border-purple-600/40 bg-white py-0.5 px-3 inline-block rounded-full">
                        {surah.nomor}
                      </span>
                      <div>
                        <h3 className="text-white">{surah.nama}</h3>
                        <p className="uppercase text-white/60 text-xs">
                          {surah.type} . {surah.ayat} ayat
                        </p>
                      </div>
                    </div>
                    <h3 className="font-amiri font-bold text-lg text-purple-500">
                      {surah.asma}
                    </h3>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <BottomBar />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.npoint.io/99c279bb173a6e28359c/data");
  const surahs = await res.json();
  return {
    props: {
      surahs,
    },
  };
}

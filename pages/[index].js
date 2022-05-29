import { useRouter } from "next/router";
import React from "react";
import DetailCard from "../components/DetailCard";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function DetailSurah({ surah, ayat }) {
    const router = useRouter();
    return (
        <div>
            <Layout>
                <Navbar back navtitle={surah.nama} />
                <DetailCard
                    nama={surah.nama}
                    arti={surah.arti}
                    type={surah.type}
                    ayat={surah.ayat}
                />
                <section className="mx-6 mt-10">
                    {ayat.map((ayat, index) => {
                        return (
                            <div key={index}>
                                <div className="bg-gray-700/25 rounded-lg">
                                    <div className="flex justify-between items-center mx-4 py-2 ">
                                        <div key={ayat.nomor}>
                                            <span className="bg-purple-600 py-0.5 px-3 inline-block rounded-full">
                                                {ayat.nomor}
                                            </span>
                                        </div>
                                        <div className="flex space-x-6">
                                            <button>111</button>
                                            <button>111</button>
                                            <button>111</button>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#ABAFD7] text-[18px] font-amiri font-bold text-right mt-6 mb-4">
                                    {ayat.ar}
                                </p>
                                <p className="text-[#ABAFD7]">{ayat.id}</p>
                                <hr className="opacity-30 mt-3 mb-8" />
                            </div>
                        );
                    })}
                </section>
            </Layout>
        </div>
    );
}

export async function getStaticPaths() {
    const surahs = await fetch(
        "https://api.npoint.io/99c279bb173a6e28359c/data"
    );
    const dataSurahs = await surahs.json();

    const paths = dataSurahs.map((data) => ({
        params: {
            index: `${data}`,
        },
    }));
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { index } = context.params;
    const ayats = +index + 1;

    const sur = await fetch(
        `https://api.npoint.io/99c279bb173a6e28359c/data/${index}`
    );
    const surah = await sur.json();
    const ay = await fetch(
        `https://api.npoint.io/99c279bb173a6e28359c/surat/${ayats}`
    );
    const ayat = await ay.json();
    return {
        props: {
            surah,
            ayat,
        },
    };
}

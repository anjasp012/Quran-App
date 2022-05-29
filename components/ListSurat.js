import Link from "next/link";

export default function ListSurat(props, children) {
    const { surahs } = props;

    return (
        <section className="mx-6">
            <h3 className="text-white mb-2 ml-2 mt-8">Daftar Surat</h3>
            <hr className="mb-6 opacity-30" />
            <ul className="space-y-4">
                {surahs.map((surah, index) => {
                    return (
                        <li key={index}>
                            <Link href="/detail">
                                <a className="flex justify-between items-center pb-4 border-b border-white/10">
                                    <div className="flex items-center space-x-5">
                                        <span className="text-white relative p-3.5 text-[14px] font-medium">
                                            {/* <img
                        src="liststyle.svg"
                        className="absolute left-0 top-2 mt-px"
                        alt=""
                      /> */}
                                            1
                                        </span>
                                        <div>
                                            <h3 className="text-white">
                                                {surah.nama}
                                            </h3>
                                            <p className="uppercase text-white/60 text-xs">
                                                {surah.type} . {surah.ayat}{" "}
                                                verses
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="font-amiri font-bold text-lg text-purple-500">
                                        {surah.asma}
                                    </h3>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

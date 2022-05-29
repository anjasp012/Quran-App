import { useRouter } from "next/router";
import React from "react";

export default function ayat() {
    const { id } = useRouter.query;
    return (
        <div>
            ayat
            {id}
        </div>
    );
}

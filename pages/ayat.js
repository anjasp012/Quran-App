import { useRouter } from "next/router";
import React from "react";

export default function ayat() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      ayat
      {id}
    </div>
  );
}

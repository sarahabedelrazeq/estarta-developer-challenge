import React from "react";
import { Layouts } from "components";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => router.push("/administration/logger-search"), [router]);

  return (
    <Layouts.Main links={[]} id="home-page" title="Home Page"></Layouts.Main>
  );
}

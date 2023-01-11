import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Layouts } from "components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Layouts.Main id="home-page" title="Home Page"> Home Page </Layouts.Main>;
}

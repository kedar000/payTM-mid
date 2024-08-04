import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";

const slient = new PrismaClient()

export default function Home() {
  return (
   <div className="bg-slate-500 font-mono p-4" > hi there</div>
    
  );
}

import Head from "next/head";
import { PropsWithChildren, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function PageWrapper({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>) {
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta
          name="Chicago Crime analysis"
          content="Analyzing Crime in Chicago"
        />
      </Head>
      <main className="bg-slate-200 h-screen relative pb-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

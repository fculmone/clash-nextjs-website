import BasicTable from "./ui/table";
import { getDataFromServer } from "../lib/data";
import { Suspense } from "react";
import NestedPage from "./nested_page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royale Clan Manager | Clan Table",
  description: "Clan Table for Royale Clan Manager",
  alternates: {
    canonical: "https://royaleclanmanager.com/clan-table",
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Suspense>
        <NestedPage getData={getDataFromServer} />
      </Suspense>
    </main>
  );
}

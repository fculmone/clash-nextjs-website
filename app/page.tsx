import BasicTable from "./ui/table";
import { getDataFromServer } from "./lib/data";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense>
        <BasicTable getData={getDataFromServer} />
      </Suspense> 
      <p className="text-blue-900">heheheha</p>
    </main>
  );
}

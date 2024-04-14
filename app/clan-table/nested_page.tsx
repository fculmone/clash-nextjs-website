import BasicTable from "./ui/table";
import { Suspense } from "react";
import Header from "../ui/header";

export default function NestedPage({ getData }: { getData: any }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="mt-12">
        <Suspense>
          <BasicTable getData={getData} />
        </Suspense>
        <p className="text-blue-900">heheheha</p>
      </div>
    </div>
  );
}

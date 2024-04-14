import { Suspense } from "react";
import Header from "./ui/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <Suspense>
        <Header />
      </Suspense>
      <p className="text-red-900">heheheha</p>
    </div>
  );
}

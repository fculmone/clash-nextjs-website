import { Suspense } from "react";
import Header from "../ui/header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <Suspense>
        <Header />
      </Suspense>
    </main>
  );
}

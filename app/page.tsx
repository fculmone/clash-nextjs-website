import Image from "next/image";
import ClanTagInput from "./ui/clanTagInput";
import BasicTable from "./ui/table";
import mData from './sample-clan-data.json';
import TableWithClanInput from "./ui/tableWithClanInput";
import { getDataFromServer } from "./lib/data";

export default function Home() {
  
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BasicTable getData={getDataFromServer} />
      <p className="text-blue-900">heheheha</p>
    </main>
  );
}

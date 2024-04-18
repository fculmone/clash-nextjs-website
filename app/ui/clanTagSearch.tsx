import { Dispatch, SetStateAction } from "react";

export function ClanTagSearch({
  handleSearch,
  isLoading,
  setIsLoading,
  prevValue,
}: {
  handleSearch: Function;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  prevValue: string | undefined;
}) {
  //const [searchInput, setSearchInput] = useState(});

  function writeStuff() {
    //setSearchInput(event.target.value);
  }

  function search(formData: any) {
    console.log("in search function");
    //alert("hi");
    setIsLoading(true);
    handleSearch(formData.get("query"));
  }

  return (
    <form action={search}>
      <input
        name="query"
        type="text"
        placeholder="Enter Your Clan Tag (Ex. Q23DG9)"
        defaultValue={isLoading ? " " : prevValue}
        disabled={isLoading}
        className="bg-white border-solid border-gray-300 px-3 w-full max-w-72 h-8 rounded-l-md border disabled:hover:cursor-wait"
      />
      <button
        className="disabled:hover:bg-white disabled:hover:cursor-wait disabled:opacity-55 hover:bg-gray-200 bg-white border px-3 h-8 -ml-[1px] rounded-r-md"
        disabled={isLoading}
        type="submit"
        onClick={() => console.log("form button clicked")}
      >
        Search
      </button>
    </form>
  );
}

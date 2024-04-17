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
        placeholder="Enter Your Clan Tag"
        defaultValue={isLoading ? " " : prevValue}
        disabled={isLoading}
      />
      <button
        className="disabled:border-red-500 disabled:border-2"
        disabled={isLoading}
        type="submit"
        onClick={() => console.log("form button clicked")}
      >
        Search
      </button>
    </form>
  );
}

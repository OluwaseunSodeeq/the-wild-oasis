import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortBy = searchParams.get("sortBy") || "";

  const handleChange = (e) => {
    searchParams.set("SortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      options={options}
      type="white"
      value={currentSortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;

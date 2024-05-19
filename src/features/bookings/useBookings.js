import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBoookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Filter
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  //SOrt
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // query
  const {
    data: { data: bookings, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBoookings({ filter, sortBy, page }),
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount);
  queryClient.prefetchInfiniteQuery({
    queryKey: ["bookings", filter, sortBy, page + 1],
    queryFn: () => getBoookings({ filter, sortBy, page: page + 1 }),
  });

  if (page > 1);
  queryClient.prefetchInfiniteQuery({
    queryKey: ["bookings", filter, sortBy, page - 1],
    queryFn: () => getBoookings({ filter, sortBy, page: page - 1 }),
  });
  return { bookings, error, isLoading, count };
}

export default useBookings;

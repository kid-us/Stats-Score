import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const getMatchDetails = async (id: string) => {
  if (!id) throw new Error("Missing match id");

  const res = await axios.get("https://stat-score.kidush.dev/api/matches.php", {
    params: { id },
  });

  return res.data;
};

export const useGetMatchesDetail = (id: string) => {
  return useQuery({
    queryKey: ["match-details", id],
    queryFn: () => getMatchDetails(id),
    enabled: !!id,
  });
};

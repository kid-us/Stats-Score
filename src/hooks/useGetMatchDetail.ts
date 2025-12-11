import type { Match } from "@/types/match-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getMatchDetails = async ({
  id,
}: {
  id: string;
}): Promise<Match> => {
  const token = import.meta.env.VITE_ACCESS_TOKEN;

  const res = await axios.get(`/api/matches/${id}`, {
    headers: {
      "X-Auth-Token": token,
    },
  });

  return res.data;
};

export const useGetMatchesDetail = (id: string) => {
  return useQuery({
    queryKey: ["match-details", id],
    queryFn: () => getMatchDetails({ id }),
    enabled: !!id,
  });
};

import type { CompetitionMatchesResponse } from "@/types/matches-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getCompetitionDetails = async ({
  competition,
  matchDay,
  limit = 5,
}: {
  competition: string;
  matchDay: string;
  limit?: number;
}): Promise<CompetitionMatchesResponse> => {
  const token = import.meta.env.VITE_ACCESS_TOKEN;
  const baseURL = import.meta.env.VITE_API_URL;

  const res = await axios.get(
    `${baseURL}/competitions/${competition}/matches?matchday=${matchDay}&limit=${limit}`,
    {
      headers: {
        "X-Auth-Token": token,
      },
    }
  );

  return res.data;
};

export const useGetMatches = (competition: string, matchDay: string) => {
  return useQuery({
    queryKey: ["competition-details", competition, matchDay],
    queryFn: () => getCompetitionDetails({ competition, matchDay }),
    enabled: !!competition && !!matchDay,
  });
};

// src/hooks/useCompetitionMatches.ts

// import axios from "axios";
// import type { CompetitionMatchesResponse } from "@/types/matches-types";
// import { useQuery } from "@tanstack/react-query";

// export const getCompetitionDetails = async ({
//   competition,
//   matchDay,
//   limit = 5,
// }: {
//   competition: string;
//   matchDay: string;
//   limit?: number;
// }): Promise<CompetitionMatchesResponse> => {
//   const res = await axios.get(`/api/competitions/${competition}/matches`, {
//     params: { matchday: matchDay, limit },
//   });

//   return res.data;
// };

// export const useGetMatches = (competition: string, matchDay: string) => {
//   return useQuery({
//     queryKey: ["competition-details", competition, matchDay],
//     queryFn: () => getCompetitionDetails({ competition, matchDay }),
//     enabled: !!competition && !!matchDay,
//   });
// };

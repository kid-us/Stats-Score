import type { CompetitionMatchesResponse } from "@/types/matches-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getCompetitionDetails = async ({
  competition,
  matchday,
  limit = 5,
}: {
  competition: string;
  matchday: string;
  limit?: number;
}): Promise<CompetitionMatchesResponse> => {
  // const res = await axios.get(
  //   `${baseURL}/competitions/${competition}/matches?matchday=${matchDay}&limit=${limit}`,
  //   {
  //     headers: {
  //       "X-Auth-Token": token,
  //     },
  //   }
  // );
  const res = await axios.get(`/api/competition`, {
    params: { competition, matchday, limit },
  });

  return res.data;
};

export const useGetMatches = (competition: string, matchday: string) => {
  return useQuery({
    queryKey: ["competition-details", competition, matchday],
    queryFn: () => getCompetitionDetails({ competition, matchday }),
    enabled: !!competition && !!matchday,
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

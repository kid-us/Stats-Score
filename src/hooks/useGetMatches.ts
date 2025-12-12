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
  // Call Vercel serverless function (same origin)
  const res = await axios.get("/api/competition", {
    params: { competition, matchDay, limit },
  });

  return res.data;
};

export const useGetMatches = (competition: string, matchDay: string) => {
  return useQuery({
    queryKey: ["competition-details", competition, matchDay],
    queryFn: () => getCompetitionDetails({ competition, matchDay }),
    enabled: !!competition && !!matchDay,
  });
};

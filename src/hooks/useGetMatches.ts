import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface GetCompetitionMatchesParams {
  competition: string;
  matchDay: string;
  limit?: number;
}

export const getCompetitionMatches = async ({
  competition,
  matchDay,
  limit = 5,
}: GetCompetitionMatchesParams) => {
  const res = await axios.get(
    "https://stat-score.kidush.dev/api/competition.php",
    {
      params: { competition, matchDay, limit },
    }
  );

  return res.data;
};

export const useGetMatches = (competition: string, matchDay: string) => {
  return useQuery({
    queryKey: ["competition-matches", competition, matchDay],
    queryFn: () => getCompetitionMatches({ competition, matchDay }),
    enabled: !!competition && !!matchDay,
  });
};

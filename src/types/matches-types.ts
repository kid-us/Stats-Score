export interface CompetitionMatchesResponse {
  filters: Filters;
  resultSet: ResultSet;
  competition: Competition;
  matches: Match[];
}

export interface Filters {
  season: string;
  matchday: string;
}

export interface ResultSet {
  count: number;
  first: string;
  last: string;
  played: number;
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface Match {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string | null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: null;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface Score {
  winner: string;
  duration: string;
  fullTime: ScoreBreakdown;
  halfTime: ScoreBreakdown;
}

export interface ScoreBreakdown {
  home: number;
  away: number;
}

// Generated by https://quicktype.io

export interface IPokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IPokemonResults[];
}

export interface IPokemonResults {
  id: number;
  image: string;
  name: string;
  url: string;
}
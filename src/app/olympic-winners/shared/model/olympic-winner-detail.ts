import {Placing} from './placing';

export interface OlympicWinnerDetail {
  id: number;
  name: string;
  surname: string;
  birthDay: string;
  birthPlace: string;
  birthCountry: string;
  deathDay: string;
  deathPlace: string;
  deathCountry: string;
  placing?: Placing [];
}

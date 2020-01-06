import {
    ResetGameAction,
    PlayBeerPongAction,
    DrinkWaterAction,
    VomitAction
} from './game';
import { ScreenShowAction, AddHighScoreAction } from './meta';

export enum GameActionTypes {
    ResetGame,
    PlayBeerPong,
    DrinkWater,
    Vomit
}

export enum MetaActionTypes {
    ShowHelp,
    ShowHighScore,
    AddHighScore
}

export type GameAction =
    | ResetGameAction
    | PlayBeerPongAction
    | DrinkWaterAction
    | VomitAction;

export type MetaAction = ScreenShowAction | AddHighScoreAction;

import {
    ResetGameAction,
    selectNpcAction,
    PlayBeerPongAction,
    DrinkWaterAction,
    VomitAction
} from './game';
import { ScreenShowAction, AddHighScoreAction } from './meta';

export enum GameActionTypes {
    ResetGame,
    SelectNpc,
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
    | selectNpcAction
    | PlayBeerPongAction
    | DrinkWaterAction
    | VomitAction;

export type MetaAction = ScreenShowAction | AddHighScoreAction;

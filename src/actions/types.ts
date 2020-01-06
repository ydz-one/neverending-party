import {
    ResetGameAction,
    SelectNpcAction,
    PlayBeerPongAction,
    DisplayHelpAction
} from './game';

export enum GameActionTypes {
    ResetGame,
    SelectNpc,
    PlayBeerPong,
    DisplayHelp
}

export type GameAction =
    | ResetGameAction
    | SelectNpcAction
    | PlayBeerPongAction
    | DisplayHelpAction;

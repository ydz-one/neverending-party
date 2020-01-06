import {
    ResetGameAction,
    SelectNpcAction,
    PlayBeerPongAction,
    DisplayHelpAction,
    DisplayAboutAction
} from './game';

export enum GameActionTypes {
    ResetGame,
    SelectNpc,
    PlayBeerPong,
    DisplayHelp,
    DisplayAbout
}

export type GameAction =
    | ResetGameAction
    | SelectNpcAction
    | PlayBeerPongAction
    | DisplayHelpAction
    | DisplayAboutAction;

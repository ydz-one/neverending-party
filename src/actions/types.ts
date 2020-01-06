import { ResetGameAction, selectNpcAction, PlayBeerPongAction } from './game';
import { ScreenShowAction, AddHighScoreAction } from './meta';

export enum GameActionTypes {
    ResetGame,
    SelectNpc,
    PlayBeerPong
}

export enum MetaActionTypes {
    ShowHelp,
    ShowHighScore,
    AddHighScore
}

export type GameAction = ResetGameAction | selectNpcAction | PlayBeerPongAction;

export type MetaAction = ScreenShowAction | AddHighScoreAction;

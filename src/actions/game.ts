import { GameActionTypes } from './types';

export interface ResetGameAction {
    type: GameActionTypes.ResetGame;
}

export interface SelectNpcAction {
    type: GameActionTypes.SelectNpc;
    payload: number | undefined | null;
}

export interface PlayBeerPongAction {
    type: GameActionTypes.PlayBeerPong;
    payload: number;
}

export interface DisplayHelpAction {
    type: GameActionTypes.DisplayHelp;
    payload: boolean;
}

export const resetGame = (): ResetGameAction => ({
    type: GameActionTypes.ResetGame
});

export const selectNpc = (
    npcId: number | undefined | null
): SelectNpcAction => ({
    type: GameActionTypes.SelectNpc,
    payload: npcId
});

export const playBeerPong = (npcId: number): PlayBeerPongAction => ({
    type: GameActionTypes.PlayBeerPong,
    payload: npcId
});

export const displayHelp = (isDisplay: boolean): DisplayHelpAction => ({
    type: GameActionTypes.DisplayHelp,
    payload: isDisplay
});

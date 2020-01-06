import { GameActionTypes } from './types';

export interface ResetGameAction {
    type: GameActionTypes.ResetGame;
}

export interface selectNpcAction {
    type: GameActionTypes.SelectNpc;
    payload: number | undefined | null;
}

export interface PlayBeerPongAction {
    type: GameActionTypes.PlayBeerPong;
    payload: number;
}

export const resetGame = (): ResetGameAction => ({
    type: GameActionTypes.ResetGame
});

export const selectNpc = (
    npcId: number | undefined | null
): selectNpcAction => ({
    type: GameActionTypes.SelectNpc,
    payload: npcId
});

export const playBeerPong = (npcId: number): PlayBeerPongAction => ({
    type: GameActionTypes.PlayBeerPong,
    payload: npcId
});

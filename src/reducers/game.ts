import { GameAction, GameActionTypes } from '../actions';
import { getInitialGameState } from '../utils/data';

export enum GameStatus {
    normal,
    drunk,
    win
}

export interface GameState {
    status: GameStatus;
    turns: number;
    score: number;
    player: Player;
    npcs: Npc[];
}

interface Player {
    name: string;
    avatarUrl: string;
    level: number;
    exp: number;
    drunk: number;
    water: number;
}

interface Npc {
    id: number;
    name: string;
    avatarUrl: string;
    level: number;
    isCursed: boolean;
    friends: number[];
}

export const gameReducer = (
    state: GameState = getInitialGameState(),
    action: GameAction
): GameState => {
    switch (action.type) {
        case GameActionTypes.PlayBeerPong:
            return state;
        case GameActionTypes.DrinkWater:
            return state;
        case GameActionTypes.Vomit:
            return state;
        case GameActionTypes.ResetGame:
            return getInitialGameState();
        default:
            return state;
    }
};
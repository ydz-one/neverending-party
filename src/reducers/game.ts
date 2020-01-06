import { GameAction, GameActionTypes } from '../actions';
import { getInitialGameState } from '../utils/data';
import {
    calcWinChance,
    calcOutcome,
    calcAdditonalSaved,
    calcExpInfo
} from '../utils/calc';

export enum GameStatus {
    normal,
    win
}

export interface GameState {
    status: GameStatus;
    turns: number;
    score: number;
    player: Player;
    npcs: Npc[];
    selectedNpc: number | undefined | null;
}

export interface Player {
    name: string;
    avatarUrl: string;
    level: number;
    exp: number;
}

export interface Npc {
    id: number;
    name: string;
    avatarUrl: string;
    avatarSavedUrl: string;
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
            let { player, npcs } = state;
            const npc = npcs[action.payload];
            const winChance = calcWinChance(player.level, npc.level);
            const isWin = calcOutcome(winChance);

            if (!isWin) {
                return {
                    ...state,
                    turns: state.turns + 1
                };
            }

            let savedNpcs = [npc.id];
            const additonalSaved = calcAdditonalSaved(npcs, npc.friends);
            savedNpcs = savedNpcs.concat(additonalSaved);
            npcs = npcs.map((npc, id) => {
                if (savedNpcs.includes(id)) {
                    return {
                        ...npc,
                        isCursed: false
                    };
                }
                return npc;
            });

            const expGained = savedNpcs.reduce(
                (acc, npcId) => acc + npcs[npcId].level,
                0
            );

            const exp = player.exp + expGained;
            const level = calcExpInfo(exp).curLvl;

            player = {
                ...player,
                exp,
                level
            };

            const score = state.score + savedNpcs.length;
            let status = GameStatus.normal;
            if (score === npcs.length) {
                status = GameStatus.win;
            }

            return {
                ...state,
                player,
                npcs,
                score,
                turns: state.turns + 1,
                status
            };
        case GameActionTypes.SelectNpc:
            return {
                ...state,
                selectedNpc: action.payload
            };
        case GameActionTypes.ResetGame:
            return getInitialGameState();
        default:
            return state;
    }
};

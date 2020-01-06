import { notification } from 'antd';
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
    win,
    help
}

enum MessageType {
    success = 'success',
    error = 'error'
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

const notifyOutcome = (
    isWin: boolean,
    student: string,
    additonalSaved: number
) => {
    let messageType: MessageType,
        message: string,
        description: string,
        duration = 2;
    if (isWin) {
        messageType = MessageType.success;
        message = 'Won!';
        description = additonalSaved
            ? additonalSaved > 1
                ? `You won the beer pong duel against ${student}, and also saved ${additonalSaved} other students from the curse!`
                : `You won the beer pong duel against ${student}, and also saved one other student from the curse!`
            : `You won the beer pong duel against ${student}!`;
        duration = additonalSaved ? 4 : 2;
    } else {
        messageType = MessageType.error;
        message = 'Lost!'!;
        description = `You lost the beer pong duel against ${student}`;
    }
    notification[messageType]({
        message,
        description,
        duration,
        top: 77
    });
};

const notifyLevelUp = (level: number) => {
    notification.success({
        message: 'Level up!',
        description: `You are now at level ${level}`,
        duration: 2,
        top: 77
    });
};

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
                notifyOutcome(false, npc.name, 0);
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

            notifyOutcome(true, npc.name, savedNpcs.length - 1);
            const exp = player.exp + expGained;
            const level = calcExpInfo(exp).curLvl;

            if (level > player.level) {
                notifyLevelUp(level);
            }

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
        case GameActionTypes.DisplayHelp:
            return {
                ...state,
                status: action.payload ? GameStatus.help : GameStatus.normal
            };
        default:
            return state;
    }
};

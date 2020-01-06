import { Npc } from '../reducers/game';

export const calcWinChance = (playerLvl: number, npcLvl: number): number => {
    const diff = playerLvl - npcLvl;
    if (diff > 2) {
        return 99;
    }
    if (diff === 2) {
        return 95;
    }
    if (diff === 1) {
        return 75;
    }
    if (diff === 0) {
        return 50;
    }
    if (diff === -1) {
        return 25;
    }
    if (diff === -2) {
        return 5;
    }
    return 1;
};

const lvlExps = [5, 10, 20, 40, 80, 160];

export const calcExpInfo = (
    exp: number
): { nextLvlExp: number; curLvl: number } => {
    let i = 0;
    while (exp >= lvlExps[i]) {
        i++;
    }
    return {
        nextLvlExp: lvlExps[i],
        curLvl: i + 1
    };
};

export const calcOutcome = (winChance: number): boolean => {
    const roll = Math.floor(Math.random() * 101);
    console.log(`roll: ${roll}, winChance: ${winChance}`);
    return roll <= winChance;
};

export const chanceOfFriendSave = 30;

export const calcAdditonalSaved = (
    npcs: Npc[],
    friends: number[]
): number[] => {
    const saved: number[] = [];
    friends.forEach(friend => {
        const isSaved = calcOutcome(chanceOfFriendSave);
        if (isSaved && npcs[friend].isCursed) {
            saved.push(friend);
        }
    });
    return saved;
};

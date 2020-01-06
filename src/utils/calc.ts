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

export const calcNextLvlExp = (exp: number): number => {
    let nextExp = 5;
    while (exp >= nextExp) {
        nextExp *= 2;
    }
    return nextExp;
};

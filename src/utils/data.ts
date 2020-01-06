import { GameState, GameStatus } from '../reducers/game';
import { avatars } from '../svg';

const playerName = 'President Amy';

const npcData: { name: string; level: number; friends: number[] }[] = [
    { name: 'Jenny', level: 2, friends: [1, 6] },
    { name: 'Octavia', level: 2, friends: [0, 6] },
    { name: 'Steph', level: 2, friends: [7, 14] },
    { name: 'Estella', level: 3, friends: [4, 8] },
    { name: 'Trinity', level: 5, friends: [3, 5, 10] },
    { name: 'Laura', level: 4, friends: [4, 10, 11] },
    { name: 'Philippa', level: 2, friends: [0, 1] },
    { name: 'Astrid', level: 3, friends: [2, 13] },
    { name: 'Aurelia', level: 3, friends: [3, 13] },
    { name: 'Megan', level: 3, friends: [17, 22] },
    { name: 'Billie', level: 4, friends: [4, 5, 11] },
    { name: 'Harper', level: 4, friends: [4, 5, 10] },
    { name: 'Harley', level: 3, friends: [13, 18] },
    { name: 'Emma', level: 5, friends: [7, 8, 12, 20] },
    { name: 'Alex', level: 3, friends: [2, 20, 21] },
    { name: 'Bernie', level: 3, friends: [20, 22] },
    { name: 'Sebastian', level: 3, friends: [22, 23] },
    { name: 'Chad', level: 2, friends: [9, 29] },
    { name: 'Freddie', level: 2, friends: [12, 19] },
    { name: 'Jamie', level: 2, friends: [18, 26] },
    { name: 'Eugene', level: 4, friends: [13, 14, 15] },
    { name: 'Dom', level: 3, friends: [14, 26, 27] },
    { name: 'Greg', level: 5, friends: [9, 15, 16, 23, 28] },
    { name: 'Steve', level: 3, friends: [16, 22] },
    { name: 'Adrian', level: 1, friends: [25] },
    { name: 'Kevin', level: 1, friends: [24] },
    { name: 'Jason', level: 3, friends: [19, 21, 27] },
    { name: 'Marcus', level: 2, friends: [21, 26] },
    { name: 'Danny', level: 3, friends: [22, 29] },
    { name: 'Tommy', level: 2, friends: [17, 28] }
];

export const getInitialGameState = (): GameState => {
    return {
        status: GameStatus.normal,
        turns: 0,
        score: 0,
        player: {
            name: playerName,
            avatarUrl: avatars.player,
            level: 1,
            exp: 0,
            drunk: 0,
            water: 0
        },
        npcs: npcData.map(({ name, level, friends }, id) => ({
            id,
            name,
            avatarUrl: avatars.npc[id],
            level,
            isCursed: true,
            friends
        }))
    };
};

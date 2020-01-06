import { MetaAction } from '../actions';

export interface MetaState {
    showHelp: boolean;
    showHighScore: boolean;
    highScores: {
        name: string;
        score: number;
    }[];
}

const initialMetaState = {
    showHelp: false,
    showHighScore: false,
    highScores: [
        { name: '-', score: Number.MAX_SAFE_INTEGER },
        { name: '-', score: Number.MAX_SAFE_INTEGER },
        { name: '-', score: Number.MAX_SAFE_INTEGER },
        { name: '-', score: Number.MAX_SAFE_INTEGER },
        { name: '-', score: Number.MAX_SAFE_INTEGER }
    ]
};

export const metaReducer = (
    state: MetaState = initialMetaState,
    action: MetaAction
): MetaState => {
    return state;
};

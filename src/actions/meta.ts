import { MetaActionTypes } from './types';

export interface ScreenShowAction {
    type: MetaActionTypes.ShowHelp | MetaActionTypes.ShowHighScore;
    payload: boolean;
}

export interface AddHighScoreAction {
    type: MetaActionTypes.ShowHighScore;
    payload: {
        name: string;
        score: number;
    };
}

export const setShowHelp = (visible: boolean): ScreenShowAction => ({
    type: MetaActionTypes.ShowHelp,
    payload: visible
});

export const setShowHighScore = (visible: boolean): ScreenShowAction => ({
    type: MetaActionTypes.ShowHighScore,
    payload: visible
});

export const addHighScore = (
    name: string,
    score: number
): AddHighScoreAction => ({
    type: MetaActionTypes.ShowHighScore,
    payload: {
        name,
        score
    }
});

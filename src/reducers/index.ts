import { combineReducers } from 'redux';
import { GameState, gameReducer } from './game';

export interface StoreState {
    game: GameState;
}

export const reducers = combineReducers<StoreState>({
    game: gameReducer
});

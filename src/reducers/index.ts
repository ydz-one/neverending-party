import { combineReducers } from 'redux';
import { GameState, gameReducer } from './game';
import { MetaState, metaReducer } from './meta';

export interface StoreState {
    meta: MetaState;
    game: GameState;
}

export const reducers = combineReducers<StoreState>({
    meta: metaReducer,
    game: gameReducer
});

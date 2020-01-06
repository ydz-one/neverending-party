import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { StoreState } from '../reducers';
import { Player, Npc } from '../reducers/game';
import { calcWinChance } from '../utils/calc';
import { playBeerPong } from '../actions';

interface AppProps {
    player: Player;
    npc: Npc | undefined | null;
    playBeerPong: typeof playBeerPong;
}

const _ActionCard = ({ player, npc, playBeerPong }: AppProps) => {
    const onClickDuel = () => {
        if (npc) {
            playBeerPong(npc.id);
        }
    };

    return npc ? (
        <div className="action-card">
            <Card size="small" title="Beer Pong Duel" style={{ width: 300 }}>
                <p>{`${player.name} (lvl: ${player.level}) vs ${npc.name} (lvl: ${npc.level})`}</p>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        onClick={onClickDuel}
                        disabled={!npc.isCursed}
                    >
                        {npc.isCursed
                            ? `Duel (${calcWinChance(
                                  player.level,
                                  npc.level
                              )}% probability of win)`
                            : 'Already Saved from Curse'}
                    </Button>
                </div>
            </Card>
        </div>
    ) : (
        <div></div>
    );
};

const mapStateToProps = ({
    game
}: StoreState): { player: Player; npc: Npc | undefined | null } => {
    const { player, npcs, selectedNpc } = game;
    let npc;
    if (!(selectedNpc == null)) {
        npc = npcs[selectedNpc];
    }
    return {
        player,
        npc
    };
};

export const ActionCard = connect(mapStateToProps, { playBeerPong })(
    _ActionCard
);

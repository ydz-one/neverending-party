import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { StoreState } from '../reducers';
import { Player, Npc } from '../reducers/game';
import { calcWinChance } from '../utils/calc';

interface AppProps {
    player: Player;
    npc: Npc | undefined | null;
}

const _ActionCard = ({ player, npc }: AppProps) =>
    npc ? (
        <div className="action-card">
            <Card size="small" title="Beer Pong Duel" style={{ width: 300 }}>
                <p>{`${player.name} (lvl: ${player.level}) vs ${npc.name} (lvl: ${npc.level})`}</p>
                <div style={{ textAlign: 'center' }}>
                    <Button type="primary">{`Duel (${calcWinChance(
                        player.level,
                        npc.level
                    )}% probability of win)`}</Button>
                </div>
            </Card>
        </div>
    ) : (
        <div></div>
    );

const mapStateToProps = ({ game }: StoreState): AppProps => {
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

export const ActionCard = connect(mapStateToProps)(_ActionCard);

import React from 'react';
import { connect } from 'react-redux';
import Graph from 'react-graph-vis';
import { StoreState } from '../reducers';
import { Npc } from '../reducers/game';
import { selectNpc } from '../actions';

interface AppProps {
    npcs: Npc[];
    selectNpc: typeof selectNpc;
}

const options = {
    height: '80vh',
    width: '100%',
    layout: {
        hierarchical: false
    },
    edges: {
        arrows: {
            to: {
                enabled: false
            }
        },
        color: '#aaa'
    }
};

const _Board = ({ npcs, selectNpc }: AppProps) => {
    const nodes = npcs.map((npc, id) => ({
        id,
        label: `${npc.name} (lvl: ${npc.level})`,
        image: npc.avatarUrl,
        shape: 'image'
    }));

    const edges: { to: number; from: number }[] = [];
    npcs.forEach((npc, id) => {
        npc.friends.forEach(friendId => {
            edges.push({ to: friendId, from: id });
        });
    });

    const graph = {
        nodes,
        edges
    };

    const events = {
        select: function(event: any) {
            const { nodes } = event;
            console.log(nodes);
            let npcId;
            if (nodes && nodes.length) {
                npcId = nodes[0];
            }
            selectNpc(npcId);
        }
    };

    return <Graph graph={graph} options={options} events={events} />;
};

const mapStateToProps = ({ game }: StoreState): { npcs: Npc[] } => {
    const { npcs } = game;
    return {
        npcs
    };
};

export const Board = connect(mapStateToProps, { selectNpc })(_Board);

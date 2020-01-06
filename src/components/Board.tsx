import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from 'react-graph-vis';
import { StoreState } from '../reducers';
import { GameState, GameStatus } from '../reducers/game';

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

const events = {
    select: function(event: any) {
        var { nodes, edges } = event;
    }
};

const _Board = ({ npcs }: GameState): JSX.Element => {
    const nodes = npcs.map((npc, id) => ({
        id,
        label: `${npc.name} (lvl: ${npc.level})`,
        image: npc.avatarUrl,
        shape: 'image'
    }));

    const edges: { to: number; from: number }[] = [];
    npcs.forEach((npc, id) => {
        npc.friends.forEach(friendId => {
            edges.push({ to: id, from: friendId });
        });
    });

    const graph = {
        nodes,
        edges
    };

    return <Graph graph={graph} options={options} events={events} />;
};

const mapStateToProps = ({ game }: StoreState) => game;

export const Board = connect(mapStateToProps)(_Board);

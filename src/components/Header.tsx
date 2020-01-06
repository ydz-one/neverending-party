import React from 'react';
import { connect } from 'react-redux';
import { PageHeader, Menu, Button, Dropdown, Icon, Tag } from 'antd';
import { StoreState } from '../reducers';
import { calcExpInfo } from '../utils/calc';
import { displayHelp, resetGame } from '../actions';
import { Player, Npc } from '../reducers/game';

interface AppProps {
    player: Player;
    turns: number;
    score: number;
    npcs: Npc[];
    resetGame: typeof resetGame;
    displayHelp: typeof displayHelp;
}

const _Header = ({
    player,
    turns,
    score,
    npcs,
    displayHelp,
    resetGame
}: AppProps) => {
    const { name, level, avatarUrl, exp } = player;

    const menu = (
        <Menu>
            <Menu.Item onClick={() => displayHelp(true)}>
                Instructions
            </Menu.Item>
            <Menu.Item onClick={resetGame}>Restart Game</Menu.Item>
        </Menu>
    );

    const DropdownMenu = () => (
        <Dropdown key="more" overlay={menu}>
            <Button
                style={{
                    border: 'none',
                    padding: 0
                }}
            >
                <Icon
                    type="ellipsis"
                    style={{
                        fontSize: 20,
                        verticalAlign: 'top'
                    }}
                />
            </Button>
        </Dropdown>
    );

    return (
        <PageHeader
            title={name}
            style={{
                border: '1px solid rgb(235, 237, 240)',
                background: '#fff'
            }}
            tags={[
                <Tag key="level" color="blue">{`lvl: ${level}`}</Tag>,
                <Tag key="exp" color="blue">{`exp: ${exp}/${
                    calcExpInfo(exp).nextLvlExp
                }`}</Tag>
            ]}
            extra={[
                <Tag
                    key="turns"
                    className="header-extra-stat"
                >{`turns: ${turns}`}</Tag>,
                <Tag
                    key="score"
                    className="header-extra-stat"
                >{`students saved: ${score}/${npcs.length}`}</Tag>,
                <DropdownMenu key="more" />
            ]}
            avatar={{
                src: avatarUrl
            }}
        ></PageHeader>
    );
};

const mapStateToProps = ({
    game
}: StoreState): {
    player: Player;
    turns: number;
    score: number;
    npcs: Npc[];
} => {
    const { player, turns, score, npcs } = game;
    return {
        player,
        turns,
        score,
        npcs
    };
};

export const Header = connect(mapStateToProps, { displayHelp, resetGame })(
    _Header
);

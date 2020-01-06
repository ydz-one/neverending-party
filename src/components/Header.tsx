import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Menu, Button, Dropdown, Icon, Tag } from 'antd';
import { GameState } from '../reducers/game';
import { StoreState } from '../reducers';
import { calcNextLvlExp } from '../utils/calc';

interface AppProps {}

const menu = (
    <Menu>
        <Menu.Item>Instructions</Menu.Item>
        <Menu.Item>High Score</Menu.Item>
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

const _Header = ({ player, turns, score, npcs }: GameState) => {
    const { name, level, avatarUrl, exp } = player;

    return (
        <PageHeader
            title={name}
            style={{
                border: '1px solid rgb(235, 237, 240)',
                background: '#fff'
            }}
            tags={[
                <Tag color="blue">{`lvl: ${level}`}</Tag>,
                <Tag color="blue">{`exp: ${exp}/${calcNextLvlExp(exp)}`}</Tag>
            ]}
            extra={[
                <Tag className="header-extra-stat">{`Turns: ${turns}`}</Tag>,
                <Tag className="header-extra-stat">{`Students Saved: ${score}/${npcs.length}`}</Tag>,
                <DropdownMenu key="more" />
            ]}
            avatar={{
                src: avatarUrl
            }}
        ></PageHeader>
    );
};

const mapStateToProps = ({ game }: StoreState): GameState => game;

export const Header = connect(mapStateToProps)(_Header);

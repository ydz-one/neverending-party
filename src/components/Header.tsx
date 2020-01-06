import React from 'react';
import { connect } from 'react-redux';
import { PageHeader, Menu, Button, Dropdown, Icon, Tag } from 'antd';
import { GameState } from '../reducers/game';
import { StoreState } from '../reducers';
import { calcExpInfo } from '../utils/calc';

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
                <Tag key="level" color="blue">{`lvl: ${level}`}</Tag>,
                <Tag key="exp" color="blue">{`exp: ${exp}/${
                    calcExpInfo(exp).nextLvlExp
                }`}</Tag>
            ]}
            extra={[
                <Tag
                    key="turns"
                    className="header-extra-stat"
                >{`Turns: ${turns}`}</Tag>,
                <Tag
                    key="score"
                    className="header-extra-stat"
                >{`Students Saved: ${score}/${npcs.length}`}</Tag>,
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

import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, List } from 'antd';
import { displayHelp } from '../actions';
import { StoreState } from '../reducers';
import { GameStatus } from '../reducers/game';
import { chanceOfFriendSave } from '../utils/calc';

interface AppProps {
    isHelp: boolean;
    displayHelp: typeof displayHelp;
}

const tips = [
    'Your likelihood of winning beer pong duels increases with your level.',
    `Whenever each student is defeated, their immediate friends have a ${chanceOfFriendSave}% chance of their curse being lifted`
];

const _HelpModal = ({ isHelp, displayHelp }: AppProps) => {
    const onClickContinue = () => {
        displayHelp(false);
    };

    return (
        <Modal
            title="Instructions"
            visible={isHelp}
            onOk={onClickContinue}
            onCancel={onClickContinue}
            footer={[
                <Button key="submit" type="primary" onClick={onClickContinue}>
                    Continue
                </Button>
            ]}
        >
            <p>
                The Neverending Party Curse has befallen one of the fraternities
                on campus. This curse makes it impossible for any of the party
                guests to leave, which means that they will eventually die of
                exhaustion.
            </p>
            <p>
                The party has been going on for three days now, and you, as the
                university president, have decided to take matters into your own
                hands.
            </p>
            <p>
                According to one of your grad students, the Curse can be broken
                by defeating each party attendee in beer pong, and that is
                precisely what you will do...
            </p>
            <p>
                <List
                    size="small"
                    header={<h4>Tips</h4>}
                    bordered
                    dataSource={tips}
                    renderItem={tip => <List.Item>{tip}</List.Item>}
                />
            </p>
        </Modal>
    );
};

const mapStateToProps = ({ game }: StoreState): { isHelp: boolean } => {
    const { status } = game;
    return {
        isHelp: status === GameStatus.help
    };
};

export const HelpModal = connect(mapStateToProps, { displayHelp })(_HelpModal);

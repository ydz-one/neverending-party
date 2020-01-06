import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { resetGame } from '../actions';
import { StoreState } from '../reducers';
import { GameStatus } from '../reducers/game';

interface AppProps {
    isWin: boolean;
    turns: number;
    resetGame: typeof resetGame;
}

const _WinModal = ({ isWin, turns, resetGame }: AppProps) => (
    <Modal
        title="You're the best university president!"
        visible={isWin}
        onOk={resetGame}
        onCancel={resetGame}
        footer={[
            <Button key="submit" type="primary" onClick={resetGame}>
                Play again
            </Button>
        ]}
    >
        <p>
            {`Good job! You freed all the students from the cursed frat
            house in ${turns} turns.`}
        </p>
    </Modal>
);

const mapStateToProps = ({
    game
}: StoreState): { isWin: boolean; turns: number } => {
    const { status, turns } = game;
    return {
        isWin: status === GameStatus.win,
        turns
    };
};

export const WinModal = connect(mapStateToProps, { resetGame })(_WinModal);

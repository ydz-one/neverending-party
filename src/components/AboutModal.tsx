import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { displayAbout } from '../actions';
import { StoreState } from '../reducers';
import { GameStatus } from '../reducers/game';

interface AppProps {
    isAbout: boolean;
    displayAbout: typeof displayAbout;
}

const _AboutModal = ({ isAbout, displayAbout }: AppProps) => {
    const onClickContinue = () => {
        displayAbout(false);
    };

    return (
        <Modal
            title="About Neverending Party"
            visible={isAbout}
            onOk={onClickContinue}
            onCancel={onClickContinue}
            footer={[
                <Button key="submit" type="primary" onClick={onClickContinue}>
                    Continue
                </Button>
            ]}
        >
            <p>
                This game was made in three days by YD Zhao for Geta Game Jam
                10.
            </p>
            <p>
                You can see the source code{' '}
                <a
                    href="https://github.com/ydz-one/neverending-party"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                .
            </p>
            <p>
                <strong>Tech:</strong> TypeScript, React, Redux, Ant Design,
                vis.js
                <br></br>
                <strong>Icons:</strong> icons8, avataaars
            </p>
        </Modal>
    );
};

const mapStateToProps = ({ game }: StoreState): { isAbout: boolean } => {
    const { status } = game;
    return {
        isAbout: status === GameStatus.about
    };
};

export const AboutModal = connect(mapStateToProps, { displayAbout })(
    _AboutModal
);

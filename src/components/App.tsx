import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Board } from './Board';
import { Header } from './Header';
import { ActionCard } from './ActionCard';
import { HelpModal } from './HelpModal';
import { WinModal } from './WinModal';

class _App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Board />
                <ActionCard />
                <HelpModal />
                <WinModal />
            </div>
        );
    }
}

export const App = connect()(_App);

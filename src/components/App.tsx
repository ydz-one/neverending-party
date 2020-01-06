import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Board } from './Board';
import { Layout, PageHeader } from 'antd';

class _App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Layout.Header>
                        <PageHeader title="President Amy" />
                    </Layout.Header>
                    <Layout.Content className="board">
                        <Board />
                    </Layout.Content>
                </Layout>
            </div>
        );
    }
}

export const App = connect()(_App);

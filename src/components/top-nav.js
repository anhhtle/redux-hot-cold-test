import React from 'react';
import {connect} from 'react-redux';

import {newGame, toggleInfoModal} from '../actions';

export class TopNav extends React.Component {
    newGame1(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
    }

    toggleInfoModal1(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.toggleInfoModal1(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.newGame1(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);

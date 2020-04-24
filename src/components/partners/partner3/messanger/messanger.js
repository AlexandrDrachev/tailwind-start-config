import React, { Component } from 'react';

import { connect } from 'react-redux';

class Messanger extends Component {

    render() {

        return (
            <div>
                <div>
                    <div>Messanger</div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messanger);
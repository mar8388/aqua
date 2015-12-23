'use strict';
const Footer = require('./footer.jsx');
const Navbar = require('./navbar.jsx');
const React = require('react');


const propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object
};


class Component extends React.Component {
    render() {

        return (
            <div>
                <Navbar location={this.props.location} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

Component.propTypes = propTypes;


module.exports = Component;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './chatHeader';
import Content from './chatContent';
import Footer from './chatFooter';
import { chatAction } from './../action/chataction';

class App extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-md-8 col-xl-6 chat">
                        <div className="card">
                            <Header />
                            <Content messagedata={this.props.chatJson} />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return { chatJson: state.chatJson };
};

export default connect(mapStateToProps, { chatAction })(App);
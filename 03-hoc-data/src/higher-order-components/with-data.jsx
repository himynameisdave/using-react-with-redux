import React, { Component } from 'react';
import Loading from '../components/loading/loading.jsx';


const WithData = (WrappedComponent) => {
    return class extends Component {
        state = {
            isFetching: false,
            data: null,
            error: null,
        }

        componentWillMount() {
            this.setState(() => ({ isFetching: true }));
            fetch('http://localhost:3001/')
                .then(response => response.json())
                .then(data => {
                    this.setState(() => ({
                        isFetching: false,
                        data,
                    }));
                })
                .catch(error => {
                    this.setState(() => ({
                        isFetching: false,
                        error,
                    }))
                })
        };

        render() {
            return this.state.isFetching
                ? (<Loading />)
                : (<WrappedComponent
                    data={this.state.data}
                    error={this.state.error}
                    {...this.props}
                />)
        }
    }
};


export default WithData;

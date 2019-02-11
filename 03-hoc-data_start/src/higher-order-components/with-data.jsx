import React, { Component } from 'react';
import Loading from '../components/loading/loading.jsx';


const WithData = (WrappedComponent, url = 'http://localhost:3001/') => {
    return class extends Component {
        state = {
            isFetching: false,
            data: null,
            error: null,
        }
        componentWillMount() {
            this.setState(() => ({ isFetching: true }));
            fetch(url)
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
            const { data, error, isFetching } = this.state;
            return isFetching
                ? <Loading />
                : (
                    <WrappedComponent
                        error={error}
                        data={data}
                    />
                );
        }
    };
};

export default WithData;

import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        error: '',
        errorInfo: ''
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <pre>Just because</pre>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
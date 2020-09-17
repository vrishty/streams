import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createStream(formValues);
        //No need to call preventDefault as Redux handleSubmit takes care of it internally
        //event.preventDefault();
    };
    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);
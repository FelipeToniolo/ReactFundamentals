import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: ''
        };
        this.onFielsChange = this.onFielsChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    onFielsChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm_input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFielsChange}/>
        </div>
        <div className="AddAuthorForm_input">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="image Url" value={this.state.imageUrl}/>
        </div>
        <input type="submit" value="Add"/>
    </form>

    }
}

function AddAuthorForm({match, onAddAuthor}) {
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>;
}

export default AddAuthorForm;
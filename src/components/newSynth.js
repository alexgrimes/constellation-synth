import React from "react";

class newSynth extends React.Component {
  state = {
    frequency: '',
    type: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    this.props.handleNewOsc(this.state)
  }

  handleNewFrequency = (event) => {
    this.setState ({ title: event.target.value })
  }

  handleNewType = (event) => {
    this.setState ({ author: event.target.value })
  }

  render() {
    return (
      <div className="new-osc">
      {
        this.props.username ? 
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input value={this.state.title} onChange={this.handleNewTitle} placeholder="Title" />
          <textarea value={this.state.content} onChange={this.handleNewContent} placeholder="Write your masterpiece here..." rows={10} />
          <input type="submit" value="Share your masterpiece" />
        </form> 
        :
        'Sign-in to add new poems'
      }
      </div>
    );
  }
}

export default NewPoemForm;
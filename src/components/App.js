import React, { Component } from 'react';
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }
  componentDidMount() {
    const { store } = this.props;

    // Subscribe to our store, so that whenever
    // it changes we are updating our component
    // state, using whatever the current state is.
    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }
  // Whenever our `submitFood` method runs, we
  // dispatch an action which will then go to our
  // reducer and update our store.
  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      // We'll just hardcode it for now.
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      }
    }))

    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
    </div>
    );
  }
}

export default App;

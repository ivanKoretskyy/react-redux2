import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'; 
import * as actionType from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtracCounter}  />
                <button onClick={this.props.onStoreCounter.bind(this, this.props.ctr)}>Store result</button>
                <ul>
                  {this.props.results.map((el,i) => (
                  <li
                    key={el.id}
                    onClick={this.props.onDeleteCounter.bind(this,el.id)}>
                    {el.id}: {el.count}
                  </li>)
                  )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ctr: state.counter.counter, results: state.results.results});
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
    onAddCounter: () => dispatch({type: actionType.ADD, value: 5}),
    onSubtracCounter: () => dispatch({type: actionType.SUBTRACT, value: 5}),
    onStoreCounter: (result) => dispatch({type: actionType.STORE_RESULT, result }),
    onDeleteCounter: (id) => dispatch({type: actionType.DELETE_RESULT, id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { bindActionCreators } from 'redux'

function Counter({ count, incr, decr, random }) {
  return (
    <>
      <span>
        <b>count: {count} </b>
      </span>
      <br />
      <button onClick={incr} className="btn btn-primary">
        increment++
      </button>
      <button onClick={decr} className="btn btn-danger">
        decrement--
      </button>
      <button onClick={random} className="btn btn-info">
        random
      </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  }
}


export default connect(mapStateToProps, actions)(Counter)

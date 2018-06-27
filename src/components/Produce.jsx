import React from 'react'
import PropTypes from 'prop-types'

function Produce(props){
return (
  <div>
    <h3>{props.month}</h3>
    <ul>{props.selection}</ul>
    <hr/>
  </div>
)
}

Produce.propTypes = {
month: PropTypes.string.isRequired,
selection: PropTypes.string,
}

export default Produce;

import React from 'react'
import PropTypes from 'prop-types'

export const Props = ({ title, id }) => {
  return (
    <div className='props-card'>
        <h4>{title}</h4>
        <p>#{id}</p>
    </div>
  )
}

Props.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

Props.defaultProps = {
    title: 'No title',
    id: -1
}
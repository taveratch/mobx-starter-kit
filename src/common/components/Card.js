import React from 'react'

export default props => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{props.title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
      <p className="card-text">{props.body}</p>
    </div>
  </div>
)
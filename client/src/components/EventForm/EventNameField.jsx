import React from 'react'
const EventNameField = props => {
  const {
    event_name,
    handleEventFormChange,
    handleFieldSubmit,
  } = props
  return (
    <div>
      <label htmlFor="name">Event Name</label>
      <input
        type="text"
        placeholder="Name"
        name="event_name"
        value={event_name}
        id="event_name"
        onChange={handleEventFormChange}
        onSubmit={e => handleFieldSubmit(e)}
      />
    </div>
  )
}

export default EventNameField

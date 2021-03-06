import React from 'react'
const EventNameField = props => {
  const {
    event_name,
    handleEventFormChange,
    handleFieldSubmit,
  } = props
  return (
    <div className="event-name">
      <input
        type="text"
        placeholder="Name"
        name="event_name"
        value={event_name}
        id="event_name"
        onChange={handleEventFormChange}
      />
    </div>
  )
}

export default EventNameField

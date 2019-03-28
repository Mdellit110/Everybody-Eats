import React from "react";
import { withRouter } from "react-router-dom";
import EventsList from "./EventsList";

const UserProfile = props => {
  return (
    <div className="user-container">
      <h2>{props.currentUser.username}</h2>
      <p>Email: {props.currentUser.email}</p>
      <button
        className="edit-button"
        onClick={() =>
          props.history.push(
            `/user/${props.match.params.id}/edit/`
            )
          }>Edit User
      </button>
      <h1>Attending:</h1>
      <EventsList
        eventsList={props.eventsList}
      />
    </div>
  );
}
export default withRouter(UserProfile);

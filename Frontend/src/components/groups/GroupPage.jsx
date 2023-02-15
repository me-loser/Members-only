import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { useProtectedResources } from "../data/useProtectedResources";
import { postWithCredentials } from "../data/postWithCredentials";
import MessagesList from "../messages/MessagesList";
import RequestsList from "../requests/RequestsList";

const GroupPage = () => {
  const [messageValue, setMessageValue] = useState("");
  const { id } = useParams();
  const { user } = useUser();
  const { data: group, setData: setGroup } = useProtectedResources(
    `http://localhost:8080/groups/${id}`,
    { owner: {}, messages: [], requests: [] }
  );
  const acceptRequest = async (requestId) => {
    const response = await postWithCredentials(
      `http://localhost:8080/groups/${id}/requests/${requestId}/accept`
    );
    const updatedRequests = await response.json();
    setGroup({
      ...group,
      requests: updatedRequests,
    });
  };
  const rejectRequest = async (requestId) => {
    const response = await postWithCredentials(
      `http://localhost:8080/groups/${id}/requests/${requestId}/reject`
    );
    const updatedRequests = await response.json();
    setGroup({
      ...group,
      requests: updatedRequests,
    });
  };
  const sendMessage = async () => {
    const response = await postWithCredentials(
      `http://localhost:8080/groups/${id}/messages`,
      { text: messageValue }
    );
    const updatedMessages = await response.json();
    setGroup({
      ...group,
      messages: updatedMessages,
    });
    setMessageValue("");
  };
  return (
    <div className="centered-container">
      <h1>{group.name}</h1>
      <p>Owned by: {group.owner.fullName}</p>
      <MessagesList messages={group.messages} />
      <div className="new-message">
        <input
          type="text"
          placeholder="Type you message here..."
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button onClick={sendMessage}>Submit</button>
        {group.ownerId === user.uid ? (
          <RequestsList
            requests={group.requests}
            onAccept={acceptRequest}
            onReject={rejectRequest}
          />
        ) : null}
      </div>
    </div>
  );
};

export default GroupPage;

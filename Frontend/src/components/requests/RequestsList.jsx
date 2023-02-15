import RequestListItem from "./RequestListItem";

const RequestsList = ({ requests, onAccept, onReject }) => (
  <>
    <h2 className="section-heading">Join Requests</h2>
    {requests.length > 0 ? (
      requests.map((request) => (
        <RequestListItem
          key={request._id}
          request={request}
          onAccept={onAccept}
          onReject={onReject}
        />
      ))
    ) : (
      <p>No pending Requests</p>
    )}
  </>
);

export default RequestsList;

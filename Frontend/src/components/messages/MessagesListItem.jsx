const MessagesListItem = ({ message }) => {
  return (
    <div className="list-item">
      <div className="list-item-data">
        <h3>{message.userName}</h3>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default MessagesListItem;

const MessageItem = ({ message }) => {
  const { username, text } = message;

  return (
    <li
      style={{
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <small style={{ fontWeight: "bold" }}>@{username}</small>
      <div>{text}</div>
    </li>
  );
};

export default MessageItem;

function MessageList({ messages }) {
  return (
    <div>
      <h1>Список сообщений</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;

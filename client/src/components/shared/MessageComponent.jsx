import React, { memo } from "react";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attactments = [], createdAt } = message;
  return <div>MessageComponent{sender.name}</div>;
};

export default memo(MessageComponent);

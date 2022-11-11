import * as React from "react";
import { minMax } from "../../../utils/min-max";
import { AddChatMessageButton, ChatContainer, ChatMessage } from "./styles";

type ChatMessageType = { id: number; text: string; name: string };

type Props = {};

const Chat = ({}: Props) => {
  const [chatHistory] = React.useState<ChatMessageType[]>([
    { id: 1, text: "Welcome to the 3D lobby!", name: "Vic" },
    { id: 2, text: "Nice paper xylophone", name: "Bob" },
    { id: 3, text: "Thanks Bob. I made it myself", name: "Vic" },
    { id: 4, text: "Cool. What about the ping-pong tree?", name: "Bob" },
    { id: 5, text: "No...that was here when I got here", name: "Vic" },
  ]);
  const [chatIndex, setChatIndex] = React.useState(0);

  React.useEffect(() => {
    const milliseconds = minMax(Math.random() * 5 * 1500, 3500, 6000);
    if (chatIndex === chatHistory.length) return;
    const interval = setInterval(() => {
      setChatIndex((prevIndex) => prevIndex + 1);
    }, milliseconds);
    return () => clearInterval(interval);
  }, [chatIndex, chatHistory]);

  return (
    <ChatContainer>
      {chatHistory
        .filter((_, i) => i < chatIndex)
        .map(({ id, text, name }) => (
          <ChatMessage key={id} alignRight={name === "Vic"}>
            <p>{name}</p>
            <p>{text}</p>
          </ChatMessage>
        ))}
      {/* <AddChatMessageButton>+</AddChatMessageButton> */}
    </ChatContainer>
  );
};

export default Chat;

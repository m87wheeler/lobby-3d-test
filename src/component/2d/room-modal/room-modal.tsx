import * as React from "react";
import { useAppStore } from "../../../stores/app-store";
import {
  CloseModalButton,
  RoomModalContainer,
  RoomContent,
  EnterRoomButton,
} from "./styles";

type Props = {};

const RoomModal = ({}: Props) => {
  const { selectedRoom, handleSelectedRoom, hotspots } = useAppStore();

  const room = React.useMemo(() => {
    return hotspots.find(({ id }) => id === selectedRoom)?.properties ?? null;
  }, [hotspots, selectedRoom]);

  return (
    <RoomModalContainer selectedRoom={selectedRoom}>
      <CloseModalButton onClick={() => handleSelectedRoom(null)}>
        CLOSE
      </CloseModalButton>
      {room && (
        <RoomContent>
          <h2>{room.title}</h2>
          <p>{room.description}</p>
          <EnterRoomButton>Join</EnterRoomButton>
        </RoomContent>
      )}
    </RoomModalContainer>
  );
};

export default RoomModal;

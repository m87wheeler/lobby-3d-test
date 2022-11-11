import styled, { css } from "styled-components";

export const RoomModalContainer = styled.div<{ selectedRoom: number | null }>`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  translate: -50% 16rem;
  opacity: 0;
  width: clamp(10rem, 90vw, 40rem);
  height: 12rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  border-radius: 0.5rem;
  background-color: rgba(47 47 47 / 0.9);
  z-index: 30;
  transition: all 350ms ease-in-out;

  ${({ selectedRoom }) =>
    selectedRoom &&
    css`
      translate: -50% 0;
      opacity: 1;
    `}
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 1rem;
  font-size: calc(var(--font-size-md) * 0.9);
  font-weight: bold;
  color: white;
  background-color: rgba(var(--color-primary) / 0.9);
  border: none;
  border-radius: 0.25rem;
  user-select: none;
  cursor: pointer;
`;

export const RoomContent = styled.div`
  padding: 3rem 1rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 1rem;
  color: rgb(255 255 255);
`;

export const EnterRoomButton = styled.button`
  padding: 0.5rem 2rem;
  color: white;
  background-color: rgba(var(--color-primary) / 0.9);
  border: none;
  border-radius: 100vmax;
`;

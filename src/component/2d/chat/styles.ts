import styled, { css, keyframes } from "styled-components";

export const ChatContainer = styled.ul`
  position: absolute;
  width: 100%;
  max-width: 20rem;
  top: calc((var(--video-width) * 0.5625) + 2rem);
  right: 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  border-radius: 0.5rem;
  list-style-type: none;
  z-index: 40;
`;

export const fadeIn = keyframes`
  to { max-height: 100%; opacity: 1; }
`;

export const ChatMessage = styled.div<{ alignRight: boolean }>`
  width: calc(100% - 2rem);
  align-self: flex-start;
  max-height: 0;
  opacity: 0;
  padding: 0.25rem 1rem;
  background-color: rgba(47 47 47 / 0.9);
  color: white;
  border-radius: 0.5rem;
  user-select: none;
  animation: ${fadeIn} 350ms ease-in-out forwards;

  ${({ alignRight }) =>
    alignRight &&
    css`
      align-self: flex-end;
      text-align: right;
      background-color: rgba(var(--color-primary) / 0.9);
    `}

  p {
    font-size: var(--font-size-md);

    &:first-of-type {
      font-size: calc(var(--font-size-md) * 0.9);
      font-weight: bold;
    }
  }
`;

export const AddChatMessageButton = styled.button`
  width: 3rem;
  height: 3rem;
  align-self: flex-end;
  border-radius: 50%;
  border: none;
  background-color: rgba(var(--color-primary) / 0.9);
  cursor: pointer;
`;

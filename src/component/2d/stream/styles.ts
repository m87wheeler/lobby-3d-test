import styled, { css } from "styled-components";

export const StreamContainer = styled.div<{ zoomStream: boolean }>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: var(--video-width);
  height: calc(var(--video-width) * 0.5625);
  display: flex;
  flex-flow: column nowrap;
  border-radius: 0.5rem;
  opacity: 0.9;
  z-index: 50;
  transition: all 350ms ease-in-out;

  iframe {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    width: 2rem;
    height: 2rem;
    left: -2.5rem;
    top: 0;
    background-color: rgba(var(--color-primary) / 0.9);
    color: white;
    border: none;
    cursor: pointer;
  }

  ${({ zoomStream }) =>
    zoomStream &&
    css`
      --zoom-video-width: calc(100vw - 4rem);
      width: var(--zoom-video-width);
      height: calc(var(--zoom-video-width) * 0.5625);
    `}
`;

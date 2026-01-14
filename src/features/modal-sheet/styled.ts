// src/components/BottomSheet.styles.ts
import styled from "styled-components";

export const ModalSheetOverlayStyled = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

export const ModalSheetContainerStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 85vh;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
  z-index: 999;

  /* Начальное положение — за экраном */
  transform: translateY(100%);
  /* transition добавляется динамически через JS */
`;

export const ModalSheetHandleStyled = styled.div`
  width: 40px;
  height: 4px;
  background: #ccc;
  border-radius: 2px;
  margin: 12px auto 8px;
  cursor: grab;
`;

export const ModalSheetContentWrapperStyled = styled.div`
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  max-height: calc(85vh - 100px);
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
`;

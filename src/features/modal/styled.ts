// src/components/Modal.styles.ts
import styled from "styled-components";

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainerStyled = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: scaleIn 0.3s cubic-bezier(0.25, 0.1, 0.3, 1) forwards;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const ModalTitleStyled = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const ModalCloseButtonStyled = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textSecondary};
  border-radius: 50%;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.background};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ModalBodyStyled = styled.div`
  padding: 16px;
  overflow-y: auto;
  flex: 1;
`;

export const ModalFooterStyled = styled.div`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

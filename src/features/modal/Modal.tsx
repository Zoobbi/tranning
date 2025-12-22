// src/components/Modal.tsx
import React, { useRef, useEffect, useCallback } from "react";

import {
  Overlay,
  Container,
  Header,
  Title,
  CloseButton,
  Body,
  Footer,
} from "./styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode; // например, кнопки "Отмена" / "Сохранить"
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Блокировка скролла фона
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.cssText = `
      position: fixed;
      top: -${scrollY}px;
      left: 0;
      right: 0;
      overflow: hidden;
    `;

    return () => {
      document.body.style.cssText = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Закрытие по Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Container ref={modalRef}>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose} aria-label="Закрыть">
              ✕
            </CloseButton>
          </Header>

          <Body>{children}</Body>

          {footer && <Footer>{footer}</Footer>}
        </Container>
      </Overlay>
    </>
  );
};

// src/components/Modal.tsx
import React, { useRef, useEffect, useCallback } from "react";

import { KEY_CODES } from "@shared/lib/keyCodes";
import { TEXTS } from "@shared/lib/texts";

import {
  ModalBodyStyled,
  ModalCloseButtonStyled,
  ModalContainerStyled,
  ModalFooterStyled,
  ModalHeaderStyled,
  ModalOverlayStyled,
  ModalTitleStyled,
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
      if (e.key === KEY_CODES.escape) {
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
      <ModalOverlayStyled onClick={handleOverlayClick}>
        <ModalContainerStyled ref={modalRef}>
          <ModalHeaderStyled>
            <ModalTitleStyled>{title}</ModalTitleStyled>
            <ModalCloseButtonStyled
              onClick={onClose}
              aria-label={TEXTS.common.close}
            >
              ✕
            </ModalCloseButtonStyled>
          </ModalHeaderStyled>

          <ModalBodyStyled>{children}</ModalBodyStyled>

          {footer && <ModalFooterStyled>{footer}</ModalFooterStyled>}
        </ModalContainerStyled>
      </ModalOverlayStyled>
    </>
  );
};

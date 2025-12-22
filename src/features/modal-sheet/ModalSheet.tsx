import React, { useRef, useEffect, useState, useCallback } from "react";

import { Overlay, Container, Handle, ContentWrapper } from "./styled";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [render, setRender] = useState(false);

  // Анимация открытия/закрытия
  useEffect(() => {
    if (isOpen) {
      setRender(true);
    } else if (render && sheetRef.current) {
      sheetRef.current.style.transition =
        "transform 0.4s cubic-bezier(0.25, 0.1, 0.3, 1)";
      sheetRef.current.style.transform = "translateY(100%)";
      setTimeout(() => setRender(false), 400);
    }
  }, [isOpen, render]);

  useEffect(() => {
    if (render && sheetRef.current) {
      sheetRef.current.style.transform = "translateY(100%)";
      requestAnimationFrame(() => {
        if (sheetRef.current) {
          sheetRef.current.style.transition =
            "transform 0.4s cubic-bezier(0.25, 0.1, 0.3, 1)";
          sheetRef.current.style.transform = "translateY(0)";
        }
      });
    }
  }, [render]);

  // Блокировка скролла
  useEffect(() => {
    if (!render) return;
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
  }, [render]);

  // Закрытие по клику на оверлей
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  // --- Управление свайпом и скроллом ---
  useEffect(() => {
    if (!render || !sheetRef.current || !contentRef.current) return;

    let startY = 0;
    const closeThreshold = 5;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sheetRef.current || !contentRef.current) return;

      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      const isScrolledToBottom = () => {
        const el = contentRef.current!;

        return Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 5;
      };

      const isOnHandle = handleRef.current?.contains(e.target as Node);

      // Разрешаем прокрутку вверх
      if (deltaY < 0) {
        return;
      }

      // Проверяем порог и условие закрытия
      if (deltaY > closeThreshold && (isOnHandle || isScrolledToBottom())) {
        e.preventDefault();
        sheetRef.current.style.transform = `translateY(${deltaY}px)`;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!sheetRef.current) return;
      const finalDeltaY = e.changedTouches[0].clientY - startY;

      sheetRef.current.style.transition =
        "transform 0.4s cubic-bezier(0.25, 0.1, 0.3, 1)";

      if (finalDeltaY > 100) {
        onClose();
      } else {
        sheetRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        sheetRef.current!.style.transition = "";
      }, 400);
    };

    const element = sheetRef.current;
    element.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    element.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [render, onClose]);

  if (!render) return null;

  return (
    <>
      <Overlay $isVisible onClick={handleOverlayClick} />
      <Container ref={sheetRef}>
        <Handle ref={handleRef} />
        <ContentWrapper ref={contentRef}>{children}</ContentWrapper>
      </Container>
    </>
  );
};

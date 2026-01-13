// src/shared/hooks/useDeviceOrientation.ts
import { useState, useEffect } from "react";

export const useDeviceOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(() => {
    // Инициализация синхронно
    return window.innerHeight > window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => {
      // Определяем ориентацию по соотношению сторон окна
      const isNowPortrait = window.innerHeight > window.innerWidth;
      setIsPortrait(isNowPortrait);
    };

    // Подписываемся на resize (работает везде)
    window.addEventListener("resize", handleResize);

    // Запускаем сразу для актуального состояния
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isPortrait,
  };
};

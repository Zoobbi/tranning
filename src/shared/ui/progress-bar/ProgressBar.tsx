interface ProgressBarProps {
  current: number; // Текущее значение
  required: number; // Необходимое значение
  color?: string; // Цвет заливки (опционально)
}

export const ProgressBar = ({
  current,
  required,
  color = "#4caf50", // Зеленый цвет по умолчанию
}: ProgressBarProps) => {
  // Рассчитываем процент выполнения
  const percentage = Math.min((current / required) * 100, 100);

  return (
    // TODO all colors from theme
    <div
      style={{
        width: "100%",
        height: "4px",
        backgroundColor: "#e0e0e0", // Фоновая полоска
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Заполненная часть */}
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: color,
          transition: "width 0.3s ease", // Плавная анимация
        }}
      />
      {/* Текст с процентами */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

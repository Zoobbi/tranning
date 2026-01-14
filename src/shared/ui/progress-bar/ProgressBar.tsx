import {
  ProgressBarContainerStyled,
  ProgressBarFillStyled,
  ProgressBarTextStyled,
} from "./styled";

interface ProgressBarProps {
  current: number; // Текущее значение
  required: number; // Необходимое значение
  color?: string; // Цвет заливки (опционально)
}

export const ProgressBar = ({
  current,
  required,
  color = "transparent",
}: ProgressBarProps) => {
  // Рассчитываем процент выполнения
  const percentage = Math.min((current / required) * 100, 100);

  return (
    // TODO all colors from theme
    <ProgressBarContainerStyled>
      <ProgressBarFillStyled percentage={percentage} color={color} />
      <ProgressBarTextStyled />
    </ProgressBarContainerStyled>
  );
};

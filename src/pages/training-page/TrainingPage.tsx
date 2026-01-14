import { useCallback, useState } from "react";

import { Modal } from "@features/modal";
import { TEXTS } from "@shared/lib/texts";
import { Button, Col, Container, PageWrapper, Row } from "@shared/ui";
import { BUTTON_VARIANTS } from "@shared/ui/button";
import { RuPlayer } from "@shared/ui/video";
import { Header } from "@widgets/header";

export const TrainingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.training} />
      <Container>
        <Row>
          <Col>тренировки</Col>
        </Row>
        <Row>
          <Button variant={BUTTON_VARIANTS.cancel} onClick={openModalHandler}>
            Открыть тренировку
          </Button>
          <RuPlayer
            // https://rutube.ru/video/private/f70f52d8e5a6ba7e841d5d346f106d64/?p=WbELnqKdJdD62S1smA-KDA
            //  videoId="ece7706b0c242eaec4c6d020115ee9b4"
            videoId="f70f52d8e5a6ba7e841d5d346f106d64"
            //  accessKey="ehsVUEUoZXxDf8X5PnKADQ"
            accessKey="WbELnqKdJdD62S1smA-KDA"
            /* overlayText="crossover"
                    overlayIcon={Ball}*/
            muted
            noPause
            blockAllClick
          />
        </Row>
      </Container>
      <Modal
        title="Тренировка"
        isOpen={isModalOpen}
        onClose={closeModalHandler}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Тренировка дня
        </h2>
        <p
          style={{
            color: "#666",
            marginBottom: "16px",
          }}
        >
          Сделай 50 бросков у кольца за 10 минут.
        </p>

        {[...Array(30)].map((_, i) => (
          <p
            key={i}
            style={{
              color: "#555",
              marginBottom: "12px",
            }}
          >
            Упражнение #{i + 1}: техника броска с шагом.
          </p>
        ))}

        <Button onClick={closeModalHandler}>Начать</Button>
      </Modal>
    </PageWrapper>
  );
};

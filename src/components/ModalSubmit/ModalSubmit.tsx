import React from 'react';
import {Badge, Button, Modal} from "react-bootstrap";
import BtnConfirm from "./BtnConfirm.tsx";

interface IModalSubmit{
    show: boolean,
    onHide: () => void,
    doAction: () => void,
}

const ModalSubmit: React.FC<IModalSubmit> = ({show,onHide,doAction}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Согласие с правилами
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Для данной функции применяются особые условия и правила пользования,
                    их необходимо подтвердить, нажав на кнопку <Badge>Подтвердить</Badge>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Отмена</Button>
                <BtnConfirm show={show} doAction={doAction} />
            </Modal.Footer>
        </Modal>
    );
};

export default ModalSubmit;

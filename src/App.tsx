import {Button} from "react-bootstrap";
import ModalSubmit from "./components/ModalSubmit/ModalSubmit.tsx";
import {useState} from "react";


function App() {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [action, setAction] = useState<boolean>(false);

    const handleAction = () => {
        setAction(true)
        setShowModal(false)
        alert("Действие выполнено")
    }

    const handleShowModal = () => {
        if (action) {
            alert("Действие выполнено");
            return;
        }
        setShowModal(true)
    }

    return (
        <div className={"App"}>
            <Button size={"lg"} onClick={handleShowModal}>
                Выполнить действие
            </Button>

            <ModalSubmit
                show={showModal}
                onHide={() => setShowModal(false)}
                doAction={handleAction}
            />
        </div>
    )
}

export default App

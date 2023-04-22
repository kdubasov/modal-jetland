import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

interface IBtnConfirm {
    show: boolean,
    doAction: () => void,
}

const BtnConfirm: React.FC<IBtnConfirm> = ({show,doAction}) => {

    const [load, setLoad] = useState<number>(5);

    useEffect(() => {
        if (!show || !load) return;
        const interval = setInterval(() => {
            setLoad(prev => prev - 1)
        }, 1000);

        return () => clearInterval(interval);
    }, [load, show]);

    return (
        <Button onClick={doAction} variant={"success"} disabled={!!load}>
            Подтвердить {!!load && <>({load})</>}
        </Button>
    );
};

export default BtnConfirm;

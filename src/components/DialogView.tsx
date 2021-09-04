import React from 'react';
import {Popup} from 'devextreme-react';
import LogView from './LogView';

interface DialogViewProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DialogView:React.FC<DialogViewProps> = ({open, setOpen}) => {
    return <Popup visible={open} onHiding={() => setOpen(false)}><LogView/></Popup>
}

export default DialogView;
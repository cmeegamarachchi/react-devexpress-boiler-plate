import React, {useState} from 'react';
import {Button} from 'devextreme-react';
import DialogView from './components/DialogView';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
        <Button onClick={() => setOpen(true)} >Open Dialog</Button>
        <DialogView open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;

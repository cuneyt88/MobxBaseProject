'use client'
import { observer } from 'mobx-react-lite';
import { Box, Button, TextField } from '@mui/material';
import { Card, Input, Typography } from '@material-tailwind/react';
import C_Tckn from './components/C_Tckn';
import C_IlSelect from './components/C_IlSelect';
import tcknStore from './store/tcknStore';
import ilStore from './store/ilStore';

const tcknStore1 = new tcknStore();
const tcknStore2 = new tcknStore();
const ilStore1 = new ilStore();


const Home = observer(() => {

  const handleSave = () => {
    console.log('TCKN Store 1:', tcknStore1.getValue);
    console.log('TCKN Store 2:', tcknStore2.getValue);
    console.log('IL Store 1:', ilStore1.getValue);
  };

  return (
    <div>

      <Box sx={{ width: '100%'}}>
        <h1>User Information</h1>
        <form>
          <C_Tckn store={tcknStore1} visible={false}/>
          <C_Tckn store={tcknStore2}/>
          <C_IlSelect store={ilStore1}/>
          <Button className='button' onClick={handleSave} variant="contained">
            Save
          </Button>
        </form>
        
      </Box> 
   </div>
  );
});

export default Home;
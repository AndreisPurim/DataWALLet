import React from 'react';

import Grid from '@material-ui/core/Grid';


import TitleToolbar from './TitleToolbar.js';
import Switches from './Switches.js'


export default function App() {
    return (
        <>

            <TitleToolbar />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{padding:'2rem'}}
                >
                    <Switches title={'Facebook'} />
                    <Switches title={'Amazon'} />
                    <Switches title={'Google'} />
                    <Switches title={'Whatsapp'} />
            </Grid>
        </>
    )
}
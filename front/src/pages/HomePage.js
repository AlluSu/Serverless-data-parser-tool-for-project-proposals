import React from 'react'

//import Container from '@mui/material/Container'
import { Grid } from '@mui/material'


import Messages from '../components/Messages'
import Words from '../components/Words'
import UserForm from '../components/UserForm'

const HomePage = () => {


  return(
    <Grid container direction='row'>
      <Grid item>
        <UserForm />
      </Grid>
      <Grid item>
        <Messages />
      </Grid>
      <Grid item>
        <Words />
      </Grid>
    </Grid>
  )
}

export default HomePage
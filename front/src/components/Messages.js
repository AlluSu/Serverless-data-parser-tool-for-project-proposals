import React from 'react'

import { useSelector } from 'react-redux'
import '@fontsource/roboto/300.css'

import { Grid, Typography } from '@mui/material'
import Message from './Message'


const Messages = () => {
  const messages = useSelector(state => state.data.messages)


  if(!messages) {
    return(
      <Grid container>
        <Grid item>
          <Typography
            variant="body1"
            component="div"
            color="textSecondary"
          >
          Loading messages...
          </Typography>
        </Grid>
      </Grid>
    )
  }

  return(
    <Grid container spacing={2}>
      <Typography variant="h4">Slack messages</Typography>
      {messages.map(message => (
        <Message key={message.client_msg_id} message={message}/>
      ))}
    </Grid>
  )

}

export default Messages
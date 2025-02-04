import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Mui components
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

//Helper
import { splitTextByHighlights, findMessageWords } from '../utils/helper'

//Reducers
import { setAssignedWord } from '../reducers/assignReducer'
import { readyToSend } from '../reducers/readyToSendReducer'
import { setDoNothing } from '../reducers/oneMessageReducer'


const Message = ({ message, words }) => {
  const [expanded, setExpanded] = useState(false)
  const highlightWords = useSelector(state => state.highlightWord)
  const populateClick = useSelector(state => state.oneMessage)

  const dispatch = useDispatch()

  const threads = message.thread_array || []

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  /**
   * If message has threads, returns correct expand-icon according to the state.
   * - Returns null, if message does not have threads
   * @returns ExpandIcon for message
   */
  const showExpandIcon = () => {
    if(threads.length === 0) {
      return null
    }

    if(expanded) {
      return(
        <ExpandLess />
      )
    } else {
      return(
        <ExpandMore />
      )
    }
  }

  /**
   * If message has threads, returns them in a list.
   * @returns Collapse containing threads list
   */
  const showThreads = () => {
    if(threads.length === 0) {
      return null
    }
    return(
      <Collapse in={expanded}>
        <List sx={{ py: 0, my: 0 }}>
          {threads.map(thread => (
            <ListItem
              key={thread.client_msg_id}
              divider
              sx={{
                pl:4,
                py: 0,
                my: 0,
                backgroundColor: '#eeeeee'
              }}
              secondaryAction={
                <IconButton edge='end' onClick={() => handlePopulateClick(thread)}>
                  <AddBoxIcon />
                </IconButton>
              }
            >
              {parseText(thread)}
            </ListItem>
          ))}
        </List>
      </Collapse>
    )
  }

  /**
   * Parses timestamp to easier string to read
   * @param {*} ts
   * @returns Time in stringformat: [hours:minutes(day.month)]
   */
  const parseTime = (ts) => {
    const a = new Date(ts * 1000)
    const hours = ('0' + a.getHours()).slice(-2)
    const minutes = ('0' + a.getMinutes()).slice(-2)
    const date = ('0' + a.getDate()).slice(-2)
    const month = ('0' + (a.getMonth() + 1)).slice(-2)

    return(
      hours + ':' + minutes + '(' + date + '.' + month + ')'
    )
  }


  /**
   * Adds highlighting functionality to the text.
   * - Uses RexExp to split the text.
   * @param {Object} obj - Object containing the text
   * @returns Typography containing higlights
   */
  const parseText = (obj) => {

    if(highlightWords.length === 0) {
      return(
        <Typography component='span'>
          {obj.text} [{obj.real_name}][{parseTime(obj.ts)}]
        </Typography>
      )
    }

    const words = splitTextByHighlights(obj.text, highlightWords)

    return(
      <Typography component='span'>
        {words.map((word, index) => (highlightWords.map(highlight => highlight.toLowerCase()).includes(word.toLowerCase())) ? <Typography key={index} component='span'><Box sx={{ backgroundColor: '#ffeb3b' }}component='span'>{word}</Box></Typography> : word)} [{obj.real_name}][{parseTime(obj.ts)}]
      </Typography>
    )
  }

  const handlePopulateClick = (msg) => {
    dispatch(setDoNothing())
    const wordList = findMessageWords(msg, words)
    for(const word of wordList) {
      dispatch(setAssignedWord(word.word, word.category))
    }
    dispatch(readyToSend())
  }

  if (populateClick === 'execute'){
    handlePopulateClick(message)
  }

  return(
    <Box>
      <ListItemButton onClick={handleExpandClick} divider sx={{ py:0, my:0 }}>
        <ListItemText primary={parseText(message)} sx={{ py:0, my:0 }}/>
        <IconButton onClick={() => handlePopulateClick(message)}>
          <AddBoxIcon />
        </IconButton>
        {showExpandIcon()}
      </ListItemButton>
      {showThreads()}
    </Box>
  )
}

export default Message
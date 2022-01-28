const getThreads = require('../../utils/filterSlackResponse').GetThreads

test('Threads are returned correctly from all messages', () => {
  const messages = [
    {
      client_msg_id: '0b990549-d16b-4ede-a1d5-19fcfa9255ae',
      type: 'message',
      text: 'Diba daba',
      user: 'U02UAB8HUFM',
      ts: '1642509861.000600',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Jan Rundt',
      thread_array: []
    },
    {
      client_msg_id: '727f403c-f840-4735-abc4-654471c549ed',
      type: 'message',
      text: 'Message massage',
      user: 'U02UAB8HUFM',
      ts: '1642509866.000800',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Jan Rundt',
      thread_array: []
    },
    {
      client_msg_id: 'f8a24f03-ca58-4f4d-b1bf-ba8c68ff8063',
      type: 'message',
      text: 'terveppä terve',
      user: 'U02UHPPRMJ6',
      ts: '1642527711.000400',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Aleksi Suuronen',
      thread_array: []
    },
    {
      client_msg_id: '5f4c8f69-e34b-42d0-b16e-f16d4c046497',
      type: 'message',
      text: 'kissa on suomen suosituin kotieläin',
      user: 'U02UHPPRMJ6',
      ts: '1642527720.000700',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      thread_ts: '1642527720.000700',
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: '1643111375.001300',
      reply_users: [ 'U02UAB8HUFM' ],
      is_locked: false,
      subscribed: false,
      reactions: [ [Object] ],
      real_name: 'Aleksi Suuronen',
      thread_array: [ [Object] ]
    },
    {
      client_msg_id: 'e680e4bf-59b2-4f1c-b0fc-43a183b350d7',
      type: 'message',
      text: ':wave: Hi everyone!',
      user: 'U02UF7S2DN1',
      ts: '1642531226.000400',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Juha T',
      thread_array: []
    },
    {
      client_msg_id: '8631eff4-0b4c-417d-9d7e-a0ecf7ea00a9',
      type: 'message',
      text: 'Hello!',
      user: 'U02V2KF4MS8',
      ts: '1643100025.000500',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Eevi Bengs',
      thread_array: []
    },
    {
      client_msg_id: '95c58515-d392-4e4e-b310-45bb64670950',
      type: 'message',
      text: 'Hei kaikki, kiva nähdä!',
      user: 'U02V2KF4MS8',
      ts: '1643101417.000800',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      thread_ts: '1643101417.000800',
      reply_count: 2,
      reply_users_count: 2,
      latest_reply: '1643111352.001100',
      reply_users: [ 'U02V2KF4MS8', 'U02UAB8HUFM' ],
      is_locked: false,
      subscribed: false,
      real_name: 'Eevi Bengs',
      thread_array: [ [Object], [Object] ]
    },
    {
      client_msg_id: '6b5f5a7d-6c01-4baa-b764-a33d0d934c4d',
      type: 'message',
      text: 'Kissa On SuoSItuin, totta!',
      user: 'U02UF7S2DN1',
      ts: '1643359472.109509',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      thread_ts: '1643359472.109509',
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: '1643359571.915789',
      reply_users: [ 'U02UAB8HUFM' ],
      is_locked: false,
      subscribed: false,
      real_name: 'Juha T',
      thread_array: [ [Object] ]
    },
    {
      client_msg_id: 'e72bf69f-2ee5-4feb-834f-1d08bdd44364',
      type: 'message',
      text: 'suosituiN',
      user: 'U02UF7S2DN1',
      ts: '1643362475.606779',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Juha T',
      thread_array: []
    }
  ]
  const threads = getThreads(messages)
  expect(threads.length).toBe(3)      
})

test('Thread_array is not empty or null for threads', () => {
  const messages = [
    {
      client_msg_id: '0b990549-d16b-4ede-a1d5-19fcfa9255ae',
      type: 'message',
      text: 'Diba daba',
      user: 'U02UAB8HUFM',
      ts: '1642509861.000600',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Jan Rundt',
      thread_array: []
    },
    {
      client_msg_id: '727f403c-f840-4735-abc4-654471c549ed',
      type: 'message',
      text: 'Message massage',
      user: 'U02UAB8HUFM',
      ts: '1642509866.000800',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Jan Rundt',
      thread_array: []
    },
    {
      client_msg_id: 'f8a24f03-ca58-4f4d-b1bf-ba8c68ff8063',
      type: 'message',
      text: 'terveppä terve',
      user: 'U02UHPPRMJ6',
      ts: '1642527711.000400',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Aleksi Suuronen',
      thread_array: []
    },
    {
      client_msg_id: '5f4c8f69-e34b-42d0-b16e-f16d4c046497',
      type: 'message',
      text: 'kissa on suomen suosituin kotieläin',
      user: 'U02UHPPRMJ6',
      ts: '1642527720.000700',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      thread_ts: '1642527720.000700',
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: '1643111375.001300',
      reply_users: [ 'U02UAB8HUFM' ],
      is_locked: false,
      subscribed: false,
      reactions: [ [Object] ],
      real_name: 'Aleksi Suuronen',
      thread_array: [ [Object] ]
    },
    {
      client_msg_id: 'e680e4bf-59b2-4f1c-b0fc-43a183b350d7',
      type: 'message',
      text: ':wave: Hi everyone!',
      user: 'U02UF7S2DN1',
      ts: '1642531226.000400',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Juha T',
      thread_array: []
    },
    {
      client_msg_id: '8631eff4-0b4c-417d-9d7e-a0ecf7ea00a9',
      type: 'message',
      text: 'Hello!',
      user: 'U02V2KF4MS8',
      ts: '1643100025.000500',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Eevi Bengs',
      thread_array: []
    },
    {
      client_msg_id: '95c58515-d392-4e4e-b310-45bb64670950',
      type: 'message',
      text: 'Hei kaikki, kiva nähdä!',
      user: 'U02V2KF4MS8',
      ts: '1643101417.000800',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      thread_ts: '1643101417.000800',
      reply_count: 2,
      reply_users_count: 2,
      latest_reply: '1643111352.001100',
      reply_users: [ 'U02V2KF4MS8', 'U02UAB8HUFM' ],
      is_locked: false,
      subscribed: false,
      real_name: 'Eevi Bengs',
      thread_array: [ [Object], [Object] ]
    },
    {
      client_msg_id: '6b5f5a7d-6c01-4baa-b764-a33d0d934c4d',
      type: 'message',
      text: 'Kissa On SuoSItuin, totta!',
      user: 'U02UF7S2DN1',
      ts: '1643359472.109509',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      thread_ts: '1643359472.109509',
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: '1643359571.915789',
      reply_users: [ 'U02UAB8HUFM' ],
      is_locked: false,
      subscribed: false,
      real_name: 'Juha T',
      thread_array: [ [Object] ]
    },
    {
      client_msg_id: 'e72bf69f-2ee5-4feb-834f-1d08bdd44364',
      type: 'message',
      text: 'suosituiN',
      user: 'U02UF7S2DN1',
      ts: '1643362475.606779',
      team: 'T02UNV7V4GZ',
      blocks: [ [Object] ],
      real_name: 'Juha T',
      thread_array: []
    }
  ]
  const threads = getThreads(messages)
  expect(threads.length).toBe(3)
  expect(threads[0].thread_array.length).not.toBeNull()
  expect(threads[1].thread_array.length).not.toBeNull()
  expect(threads[2].thread_array.length).not.toBeNull()
})
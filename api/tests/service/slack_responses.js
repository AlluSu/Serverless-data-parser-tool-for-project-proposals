const users_response = {
  ok: true,
  members: [
    {
      id: 'USLACKBOT',
      team_id: 'T02UNV7V4GZ',
      name: 'slackbot',
      deleted: false,
      color: '757575',
      real_name: 'Slackbot',
      tz: 'America/Los_Angeles',
      tz_label: 'Pacific Standard Time',
      tz_offset: -28800,
      profile: [Object],
      is_admin: false,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_app_user: false,
      updated: 0,
      is_email_confirmed: false,
      who_can_share_contact_card: 'EVERYONE',
    },
    {
      id: 'U02U7N423SR',
      team_id: 'T02UNV7V4GZ',
      name: 'testuserone',
      deleted: false,
      color: 'e96699',
      real_name: 'RealNameOne',
      tz: 'Europe/Helsinki',
      tz_label: 'Eastern European Time',
      tz_offset: 7200,
      profile: [Object],
      is_admin: false,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_app_user: false,
      updated: 1642595849,
      is_email_confirmed: true,
      who_can_share_contact_card: 'EVERYONE',
    },
    {
      id: 'U02UAB8HUFM',
      team_id: 'T02UNV7V4WA',
      name: 'testusertwo',
      deleted: false,
      color: '9f69e7',
      real_name: 'RealNameTwo',
      tz: 'Asia/Jerusalem',
      tz_label: 'Israel Standard Time',
      tz_offset: 7200,
      profile: [Object],
      is_admin: true,
      is_owner: true,
      is_primary_owner: true,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_app_user: false,
      updated: 1646381880,
      is_email_confirmed: true,
      who_can_share_contact_card: 'EVERYONE',
    },
    {
      id: 'U030KNYEC00',
      team_id: 'T02UNV7V4GZ',
      name: 'exporttest2',
      deleted: false,
      color: '684b6c',
      real_name: 'export-test2',
      tz: 'America/Los_Angeles',
      tz_label: 'Pacific Standard Time',
      tz_offset: -28800,
      profile: [Object],
      is_admin: false,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: true,
      is_app_user: false,
      updated: 1646836377,
      is_email_confirmed: false,
      who_can_share_contact_card: 'EVERYONE',
    },
  ],
  cache_ts: 1646941046,
  response_metadata: {
    next_cursor: '',
    scopes: [
      'channels:history',
      'users:read',
      'channels:read',
      'commands',
      'chat:write',
      'groups:read',
      'im:read',
      'mpim:read',
      'users.profile:read',
    ],
    acceptedScopes: ['users:read'],
  },
}
const channels_response = {
  ok: true,
  channels: [
    {
      id: 'C02UCV0GQJZ',
      name: 'test_channel',
      is_channel: true,
      is_group: false,
      is_im: false,
      is_mpim: false,
      is_private: false,
      created: 1642510457,
      is_archived: false,
      is_general: false,
      unlinked: 0,
      name_normalized: 'channel-two',
      is_shared: false,
      is_org_shared: false,
      is_pending_ext_shared: false,
      pending_shared: [],
      parent_conversation: null,
      creator: 'U02UAB8HUFM',
      is_ext_shared: false,
      shared_team_ids: [Array],
      pending_connected_team_ids: [],
      is_member: true,
      topic: [Object],
      purpose: [Object],
      previous_names: [],
      num_members: 8,
    },
    {
      id: 'C02UNV80V7B',
      name: 'test_general',
      is_channel: true,
      is_group: false,
      is_im: false,
      is_mpim: false,
      is_private: false,
      created: 1642415928,
      is_archived: false,
      is_general: true,
      unlinked: 0,
      name_normalized: 'general',
      is_shared: false,
      is_org_shared: false,
      is_pending_ext_shared: false,
      pending_shared: [],
      parent_conversation: null,
      creator: 'U02UAB8HUFM',
      is_ext_shared: false,
      shared_team_ids: [Array],
      pending_connected_team_ids: [],
      is_member: true,
      topic: [Object],
      purpose: [Object],
      previous_names: [],
      num_members: 9,
    },
  ],
  response_metadata: {
    next_cursor: '',
    scopes: [
      'channels:history',
      'users:read',
      'channels:read',
      'commands',
      'chat:write',
      'groups:read',
      'im:read',
      'mpim:read',
    ],
    acceptedScopes: ['channels:read', 'groups:read', 'mpim:read', 'im:read', 'read'],
  },
}

const history_response = {
  ok: true,
  messages: [
    {
      client_msg_id: '6e00d76e-0565-4356-b8f7-8fd80a8bd608',
      type: 'message',
      text: 'Eräs Oy projekti alkaa 01.04. budjetti 10.000€',
      user: 'U02UAB8HUFM',
      ts: '1645463475.350089',
      team: 'T02UNV7V4GZ',
      blocks: [
        {
          type: 'rich_text',
          block_id: 'jV7W',
          elements: [
            {
              type: 'rich_text_section',
              elements: [
                {
                  type: 'text',
                  text: 'Eräs Oy projekti alkaa 01.04. budjetti 10.000€',
                },
              ],
            },
          ],
        },
      ],
      thread_ts: '1645463475.350089',
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: '1645463537.640819',
      reply_users: ['U02U7N423SR'],
      is_locked: false,
      subscribed: false,
    },
    {
      client_msg_id: '57d0baa2-49ca-4dad-8566-96c608fd8ff3',
      type: 'message',
      text: '11.03.2022 klo 12.00 tapaaminen. Node.js ja express serverless ratkaisuna? Toimiiko aws / azure / google cloud.',
      user: 'U02U7N423SR',
      ts: '1645451953.737269',
      team: 'T02UNV7V4GZ',
      blocks: [Array],
    },
    {
      type: 'message',
      subtype: 'channel_join',
      ts: '1645451626.131039',
      user: 'U02UFPCEPLJ',
      text: '<@U02UFPCEPLJ> has joined the channel',
      inviter: 'U02UF7S2DN1',
    },
    {
      type: 'message',
      subtype: 'channel_join',
      ts: '1645451526.403159',
      user: 'U031XN15RRU',
      text: '<@U031XN15RRU> has joined the channel',
      inviter: 'U02UF7S2DN1',
    },
  ],
  has_more: false,
  pin_count: 0,
  channel_actions_ts: null,
  channel_actions_count: 0,
  response_metadata: {
    scopes: [
      'channels:history',
      'users:read',
      'channels:read',
      'commands',
      'chat:write',
      'groups:read',
      'im:read',
      'mpim:read',
      'users.profile:read',
    ],
    acceptedScopes: ['channels:history', 'groups:history', 'mpim:history', 'im:history', 'read'],
  },
}

const thread_response = {
  ok: true,
  messages: [
    {
      client_msg_id: '6e00d76e-0565-4356-b8f7-8fd80a8bd608',
      type: 'message',
      text: 'Eräs Oy projekti alkaa 01.04. budjetti 10.000€',
      user: 'U02UAB8HUFM',
      ts: '1645463475.350089',
      team: 'T02UNV7V4GZ',
      blocks: [Array],
      thread_ts: '1645463475.350089',
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: '1645463537.640819',
      reply_users: [Array],
      is_locked: false,
      subscribed: false,
    },
    {
      client_msg_id: '3480404c-8998-4af4-9023-2ca5cf339f8f',
      type: 'message',
      text: 'Tämä on siis Django REST api projekti.',
      user: 'U02U7N423SR',
      ts: '1645463537.640819',
      team: 'T02UNV7V4GZ',
      blocks: [Array],
      thread_ts: '1645463475.350089',
      parent_user_id: 'U02UAB8HUFM',
    },
  ],
  has_more: false,
  response_metadata: {
    scopes: [
      'channels:history',
      'users:read',
      'channels:read',
      'commands',
      'chat:write',
      'groups:read',
      'im:read',
      'mpim:read',
      'users.profile:read',
    ],
    acceptedScopes: ['channels:history', 'groups:history', 'mpim:history', 'im:history', 'read'],
  },
}

module.exports = { users_response, channels_response, history_response, thread_response }

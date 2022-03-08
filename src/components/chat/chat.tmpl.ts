export default `
  <div class="chats__list-chat chat" data-chat-id="{{id}}">
    <div class="chat__avatar">
    {{#if avatar}}
      <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" crossorigin="use-credentials">
    {{/if}}
    </div>
    <div class="chat__content">
      <div class="chat__title">{{title}}</div>
      {{#if last_message.user}}
      <div class="chat__message">{{last_message.user.login}}: {{last_message.content}}</div>
      {{else}}
      <div class="chat__message">{{last_message.content}}</div>
      {{/if}}
    </div>
    <time class="chat__time" datetime="{{last_message.time}}">{{datetime}}</time>
    {{#if unread_count}}
    <span class="chat__unread">{{unread_count}}</span>
    {{/if}}
  </div>
`;

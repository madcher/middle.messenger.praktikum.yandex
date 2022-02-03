export default `
  <div class="chats__list-chat chat">
    <div class="chat__user-photo"></div>
    <div class="chat__content">
      <div class="chat__user-name">{{user}}</div>
      <div class="chat__message">{{message}}</div>
    </div>
    <time class="chat__time" datetime="{{datetime}}">{{time}}</time>
  </div>
`;

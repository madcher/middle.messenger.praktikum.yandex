export default `
  <div class="chats__list-chat chat">
    <div class="chat__user-photo"></div>
    <div class="chat__content">
      <div class="chat__user-name">{{title}}</div>
      <div class="chat__message">{{message}}</div>
    </div>
    <div>1</div>
    <time class="chat__time" datetime="{{datetime}}">{{time}}</time>
  </div>
`;

export default `
  <div class="chats__container">
    <div class="chats__sidebar chats">
      <div class="chats__links">
        <div class="chats__add-chat">
        {{{addChatButton}}}
        </div>
        <div class="chats__profile">
        {{{toProfileButton}}}
        </div>
      </div>
      <div class="chats__add-field">
        <input class="chats__add-chat-input" type="text" placeholder="Введите название чата">
        {{{createNameChatButton}}}
      </div>
      <input class="chats__search" type="text" placeholder="Поиск">
      {{{chatList}}}
    </div>
    <div class="chats__content">
      {{{chatHeader}}}
      {{{chatMessagesField}}}
      {{{chatMessageInput}}}
    </div>
  </div>
`;

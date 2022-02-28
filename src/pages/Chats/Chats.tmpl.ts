export default `
  <div class="chats__container">
    <div class="chats__sidebar chats">
      <div class="chats__profile">
        <a class="chats__profile-link" href="/profile">
          <span>Профиль</span>
          <span class="icon-arrow-left"></span>
        </a>
      </div>
      <input class="chats__search" type="text" placeholder="Поиск">
      <div class="chats__list">
        {{#each chat}}
            {{> chat}}
        {{/each}}
      </div>
    </div>
    <div class="chats__content">
      <div class="chats__content-user">Иван</div>
      <div class="chats__messages-filed">
          <p class="chats__messages-placeholder">Выберите чат, чтобы отправить сообщение</p>
      </div>
      {{{messageField}}}
    </div>
  </div>
`;

export default `
  <div class="chats__content-header chat-header" data-selected-chat="">
    <div class="chat-header__title"></div>
    <span class="icon-more"></span>
    <div class="chat-header__options">
      <ul class="chat-header__options-list">
        <li class="chat-header__options-list-item" data-add-user>Добавить пользователя</li>
        <li class="chat-header__options-list-item" data-delete-chat>Удалить чат</li>
      </ul>
      <div class="chat-header__add-user">
        <input class="add-user__input" type="text" placeholder="Введите логин">
        {{{addUserButton}}}
      </div>
    </div>
  </div>
`;



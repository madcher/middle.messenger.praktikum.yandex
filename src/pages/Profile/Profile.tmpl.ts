export default `
  <div class="profile__container">
      <div class="profile__container-back">
          <a href="/messenger" id="backToChats">
              <span class="icon-arrow-left"></span>
          </a>
      </div>
      <form action="" method="post" class="profile__container-main profile" name="{{name}}">
          {{{avatar}}}
          <h1 class="profile__name">{{username}}</h1>
          <div class="profile__info">
              {{{email}}}
              {{{login}}}
              {{{first_name}}}
              {{{second_name}}}
              {{{display_name}}}
              {{{phone}}}
              {{{saveData}}}
          </div>
          <div class="profile__buttons">
              {{{changeData}}}
              {{{changePassword}}}
              {{{exit}}}
          </div>
      </form>
  </div>
`;

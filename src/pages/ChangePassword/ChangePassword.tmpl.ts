export default `
  <div class="profile__container">
      <div class="profile__container-back">
          <a href="/settings" id="backToProfile">
              <span class="icon-arrow-left"></span>
          </a>
      </div>
      <form action="" method="post" class="profile__container-main profile" name="{{name}}">
          <h1 class="profile__name">{{username}}</h1>
          <div class="profile__info-password">
              {{{oldPassword}}}
              {{{newPassword}}}
              {{{savePassword}}}
          </div>
      </form>
  </div>
`;

export default `
  <form action="" method="post" class="login form__container" name="{{name}}">
      <div class="form__field">
          <h1 class="form__title">{{title}}</h1>
          {{{login}}}
          {{{password}}}
      </div>
      <div class="form__buttons">
          {{{mainButton}}}
          {{{secondaryButton}}}
      </div>
  </form>
`;

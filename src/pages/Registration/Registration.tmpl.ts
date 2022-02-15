export default `
  <form action="" method="post" class="registration form__container" name="{{name}}">
      <div class="form__field">
          <h1 class="form__title">{{title}}</h1>
          {{{email}}}
          {{{login}}}
          {{{first_name}}}
          {{{second_name}}}
          {{{phone}}}
          {{{password}}}
          {{{password_confirm}}}
      </div>
      <div class="form__buttons">
          {{{mainButton}}}
          {{{secondaryButton}}}
      </div>
  </form>
`;

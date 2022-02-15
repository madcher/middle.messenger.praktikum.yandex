export default `
  <div class="input__wrapper">
      <label class="input__label" for="{{id}}">{{label}}</label>
      <input class="input__field" type="{{type}}" name="{{name}}" id="{{id}}" value="{{value}}">
      <span class="input__error-message" data-name="{{name}}"></span>
  </div>
`;

export default `
  {{#if className}}
  <input class="{{className}}" type="submit" value="{{title}}">
  {{else}}
  <input class="main__btn" type="submit" value="{{title}}">
  {{/if}}
`;

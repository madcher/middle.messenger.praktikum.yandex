export default `
  <form class="profile__avatar">
    {{#if avatar}}
      <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" crossorigin="use-credentials">
    {{/if}}
      <input type="file" accept="image/*" class="profile__avatar-change" name="{{nameAvatar}}">
    <!-- <div class="profile__avatar-label">Поменять аватар</div> -->
  </form>
`;


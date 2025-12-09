export default class UserInfo {
  constructor({ nameSelector, titleSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userTitle = document.querySelector(titleSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const currentUserInfo = {
      name: this._userName.textContent,
      description: this._userTitle.textContent,
      avatar: this._userAvatar.src,
    };
    return currentUserInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userTitle.textContent = data.description;
    this._userAvatar.src = data.avatar;
    this._userAvatar.alt = `Profile image of ${data.name}`;
  }
}

export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userTitle = document.querySelector(titleSelector);
  }

  getUserInfo() {
    const currentUserInfo = {
      name: this._userName.textContent,
      description: this._userTitle.textContent,
    };
    return currentUserInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userTitle.textContent = data.description;
  }
}

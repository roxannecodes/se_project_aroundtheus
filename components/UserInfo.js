export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userTitle = document.querySelector(titleSelector);
  }

  getUserInfo() {
    const currentUserInfo = {
      name: this._userName.textContent,
      title: this._userTitle.textContent,
    };
    return currentUserInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.firstInput;
    this._userTitle.textContent = data.secondInput;
  }
}

export class Main {
  passwordChecker(password) {
    if (password.length < 8) return false;

    return true;
  }

  oneSpecialCharacterAtLeastChecker(password) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(password);
  }
}

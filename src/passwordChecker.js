export class Main {
    passwordChecker(password){
        if (password.length === 1 || password.length === 4) return false

        return true;
    }
}

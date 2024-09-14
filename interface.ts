
const MIN_PASSWORD_LENGTH = 4;

enum Menu {
    Main,
    CreateAccount,
    LogIn
}

let menu = Menu.Main;
blockMenu.setColors(6, 0);
showMainMenu();

function showMainMenu(index: number=0) {
    blockMenu.showMenu(["Log In", "Create Account"], MenuStyle.List, MenuLocation.BottomHalf);
    menu = Menu.Main;
    blockMenu.setSelectedIndex(index);
}

function showCreateAccountMenu(index: number=0) {
    let options = [
        username || "Username",
        password || "Password",
        confirm || "Confirm Password",
        "Create Account",
        "Back"
    ]
    blockMenu.showMenu(options, MenuStyle.List, MenuLocation.BottomHalf);
    menu = Menu.CreateAccount;
    blockMenu.setSelectedIndex(index);
}

function showLoginMenu(index: number=0) {
    let options = [
        username || "Username",
        password || "Password",
        "Log In",
        "Back"
    ]
    blockMenu.showMenu(options, MenuStyle.List, MenuLocation.BottomHalf);
    menu = Menu.LogIn;
    blockMenu.setSelectedIndex(index);
}

let username: string;
let password: string;
let confirm: string;

blockMenu.onMenuOptionSelected((option: string, index: number) => {
    blockMenu.closeMenu();
    if (menu === Menu.Main) {
        if (index === 0) showLoginMenu();
        else if (index === 1) showCreateAccountMenu();
    } else if (menu === Menu.LogIn) {
        if (index === 0) {
            username = game.askForString("Enter Username", 24);
            showLoginMenu(index);
        } else if (index === 1) {
            password = game.askForString("Enter Password", 24);
            showLoginMenu(index);
        } else if (index === 2) {
            // authenticate
            showLoginMenu(index);
        } else if (index === 3) {
            username = "";
            password = "";
            showMainMenu();
        }
    } else if (menu === Menu.CreateAccount) {
        if (index === 0) {
            username = game.askForString("Enter Username", 24);
            showCreateAccountMenu(index);
        } else if (index === 1) {
            password = game.askForString("Enter Password", 24);
            showCreateAccountMenu(index);
        } else if (index === 2) {
            confirm = game.askForString("Confirm Password", 24);
            showCreateAccountMenu(index);
        } else if (index === 3) {
            // create account
            showCreateAccountMenu(index);
        } else if (index === 4) {
            username = "";
            password = "";
            confirm = "";
            showMainMenu();
        }
    }
})

function handleCreateAccount() {
    if (!username) game.splash("Username is required");
    else if (!password) game.splash("Password is required");
    else if (password.length < MIN_PASSWORD_LENGTH) game.splash("Password must be 4 or more characters");
    else if (!confirm) game.splash("Please confirm your password");
    else if (password !== confirm) game.splash("Password does not match");
}
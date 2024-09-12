
enum Menu {
    Main,
    CreateAccount,
    LogIn
}

let menu = Menu.Main;
blockMenu.setColors(6, 0);

function showMainMenu() {
    blockMenu.showMenu(["Sign Up", "Log In"], MenuStyle.List, MenuLocation.BottomHalf);
    menu = Menu.Main;
}

function showCreateAccountMenu(args: {username?: string, password?: string, confirm?: string}) {
    let options = [
        args.username || "Username",
        args.password || "Password",
        args.confirm || "Confirm Password",
        "Create Account",
        "Back"
    ]
    blockMenu.showMenu(options, MenuStyle.List, MenuLocation.BottomHalf);
    menu = Menu.CreateAccount;
}

function showLoginMenu(args: {username?: string, password?: string}) {
    let options = [
        args.username || "Username",
        args.password || "Password",
        "Log In",
        "Back"
    ]
}

blockMenu.onMenuOptionSelected((option: string, index: number) => {

})
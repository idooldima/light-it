import { Redirect } from "react-router-dom";
import routes from "../routes";
import { currentUserSelector } from "../store/auth/selectors";
import store from "../store/store";

export function requireAuth(Component: any) {
    const LoggedIn = isUserLoggedIn();
    if (LoggedIn) {
        return Component;
    }
    const Redirection = () => <Redirect to={routes.signIn.path} />;
    return Redirection;
};

export function isUserLoggedIn() {
    const state = store.getState()
    const user = currentUserSelector(state)
    return user && (!!user.token || user.type === 'guest')
}
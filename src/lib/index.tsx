import { Redirect } from "react-router-dom";
import routes from "../routes";
import { currentUserSelector } from "../store/auth/selectors";
import store from "../store/store";

export const requireAuth = (Component: any) => (props: any) => {
    const loggedIn = isUserLoggedIn();
    if (loggedIn) {
        return <Component {...props} />;
    }
    return <Redirect to={routes.signIn.path} />;
};

export const isUserSignedUp = (
): boolean => {
    const state = store.getState()
    const user = currentUserSelector(state)
    return !!user && !!user.token;
};

export function isUserLoggedIn() {
    const state = store.getState()
    const user = currentUserSelector(state)
    return user && (!!user.token || user.type === 'guest')
}

export function getSessionStorageData(key: string): any {
    const sessionStorageData = sessionStorage.getItem(key);
    if (sessionStorageData) {
        const data = JSON.parse(sessionStorageData);
        return data;
    }
    return null;
}

export function setSessionStorage(key: string, data: any) {
    if (sessionStorage) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
}
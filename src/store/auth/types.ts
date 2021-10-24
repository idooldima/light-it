import { History } from 'history';

export type Credentials = {
    username: string;
    password: string;
};

export type SignInPayload = Credentials & {
    history: History

}

export type UserType = 'user' | 'guest'

export type User = {
    username: string;
    token?: string;
    type: UserType;
};

export type AuthStateType = {
    currentUser: User | null;
    isLoading: boolean;
    error: null;
};


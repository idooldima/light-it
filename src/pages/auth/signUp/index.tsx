import { Button, Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { signUpStart, signInAsGuest, } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import * as yup from 'yup'
import routes from "../../../routes";
import { authErrorSelector } from "../../../store/auth/selectors";
import { Alert, AlertTitle } from "@mui/material";

export default function SignUp() {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        username: yup.string().required().min(8),
        password: yup.string().required().min(8),
        passwordConfirmation: yup.string()
            .test('passwords-match', 'Passwords must match', function (value) {
                return state.password === value

            })
    })
    const error = useSelector(authErrorSelector)
    const [state, setState] = useState({ username: '', password: '', passwordConfirmation: '' })
    const [validateState, setValidateState] = useState({ errUsername: '', errPassword: '', errPasswordConfirmation: '' })
    const signUp = () => {
        dispatch(
            signUpStart({ username: state.username, password: state.password })
        );
    };

    const signInGuest = () => (
        dispatch(
            signInAsGuest()
        )
    )


    return (
        <Box
            component="form"
            sx={{
                boxSizing: 'border-box',
                maxWidth: '100%',
                minHeight: '95vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                {!!error && !!error.message && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>{error.message}</strong>
                </Alert>}
                <TextField
                    onChange={({ target: { value } }) => {
                        setState({ ...state, username: value });
                        schema.validateAt("username", { username: value }).then(() => setValidateState({ ...validateState, errUsername: '' })).catch(function (err) {
                            setValidateState({ ...validateState, errUsername: err.errors[0] })
                        });
                    }}
                    helperText={validateState.errUsername}
                    error={!!validateState.errUsername}
                    fullWidth
                    placeholder='username'
                    id="outlined-error"
                    label="username"
                    margin="dense"
                />
                <TextField
                    onChange={({ target: { value } }) => {
                        setState({ ...state, password: value });
                        schema.validateAt("password", { password: value }).then(() => setValidateState({ ...validateState, errPassword: '' })).catch(function (err) {
                            setValidateState({ ...validateState, errPassword: err.errors[0] })
                        });
                    }}
                    helperText={validateState.errPassword}
                    error={!!validateState.errPassword}
                    fullWidth
                    placeholder='password'
                    id="outlined-error-helper-text"
                    label="password"
                    margin="dense"
                />
                <TextField
                    onChange={({ target: { value } }) => {
                        setState({ ...state, passwordConfirmation: value });
                        schema.validateAt("passwordConfirmation", { passwordConfirmation: value }).then(() => setValidateState({ ...validateState, errPasswordConfirmation: '' })).catch(function (err) {
                            setValidateState({ ...validateState, errPasswordConfirmation: err.errors[0] })
                            console.log(err.errors)
                        });
                    }}
                    helperText={validateState.errPasswordConfirmation}
                    error={!!validateState.errPasswordConfirmation}
                    fullWidth
                    placeholder='confirm your password'
                    id="outlined-error-helper-text"
                    label="confirm your password"
                    margin="dense"
                />
                <Button fullWidth
                    disabled={!state.username || !state.password || !state.passwordConfirmation || !!validateState.errUsername || !!validateState.errPassword || !!validateState.errPasswordConfirmation}
                    variant="outlined"
                    onClick={signUp}>Register
                </Button>
                <Button fullWidth
                    variant="outlined"
                    onClick={signInGuest}>sign in as guest
                </Button>
                <Link to={routes.signIn.path}>
                    Login
                </Link>
            </div>
        </Box>
    )
}
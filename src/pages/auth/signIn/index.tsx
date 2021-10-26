import { Button, Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { signInAsGuest, signInStart } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux"
import * as yup from 'yup'
import { Link } from "react-router-dom";
import routes from "../../../routes";
import { Alert, AlertTitle } from "@mui/material";
import { authErrorSelector } from "../../../store/auth/selectors";



export default function SignIn() {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        username: yup.string().required().min(8),
        password: yup.string().required().min(8),

    })
    const error = useSelector(authErrorSelector)
    const [state, setState] = useState({ username: '', password: '' })
    const [validateState, setValidateState] = useState({ errUsername: '', errPassword: '' })
    const logIn = () => {
        dispatch(
            signInStart({ username: state.username, password: state.password })
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
                    margin="dense"
                    fullWidth
                    placeholder='username'
                    id="outlined-error"
                    label="username"

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
                    type='password'
                    margin="dense"
                    fullWidth
                    placeholder='password'
                    id="outlined-error-helper-text"
                    label="password"
                />
                <Button fullWidth
                    disabled={!state.username || !state.password || !!validateState.errUsername || !!validateState.errPassword}
                    variant="outlined"
                    onClick={logIn}>submit
                </Button>
                <Button fullWidth
                    variant="outlined"
                    onClick={signInGuest}>sign in like guest
                </Button>

                <Link to={routes.signUp.path}>
                    If you don`t have accaunt, please register
                </Link>
            </div>
        </Box>

    )
}
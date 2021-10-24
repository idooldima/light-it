import * as React from "react";
import { Input, Button, Grid, ListItem, Link, Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { signInAsGuest, signInStart } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux"
import * as yup from 'yup'
import { useHistory } from "react-router-dom";
import { usePrevious } from "../../../hooks";
import routes from "../../../routes";
import { currentUserSelector } from "../../../store/auth/selectors";


export default function SignIn() {
    const dispatch = useDispatch();
    const history = useHistory()
    const schema = yup.object().shape({
        username: yup.string().required().min(8),
        password: yup.string().required().min(8),

    })
    // const user = useSelector(currentUserSelector)
    // const prevUser = usePrevious(user);

    const [state, setState] = React.useState({ username: '', password: '' })
    const [validateState, setValidateState] = React.useState({ errUsername: '', errPassword: '' })

    const logIn = () => {
        dispatch(
            signInStart({ username: 'dima', password: 'dima123', history })
        );
    };

    const signInGuest = () => (
        dispatch(
            signInAsGuest()
        )
    )

    // React.useEffect(() => {
    //     if (!prevUser && user) {
    //         history.push(routes.products.path)
    //     }
    // }, [user, prevUser]);


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
                <TextField
                    margin="dense"
                    fullWidth
                    placeholder='username'
                    id="outlined-error"
                    label="username"
                />
                <TextField
                    margin="dense"
                    fullWidth
                    placeholder='password'
                    id="outlined-error-helper-text"
                    label="password"
                />
                <Button fullWidth
                    variant="outlined"
                    onClick={logIn}>submit
                </Button>
                <Button fullWidth
                    variant="outlined"
                    onClick={signInGuest}>sign in like guest
                </Button>
            </div>
        </Box>

    )
}
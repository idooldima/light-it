import { Input, Button, Grid, ListItem, Link, Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { signUpStart, signInAsGuest, logout } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";

export default function SignUp() {
    const dispatch = useDispatch();
    const history = useHistory()

    const signUp = () => {
        dispatch(
            signUpStart({ username: 'dima', password: 'dima123', history })
        );
    };

    const signInGuest = () => (
        dispatch(
            signInAsGuest()
        )
    )

    const logoutacc = () => (
        dispatch(
            logout()
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
                <TextField
                    fullWidth
                    placeholder='username'
                    id="outlined-error"
                    label="username"
                    margin="dense"
                />
                <TextField
                    fullWidth
                    placeholder='password'
                    id="outlined-error-helper-text"
                    label="password"
                    margin="dense"
                />
                <TextField
                    fullWidth
                    placeholder='confirm your password'
                    id="outlined-error-helper-text"
                    label="confirm your password"
                    margin="dense"
                />
                <Button fullWidth
                    variant="outlined"
                    onClick={signUp}>Register
                </Button>
                <Button fullWidth
                    variant="outlined"
                    onClick={signInGuest}>sign in like guest
                </Button>
                <Button fullWidth
                    variant="outlined"
                    onClick={logoutacc}>logout
                </Button>
            </div>
        </Box>
    )
}
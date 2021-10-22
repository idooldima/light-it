import { Input, Button, Grid, ListItem, Link } from "@material-ui/core";
import { useState } from "react";
import { signUpStart, signInAsGuest, logout } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux"

export default function SignUp() {
    const dispatch = useDispatch();

    const signUp = () => {
        dispatch(
            signUpStart({ username: 'dima', password: 'dima123' })
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
        <Grid container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            style={{ minHeight: '99vh' }}>
            <Grid item xs={7}>
                <Input fullWidth type='email' placeholder='email'></Input>
            </Grid>
            <Grid item xs={7}>
                <Input fullWidth type='password' placeholder='password'></Input>
            </Grid>
            <Grid item xs={7}>
                <Input fullWidth type='password' placeholder='confirm your password'></Input>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth
                    onClick={signUp}
                >submit</Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth
                    onClick={signInGuest}
                >sign in like guest</Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth
                    onClick={logoutacc}
                >logout</Button>
            </Grid>
        </Grid>
    )
}
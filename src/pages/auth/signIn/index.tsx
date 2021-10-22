import { Input, Button, Grid, ListItem, Link } from "@material-ui/core";
import { useState } from "react";
import { signInStart } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux"


export default function SignIn() {
    const dispatch = useDispatch();

    const logIn = () => {
        dispatch(
            signInStart({ username: 'dima', password: 'dima123' })
        );
    };

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
            <Grid item xs={6}>
                <Button fullWidth
                    onClick={logIn}
                >submit</Button>
            </Grid>
        </Grid>
    )
}
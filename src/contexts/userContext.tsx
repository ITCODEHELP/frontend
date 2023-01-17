import React, {PropsWithChildren, useEffect, useState} from 'react';
import Loading from "../components/loading/loading";
import {serverURL} from "../settings";

export const UserContext = React.createContext<{
    curUser: User | null,
    loggedIn: boolean,
    refresh: () => void
}>({
    curUser: null,
    loggedIn: false,
    refresh: () => {
    },
});

export function UserWrapper(props: PropsWithChildren) {
    const [curUser, setCurUser] = React.useState<User | null>(null);
    const [loaded, setLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!loaded) {
            fetch(serverURL, {
                credentials: "include"
            }).then(async res => {
                const data = await res.json();
                setLoaded(true);
                if (data.loggedIn) {
                    setCurUser({
                        name: data.curUser.firstName,
                        email: data.curUser.email,
                        profileImage: data.curUser.profilePhoto,
                    });
                } else {
                    setCurUser(null);
                }
            });
        }
    }, [loaded]);

    if (!loaded) {
        return <Loading/>;
    }

    function refresh() {
        setLoaded(false);
    }

    let loggedIn: boolean;
    loggedIn = !!curUser;

    const curState = {curUser, refresh, loggedIn};

    return <UserContext.Provider value={curState}>
        {props.children}
    </UserContext.Provider>;
}
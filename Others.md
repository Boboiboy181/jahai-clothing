    useEffect(() => {
        async function getResult() {
            const respone = await getRedirectResult(auth);
            if (respone) {
                const userDocRef = await createUserDocumentFromAuth(respone.user);
            }
        }
        getResult();
    }, []);
This is the code that used for sign in with redirect
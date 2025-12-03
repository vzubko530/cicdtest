const AuthPage = async () => {

    await new Promise((res) => {setTimeout(() => {res(1)}, 3000)})

    return(
        <div>
            auth page
        </div>
    )
}

export default AuthPage;
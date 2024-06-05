import Header from "../Components/Header/Header";


function Login() {
    return (
        <>
            <Header />
            <div style={{ margin: "auto", maxWidth: "500px" }}>
                <h1 style={{ fontWeight: "500", padding: "0px 20px 0px 20px" }}>Entre</h1>
                <p style={{ marginBottom: "20px", fontWeight: "300", padding: "0px 20px 0px 20px" }}>Insira as suas credenciais e participe de uma nova concepção de marketplace.</p>
            </div>
        </>
    )
}

export default Login;
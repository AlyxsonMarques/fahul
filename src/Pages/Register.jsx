import Header from "../Components/Header/Header";
import RegisterForm from "../Components/RegisterForm/RegisterForm"

function Login() {
    return (
        <>
            <Header />
            <div style={{ margin: "auto", maxWidth: "500px" }}>
                <h1 style={{ fontWeight: "500", padding: "0px 20px 0px 20px" }}>Cadastre se</h1>
                <p style={{ marginBottom: "20px", fontWeight: "300", padding: "0px 20px 0px 20px" }}>Preencha os detalhes abaixo para criar a sua conta e tenha uma experiência inovadora.</p>
                <RegisterForm />
            </div>
        </>
    )
}

export default Login;
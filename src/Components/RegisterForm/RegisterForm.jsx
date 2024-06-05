import RegisterFormStyle from "./RegisterForm.module.css"
import { Link } from "react-router-dom";

function RegisterForm() {
    return (
        <form style={RegisterFormStyle} action="" method="post">
        <div>
            <label htmlFor="name" required>Nome Completo</label>
            <input type="text" name="name" id="name" placeholder="Nome de Exemplo" />
        </div>

        <div>
            <label htmlFor="username" required>Nome de Usuário</label>
            <input type="text" name="username" id="username" placeholder="@exemplo" />
        </div>

        <div>
            <label htmlFor="phone" required>Número de Telefone</label>
            <input type="tel" placeholder="(DDD) XXXXX-XXXX" />
        </div>

        <div>
            <label htmlFor="email" required>E-mail</label>
            <input type="text" name="email" id="email" placeholder="usuario@dominio.tld"/>
        </div>

        <div>
            <label htmlFor="password" required>Senha</label>
            <input type="password" name="password" id="password" placeholder="********"/>
        </div>

        <div>
            <label htmlFor="confirm-password" required>Confirmar Senha</label>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="********" />
        </div>

        <div>
            <button type="submit" className={RegisterFormStyle.submit}>Cadastrar</button>
        </div>
        <p>Já tem uma conta? <Link to="/login">Entre</Link></p>
    </form>
    )
}

export default RegisterForm;
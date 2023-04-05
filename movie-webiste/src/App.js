import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mayn-layout">
    <div className="header">
        <div className="logo">
            <a href="#">
                <img src="/img/CINÉ.png" alt="" />
            </a>
        </div>
    </div>


    <div className="login_body">
        <div className="login_box">
            <h2>Entrar</h2>
            <form>
                <div className="input_box">
                    <input required type="email" placeholder="Email ou número de telefone" />
                </div>

                <div className="input_box">
                    <input required type="password" placeholder="Senha" />
                </div>

                <div>
                    <button className="submit">
                        Entrar
                    </button>
                </div>
            </form>

            <div className="support">
                <div className="remember">
                    <span><input type="checkbox" style={{margin: '0',padding: '0',height: '13px'}} /></span>
                    <span>Lembre-se de mim</span>
                </div>
                <div className="help">
                    <a href="#">
                        Precisa de ajuda?
                    </a>
                </div>
            </div>

            <div className="login_footer">
                
                <div className="sign_up">
                    <p>Novo por aqui? <a href="#">Assine agora.</a></p>
                </div>

            </div>
        </div>
    </div>
</div>
  );
}

export default App;

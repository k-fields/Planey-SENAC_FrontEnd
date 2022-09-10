import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import '../../index.css'

export const Home = () => {

    return (
        <>

        <span>Ir para: </span><Link to='/' className='link-pages-login'>Despesas</Link>
        <nav>
            <section className="about_section layout_padding">
                <div className="container">
                <div className="custom_heading-container">
                    <h3 className=" ">
                    Nossa Empresa
                    </h3>
                </div>
                <p className="layout_padding2-top">
                    Buscamos desenvolver um aplicativo, seguro e robusto, que solucione seus problemas de forma prática e rápida.
                </p>
                <div className="img-box layout_padding2">
                    <img src={logo} alt='logo' className="login-form-img"/>
                </div>
                <p className="layout_padding2-bottom">
                    Estamos aqui para ajudar com seus gastos, e assim, você desfrutar seu dia com mais qualidade.
                </p>
                </div>
                <div className="container">
                <div className="btn-box">
                    <Link to='' className='link-pages-login'>Leia Mais</Link>
                    <hr/>
                </div>
                </div>
            </section>


            <section className="info_section layout_padding">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="info-logo">
                        <h2>
                        Planey - Nossa Missão
                        </h2>
                        <p>
                        Procuramos sempre estar próximos de nossos clientes, assegurando um serviço de qualidade e sempre ao alcance de todos.
                        </p>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="info-contact">
                        <h4>
                        Informação de Contato
                        </h4>
                        <div className="location">
                        <h6>
                            Escritório corporativo
                        </h6>
                            <span>
                            São Paulo, Brasil, 123-12312
                            </span>
                        </div>
                        <div className="call">
                        <h6>
                            SAC
                        </h6>
                            <span>
                            ( +55 (11) 9-9999-9999 )
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </nav>
        </>
    );
}

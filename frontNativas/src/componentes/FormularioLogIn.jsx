export function FormularioLogIn() {
    return (
        <div>
            <h1>LogIn</h1>

            <div className="contenedor-formulario">
                <form>
                    <h2>Bienvenido</h2>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button type="submit">Ingresar</button>
                    <h5>
                        <a href="#">¿Perdiste la Contraseña?</a>
                    </h5>
                    <h5>
                        <a href="#">¿No Tienes Cuenta? registrate</a>
                    </h5>
                </form>
                <div>
                    <button type="button">Volver</button>
                </div>
            </div>
        </div>
    );
}

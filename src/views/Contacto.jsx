import "./contacto.css"

const Contacto = () => {
  return (
    <div className="cContainer">
      <h2>Cuentanos, ¿en qué te podemos ayudar?</h2>
      <form>
        <label for="femail">Correo: </label>
        <input
          type="email"
          id="femail"
          name="firstname"
          placeholder="correo@ejemplo.com..."
        />
        <label for="fname">Descripción</label>
        <textarea placeholder="Dejanos tu pedido..."/>
      </form>
    </div>
  );
};

export default Contacto;

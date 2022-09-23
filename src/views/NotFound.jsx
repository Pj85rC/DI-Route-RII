import "./notFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>La ruta que intentas consultar no existe :/</h1>
      <img
        src="https://i.imgur.com/iFnIb5E.png"
        alt="NotFound"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default NotFound;

function Info({ title, help1, help2, help3 }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <p>{help1}</p>
      <p>{help2}</p>
      <p>{help3}</p>
    </div>
  );
}
export default Info;
import Alert from 'react-bootstrap/Alert';

function Rodape() {
  return (
    <>
      {[
        'dark'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         © Copyright-Feminicídio {variant}
        </Alert>
      ))}
    </>
  );
}

export default Rodape;
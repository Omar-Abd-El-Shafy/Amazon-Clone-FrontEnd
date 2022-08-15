import Alert from 'react-bootstrap/Alert';

function Error(error) {

  return (
    <Alert className="m-auto" variant={error.variant || 'info'}>
      {error}
    </Alert>
  );
}

export default Error;

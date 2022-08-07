import Alert from 'react-bootstrap/Alert';

function Error(error) {

  return (
    <Alert className="m-auto" variant={error.variant || 'info'}>
      {error.message}
    </Alert>
  );
}

export default Error;

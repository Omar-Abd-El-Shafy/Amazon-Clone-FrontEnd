import Alert from 'react-bootstrap/Alert';

function Error(props) {
  return (
    <Alert className="m-auto"
      variant={ props.variant || 'info' }>
      {props.childern}
    </Alert>
  );
}

export default Error;

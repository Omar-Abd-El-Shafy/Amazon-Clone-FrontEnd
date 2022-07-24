import Alert from 'react-bootstrap/Alert';

function Error ( props )
{
  console.log(props.childern)
  return (
    <Alert className="m-auto" variant={props.variant || 'info'}>
      {props.childern}
    </Alert>
  );
}

export default Error;

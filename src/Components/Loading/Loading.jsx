import Spinner from 'react-bootstrap/Spinner';

 function Loading() {
  return (
    <Spinner
      className="m-auto"
      animation="border"
      role="status"
      variant="warning"
    >
      <span className="visually-hidden">Loading</span>
    </Spinner>
  );
}

export default Loading;

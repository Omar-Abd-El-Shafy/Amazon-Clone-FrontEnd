import Spinner from 'react-bootstrap/Spinner';
import Placeholder from 'react-bootstrap/Placeholder';

function Loading() {
  return (
    // <Spinner
    //   className="m-auto"
    //   animation="border"
    //   role="status"
    //   variant="warning"
    // >
    //   <span className="visually-hidden">Loading</span>
    // </Spinner>
    <>
      <Placeholder xs={6} bg="warning" className=" rounded-3" />
      <Placeholder className="w-75 rounded-3" bg="warning" />
      <Placeholder xs={12} bg="warning" className=" rounded-3" />
      <Placeholder
        bg="warning"
        className=" rounded-3"
        style={{ width: '25%' }}
      />
    </>
  );
}

export default Loading;

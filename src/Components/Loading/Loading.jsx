import Placeholder from "react-bootstrap/Placeholder";

function Loading() {
    return (
      <>
        <Placeholder xs={6} className="bg-secondary gradient rounded-3" />
        <Placeholder className="w-75 rounded-3 bg-secondary bg-gradient" />
        <Placeholder xs={12} className="bg-secondary bg-gradient rounded-3" />
        <Placeholder
        
          className=" rounded-3 bg-secondary bg-gradient"
          style={{ width: '25%' }}
        />
      </>
    );
}

export default Loading;

import Placeholder from "react-bootstrap/Placeholder";

function Loading() {
    return (
        <>
            <Placeholder xs={6} bg="warning" className=" rounded-3" />
            <Placeholder className="w-75 rounded-3" bg="warning" />
            <Placeholder xs={12} bg="warning" className=" rounded-3" />
            <Placeholder
                bg="warning"
                className=" rounded-3"
                style={{ width: "25%" }}
            />
        </>
    );
}

export default Loading;

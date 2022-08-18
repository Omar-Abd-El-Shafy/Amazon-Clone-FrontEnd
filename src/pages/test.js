const [phone, setPhone] = useState(Shipping.phone || ' ');
const [street, setStreet] = useState(Shipping.phone || ' ');
const [building, setBuilding] = useState(Shipping.phone || ' ');
const [city, setCity] = useState(Shipping.city || ' ');
const [state, setState] = useState(Shipping.city || ' ');
const [zipCode, setZipCode] = useState(Shipping.city || ' ');

// Example: `updatePost().unwrap().then(fulfilled => console.log(fulfilled)).catch(rejected => console.error(rejected))

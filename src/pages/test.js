bill: 4998
createdAt: "2022-08-20T07:35:17.554Z"
deliveryAddress: {building: '10', street: 'dvf', city: 'ss', state: 'Massachusetts', country: 'United States', …}
deliveryDate: "2022-08-27T07:35:17.549Z"
paymentMethod: "visa"
products: (2) [{…}, {…}]
shippingFee: 21
status: "canceled"
transaction_id: "pi_3LYmDDFwhSEkFDCI1sstHYgI"
updatedAt: "2022-08-20T07:36:20.447Z"
user: "62fb7138f4f1966c85cd5215"
__v: 0
_id: "63008eb5231bf06aa5fab2db"



deliveryDate:
building: "10"
city: "ss"
country: "United States"
phone: "2315456"
state: "Massachusetts"
street: "dvf"
zipCode: "01320"


productBrief:
image_path: "https://productsprojectimages.s3.eu-west-3.amazonaws.com/dc4b00d5-0edb-474a-bdfd-0db079f106e4.jpg"
name: "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400) "
price: 1240

function StripedRowExample() {
  return (
    
  );
}

export default StripedRowExample;
<Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <Card className="mb-3">
                  <Row className="align-items-center g-2 p-3">
                    <Card.Title>items</Card.Title>

                    <Col md={4} xs={3}>
                      <img
                        src={''}
                        alt={''}
                        className="w-50 rounded-start  border-0"
                      />
                    </Col>
                    <Col md={8}>
                      {' '}
                      <Card.Body>
                        <Card.Text>
                          <Link to={``}>
                            {}
                          </Link>
                        </Card.Text>
                        <Card.Text>Quantity: </Card.Text>
                        <Card.Text>
                          <strong className="text-danger">
                            Price:  EGP
                          </strong>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </tr>
            ))}
          </tbody>
</Table>                
        <div className="OrderDetails-Product">
          <div className="OrderDetails-ProductPriceWrapper">
            <div className="Placeholder Placeholder--Rounded">
              <h1 className="OrderDetails-ProductPrice ">1225egp</h1>
            </div>
            <div className="OrderDetails-ProductAndDetails  ">
              <div className="OrderDetails-ProductLineItems">
                <div className="OrderDetails-ProductLineItem">
                  <img className="OrderDetails-ProductImage OrderDetails-ProductImage--Rounded" />
                  <div className="OrderDetails-DetailLines">
                    <div className="OrderDetails-DetailLine">
                      <div>
                        <div className="Placeholder Placeholder--Rounded"></div>
                        <div className='Placeholder Placeholder--Rounded'></div>
                        <div className='Placeholder Placeholder--Rounded'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section></section>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">items</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>img - thumbnail
<
  <Card.Body>
                <Card.Title>items</Card.Title>
                <ListGroup variant="flush">
                  {cart.cartItems.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row className="align-items-center g-0">
                        <Col md={4}>
                          <img
                            src={item.image_path[0]}
                            alt={item.name}
                            className="img-fluid rounded-start "
                          />
                          <Link to={`/product/one/${item._id}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={3}>
                          <span>{item.cartQuantity}</span>
                          {item.price}$
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Link to={'/CartPage'} className="fs-6 text-primary ">
                  Change
                </Link>
              </Card.Body>
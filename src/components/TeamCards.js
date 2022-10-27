import { Row,Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function TeamCards() {
  return (
    <Row xs={1} md={2} lg={3} className="g-5 py-5">
      <Col className="overflow-hidden">
        <Card bg="light" variant="light" style={{ alignItems: "center" }}>
          <Card.Img
            className="py-3"
            variant="top"
            src="images/tofu.png"
            style={{ width: "300px" }}
          />
          <Card.Body>
            <Card.Title>ExtraFirmTofu</Card.Title>
            <Card.Text>Co-Founder</Card.Text>
          </Card.Body>

          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/DaoOfLaziness"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
        </Card>
      </Col>
      <Col className="overflow-hidden">
        <Card bg="light" variant="light" style={{ alignItems: "center" }}>
          <Card.Img
            className="py-3"
            variant="top"
            src="images/dappboy.png"
            style={{ width: "300px" }}
          />
          <Card.Body>
            <Card.Title>DappBoy</Card.Title>
            <Card.Text>Co-Founder</Card.Text>
          </Card.Body>
          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/Dapp_Boy"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
        </Card>
      </Col>
      <Col className="overflow-hidden">
      <Card bg="light" variant="light" style={{alignItems: "center"}}>
        <Card.Img className="py-3" variant="top" src="images/divinefarmer.png" style={{ width: "300px"}} />
        <Card.Body>
          <Card.Title>DivineFarmer</Card.Title>
          <Card.Text>Business Strategy</Card.Text>
        </Card.Body>
        
          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/DivineFarmerNFT"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
      </Card>
    </Col>
    <Col className="overflow-hidden">
      <Card bg="light" variant="light" style={{alignItems: "center"}}>
        <Card.Img className="py-3" variant="top" src="images/frontdown.png" style={{ width: "300px"}} />
        <Card.Body>
          <Card.Title>Frontdown</Card.Title>
          <Card.Text>Operations</Card.Text>
        </Card.Body>
        
          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/Casey808c"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
      </Card>
    </Col>
    <Col className="overflow-hidden">
      <Card bg="light" variant="light" style={{alignItems: "center"}}>
        <Card.Img className="py-3" variant="top" src="images/kupo.png" style={{ width: "300px"}} />
        <Card.Body>
          <Card.Title>KupoNinja</Card.Title>
          <Card.Text>Head Dev</Card.Text>
        </Card.Body>
        
          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/KupoNinja"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
      </Card>
    </Col>
      <Col className="overflow-hidden">
        <Card bg="light" variant="light" style={{ alignItems: "center" }}>
          <Card.Img
            className="py-3"
            variant="top"
            src="images/hendrix.png"
            style={{ width: "300px" }}
          />
          <Card.Body>
            <Card.Title>Hendrix</Card.Title>
            <Card.Text>Blockchain Dev</Card.Text>
          </Card.Body>

          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/Olayinka12341"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
        </Card>
      </Col>
      <Col className="overflow-hidden">
        <Card bg="light" variant="light" style={{ alignItems: "center" }}>
          <Card.Img
            className="py-3"
            variant="top"
            src="images/chosen1.png"
            style={{ width: "300px" }}
          />
          <Card.Body>
            <Card.Title>Chosen1</Card.Title>
            <Card.Text>Web Dev</Card.Text>
          </Card.Body>

          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/Energy_Gad_"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
        </Card>
      </Col>
      <Col className="overflow-hidden">
        <Card bg="light" variant="light" style={{ alignItems: "center" }}>
          <Card.Img
            className="py-3"
            variant="top"
            src="images/john.png"
            style={{ width: "300px" }}
          />
          <Card.Body>
            <Card.Title>YungCitySlicker</Card.Title>
            <Card.Text>Web Dev</Card.Text>
          </Card.Body>

          <Card.Link
            style={{ color: "black" }}
            href={"https://twitter.com/EggosNFT"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Card.Link>
        </Card>
      </Col>
    </Row>
  );
}

export default TeamCards;

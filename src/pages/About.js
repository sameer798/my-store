import { Container, Row, Col } from "react-bootstrap";
import img from '../assets/about.jpeg'

const AboutUS = ()=>{
    return <Container className="mt-5 mb-5">
            <Row>
                <Col><img src={img} alt="box" style={{borderRadius: "50%"}}/></Col>
                <Col> <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem numquam
      eius quaerat et tenetur, nihil sint! Voluptas maxime eum nemo aut,
      exercitationem illum dolore labore neque illo id, ipsa vel esse similique
      ad explicabo necessitatibus. Enim repellendus animi velit id, aspernatur
      aliquam ab deserunt ratione qui rerum corporis doloremque dolores amet a,
      modi illum laboriosam iure. Architecto accusamus ducimus recusandae ea
      suscipit ut repudiandae facere, adipisci error inventore quod a cupiditate
      odit quos veritatis tenetur officiis dolore eveniet voluptatum fugit
      reiciendis? Fugit harum, quasi veritatis architecto aut enim eius labore
      officia corrupti eligendi tempora illo quisquam soluta neque eos nobis?
    </p></Col>
            </Row>
    </Container>
}

export default AboutUS;
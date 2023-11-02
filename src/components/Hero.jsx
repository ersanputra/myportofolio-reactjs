import { Row, Col, Image } from "react-bootstrap";

const Hero = () => {
    return (
        <section>
            <Row>
                <Col md={6}>
                    <h1>DevyCake</h1>
                    <p>Platform pemesanan kue online yang menawarkan beragam pilihan kue berkualitas tinggi, dibuat dengan hati-hati untuk setiap momen spesial Anda. Mudah, cepat, dan memukau!</p>
                    <p>DevyCake berkomitmen untuk menyajikan hanya kue terbaik yang memenuhi standar kualitas tertinggi. Setiap kue yang kami sajikan tidak hanya menarik secara visual, tetapi juga memiliki rasa yang luar biasa yang akan meninggalkan kesan mendalam bagi siapa pun yang mencicipinya. Dengan proses pemesanan yang mudah dan pengiriman yang cepat, kami memastikan setiap acara Anda menjadi lebih manis dengan DevyCake.</p>
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Image src="https://img.freepik.com/free-photo/spooky-composition-pumpkin-candles_23-2147687011.jpg?w=740&t=st=1698930404~exp=1698931004~hmac=b96de0ddc5b4d290886c0f15496a481fc7c0ab7cd0e37202511a11a111f8416b" rounded width={300}/>
                </Col>
            </Row>
        </section>
    )
}

export default Hero;
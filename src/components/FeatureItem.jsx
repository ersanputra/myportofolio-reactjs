import { Image } from "react-bootstrap";



const FeatureItem = (props) => {
    const { title } = props ;
    return (
        <div className="card mb-2">
            <Image src="https://img.freepik.com/free-photo/spooky-composition-pumpkin-candles_23-2147687011.jpg?w=740&t=st=1698930404~exp=1698931004~hmac=b96de0ddc5b4d290886c0f15496a481fc7c0ab7cd0e37202511a11a111f8416b" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default FeatureItem;
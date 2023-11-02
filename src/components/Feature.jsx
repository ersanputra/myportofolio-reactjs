import FeatureItem from "./FeatureItem";

const Feature = () => {
    return (
        <div className="row">
           
            <div className="col-md-4">
                <FeatureItem title={"M. Iqbal"} ></FeatureItem>
            </div>
            <div className="col-md-4">
                <FeatureItem title={"Verrel P"} ></FeatureItem>
            </div>
            <div className="col-md-4">
                <FeatureItem title={"Irfan Nesya"} ></FeatureItem>
            </div>
            <div className="col-md-4">
                <FeatureItem title={"Ersan Putra"} ></FeatureItem>
            </div>
            <div className="col-md-4">
                <FeatureItem title={"Sutarmin"} ></FeatureItem>
            </div>
        </div>
    )
}

export default Feature;
const Herosection=()=>{
    return (
       <main className="hero conatiner">
        <div className="hero-content">
            <h1>Your passion is capturing great moments,So is ours.</h1>
            <p>
            “Black and white are the colors of photography. To me, they symbolize the alternatives of hope and despair to which mankind is forever subjected.” Robert Frank
            </p>
            <div className="hero-btn">
                <button className="shopnow" onClick={()=>window.location.href='https://www.nikon.co.in/support/authorised-resellers'}>Shop Now</button>
                <button className="secondary-btn" onClick={() => window.location.href='https://brochures.nikon-asia.com/Brochures/Nikon_Product_Catalogue_Final_May_2023.pdf'}>Catalogues</button>
            </div>
            <div className="shopping">
                <p>Also Available on</p>
                <div className="brand-icons">
                    <a href="https://www.amazon.in/Nikon-D7100-24-1MP-Digital-Camera/dp/B00BIWQFNA"><img src="/images/amazon.png" alt="" /></a>
                    <a href="https://www.flipkart.com/nikon-d7100-dslr-camera-body-single-lens-af-s-18-105-mm-vr-lens-16-gb-sd-card-bag/p/itm6b9dedd4238c0"><img src="/images/flipkart.png" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/dslr.png" alt="" />
        </div>
       </main>
    );
};
export default Herosection;
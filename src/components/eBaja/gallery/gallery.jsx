import './gallery.css'
import ImageList from '../galleryImageList.json'
function imageAdd() {

}

function Gallery() {
    let i = 1;
    return (
        <>
            <div className="eBajaGallery">
                <div className="galleryImg">
                    <ul>
                        {ImageList.map((img) => (
                            <li>
                                <img src={img} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Gallery;
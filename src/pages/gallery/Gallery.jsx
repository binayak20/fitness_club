import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const galarryLength = 15;
  const images = [];

  for (let index = 1; index <= galarryLength; index++) {
    images.push(require(`../../images/gallery${index}.jpg`));
  }
  console.log(images);
  return (
    <>
      <Header title="Our Galary" image={HeaderImage}>
        Loren ispum In publishing and graphic design, Lorem ipsum is a
        placeholder text commonly used to demonstrate Loren ispum In publishing
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;

import Header from "./Components/Header/Header";
import ImageSlider from "./Components/AnnouncementCarousel/ImageSlider";

function Home() {
  let slides = [
    { src: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg", title: "Gato Bizoiando", isActive: true },
    { src: "https://saude.abril.com.br/wp-content/uploads/2021/03/bichos-foto-vauvau-Getty-Images.png?w=680&h=449&crop=1", title: "Gato Erguido", isActive: false },
    { src: "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg", title: "Gato Deitado", isActive: false }
  ];

  return (
    <>
      <Header />
      <ImageSlider slides={slides} />
    </>
  )
}

export default Home

import Header from "../Components/Header/Header";
import ImageSlider from "../Components/AnnouncementCarousel/ImageSlider";
import AnnouncementSection from "../Components/AnnouncementSection/AnnouncementSection";
import Footer from "../Components/Footer/Footer"

function Home() {
  let paidAnnouncements = [
    { src: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg", title: "Gato Bizoiando", isActive: true },
    { src: "https://saude.abril.com.br/wp-content/uploads/2021/03/bichos-foto-vauvau-Getty-Images.png?w=680&h=449&crop=1", title: "Gato Erguido", isActive: false },
    { src: "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg", title: "Gato Deitado", isActive: false },
    { src: "https://static.giulianaflores.com.br/images/product/29615gg.jpg?ims=750x750", title: "eu te amo", isActive: false }
  ];

  let mainAnnouncements = [
    { src: "https://c.files.bbci.co.uk/9930/production/_98761293_mediaitem98761292.jpg",
      title: "Estrela KIC 8482 652",
      author: "Alyxson Marques", price: 20 },
    {
      src: "https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg",
      title: "Eu amo a Ester",
      author: "Eu",
      price: 0
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAvWFtJUCBSFvA2H4B4zSNGW86c4WR_MO6RqG6R1hNg&s",
      title: "Rick and Morty",
      author: "Depressão",
      price: 42
    },

  ]

  return (
    <>
      <Header />
      <ImageSlider slides={paidAnnouncements} />
      <AnnouncementSection announces={mainAnnouncements}/>
      <Footer />
    </>
  )
}

export default Home

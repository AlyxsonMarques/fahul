import AnnouncementCardStyle from "./AnnouncementCard.module.css";

function AnnouncementCard({ src, title, price, author }) {

    price = price.toString();
    price = `R$ ${price}`

    return (
        <article className={AnnouncementCardStyle.announcementCardContainer}>
            <div className={AnnouncementCardStyle.announcementCardHeader} style={{backgroundImage: `url(${src})`}}></div>
            <div className={AnnouncementCardStyle.announcementCardContent}>
                <h1 className={AnnouncementCardStyle.announcementCardTitle}>
                    {title}
                </h1>
                <h2 className={AnnouncementCardStyle.announcementCardAuthor}>
                    {author}
                </h2>
                <div className={AnnouncementCardStyle.announcementCardPrice}>
                    {price}
                </div>
            </div>
        </article>
    )
}

export default AnnouncementCard;
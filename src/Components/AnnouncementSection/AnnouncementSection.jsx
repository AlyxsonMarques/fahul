import AnnouncementCard from "../Card/AnnouncementCard";
import AnnouncementSectionStyle from "./AnnouncementSection.module.css";

function AnnouncementSection({ announces }) {
    return (
        <section className={AnnouncementSectionStyle.announcementSection}>
            {announces.map((announce, announceIndex) =>
                <AnnouncementCard key={announceIndex}
                    src={announce.src}
                    title={announce.title}
                    author={announce.author}
                    price={announce.price}
                    />
                )
            }
        </section>
    )
}

export default AnnouncementSection;
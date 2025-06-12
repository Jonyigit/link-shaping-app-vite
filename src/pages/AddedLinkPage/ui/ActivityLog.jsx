import { motion } from "framer-motion";
import arrowRightIcon from "../../../shared/assets/icons/arrow-right.svg";
import styles from "./styles/ActivityLog.module.scss";

function ActivityLog({ selectedPlatforms }) {
    const platformsCount = selectedPlatforms.length;
    const maxSkeletons = 5;

    return (
        <motion.section
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={styles["activity-log"]}
        >
            <div className={styles.phone}>
                <div className={styles["phone-info"]}>
                    <div className={styles.content}>
                        <div className={styles.avatar}></div>
                        <div className={styles["full-name"]}></div>
                        <div className={styles.email}></div>
                    </div>
                    <ul className={styles.socials}>
                        {selectedPlatforms.map((platform, index) => (
                            <a
                                key={index}
                                className={styles.lists}
                                style={{ backgroundColor: platform.color || "#1a1a1a" }}
                                href={platform.url}
                                target="_blank"
                            >
                                <div className={styles.info}>
                                    <img src={platform.imgUrl} alt={platform.platformName} />
                                    <span>{platform.platformName}</span>
                                </div>
                                <img src={arrowRightIcon} alt="link-shaping-app arrow-right icon svg" />
                            </a>
                        ))}

                        {Array.from({ length: Math.max(0, maxSkeletons - platformsCount) }).map((_, index) => (
                            <li key={`skeleton-${index}`} className={styles.links}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}

export default ActivityLog;

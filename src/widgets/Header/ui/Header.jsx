import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import LogoIcon from "../../../shared/assets/icons/logo.svg?react";
import LinkIcon from "../../../shared/assets/icons/link.svg?react";
import UserIcon from "../../../shared/assets/icons/user.svg?react";
import styles from "./Header.module.scss";

function Header() {
    const [active, setActive] = useState("link");

    return (
        <motion.header
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={styles.header}
        >
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <LogoIcon className={styles["logo-size"]} />
                </a>
                <nav className={styles.navbar}>
                    <ul className={styles["navbar-nav"]}>
                        <li className={styles.list} onClick={() => setActive("link")}>
                            <button className={clsx(styles["list-btn"], active === "link" && styles.active)}>
                                <LinkIcon className={styles.icon} />
                                Links
                            </button>
                        </li>
                        <li className={styles.list} onClick={() => setActive("profile")}>
                            <button className={clsx(styles["list-btn"], active === "profile" && styles.active)}>
                                <UserIcon className={styles.icon} />
                                Profile Details
                            </button>
                        </li>
                    </ul>
                </nav>
                <button className={styles["preview-btn"]}>Preview</button>
            </div>
        </motion.header>
    );
}

export default Header;

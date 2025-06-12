import { useState } from "react";
import ActivityLog from "../../../pages/AddedLinkPage/ui/ActivityLog";
import ProfileEditor from "../../../pages/AddedLinkPage/ui/ProfileEditor";
import styles from "./Head.module.scss";

function Head() {
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    return (
        <main className={styles.head}>
            <div className={styles.container}>
                <ActivityLog selectedPlatforms={selectedPlatforms} />
                <ProfileEditor selectedPlatforms={selectedPlatforms} setSelectedPlatforms={setSelectedPlatforms} />
            </div>
        </main>
    );
}

export default Head;

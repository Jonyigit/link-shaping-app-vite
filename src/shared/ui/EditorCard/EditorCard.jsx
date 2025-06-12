import { useState, useEffect } from "react";
import clsx from "clsx";
import ArrowIcon from "../../assets/icons/arrow.svg?react";
import linkBoldIcon from "../../assets/icons/link-bold.svg";
import dropArrowIcon from "../../assets/icons/drop-arrow.svg";
import { platformMocks } from "../../lib/mocks/constans";
import styles from "./EditorCard.module.scss";

function EditorCard(props) {
    const { index, register, errors, removeCard, control, selectedPlatforms, setValue } = props;
    const [dropDown, setDropDown] = useState(false);
    const [selectPlatform, setSelectPlatform] = useState(platformMocks[0]);

    const currentPlatform = control._formValues?.links?.[index]?.platform;

    useEffect(() => {
        if (currentPlatform) {
            const platform = platformMocks.find((p) => p.platformName === currentPlatform);
            if (platform) setSelectPlatform(platform);
        }
    }, [currentPlatform]);

    const changeDropDown = () => {
        setDropDown(!dropDown);
    };

    const handleSelectPlatform = (platform) => {
        setSelectPlatform(platform);
        setDropDown(false);
        setValue(`links.${index}.platform`, platform.platformName);
    };

    const availablePlatforms = platformMocks.filter(
        (platform) =>
            !selectedPlatforms.some(
                (selected) =>
                    selected.platformName === platform.platformName &&
                    selected.id !== control._formValues.links[index]?.id
            )
    );

    return (
        <div className={styles["editor-card"]}>
            <div className={styles.top}>
                <div className={styles.count}>
                    <ArrowIcon />
                    <span>Link #{index + 1}</span>
                </div>
                <button type="button" onClick={removeCard} className={styles["remove-btn"]}>
                    Remove
                </button>
            </div>

            <div className={styles["add-link"]}>
                <label>
                    <span>Platform</span>
                    <div className={styles["drop-down"]}>
                        <button
                            type="button"
                            onClick={changeDropDown}
                            className={styles["drop-btn"]}
                            disabled={availablePlatforms.length === 0}
                        >
                            <div className={styles.box}>
                                <selectPlatform.Icon />
                                <span>{selectPlatform.platformName}</span>
                            </div>
                            {availablePlatforms.length > 0 && (
                                <img
                                    src={dropArrowIcon}
                                    alt="dropdown arrow"
                                    className={clsx(dropDown && styles["arrow-rotate"])}
                                />
                            )}
                        </button>
                        {availablePlatforms.length > 0 && (
                            <div className={clsx(styles.drop, dropDown && styles["drop-show"])}>
                                {availablePlatforms.map((platform) => (
                                    <div
                                        key={platform.id}
                                        className={clsx(
                                            styles.platform,
                                            platform.classUrl === "border" && styles.border
                                        )}
                                        onClick={() => handleSelectPlatform(platform)}
                                    >
                                        <platform.Icon />
                                        <span>{platform.platformName}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </label>

                <label>
                    <span>Link</span>
                    <div className={clsx(styles["enter-link"], errors.links?.[index]?.url && styles["error-border"])}>
                        <img src={linkBoldIcon} alt="link icon" />
                        <input
                            type="text"
                            placeholder="e.g. https://www.github.com/johnappleseed"
                            {...register(`links.${index}.url`, {
                                required: "Can't be empty",
                                pattern: {
                                    value: /^https?:\/\/[\w.-]+\.[a-z]{2,}(\/[\w./-]*)*\/?$/i,
                                    message: "Please check the URL",
                                },
                            })}
                        />
                    </div>
                    {errors.links?.[index]?.url && <p className={styles.error}>{errors.links[index].url.message}</p>}
                </label>
            </div>
        </div>
    );
}

export default EditorCard;

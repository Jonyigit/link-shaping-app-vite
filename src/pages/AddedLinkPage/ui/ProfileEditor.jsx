import { useState, useEffect } from "react";
import clsx from "clsx";
import { useForm, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import EditorCard from "../../../shared/ui/EditorCard/EditorCard";
import emptyImg from "../../../shared/assets/images/empty.png";
import styles from "./styles/ProfileEditor.module.scss";
import { platformMocks } from "../../../shared/lib/mocks/constans";

function ProfileEditor({ selectedPlatforms, setSelectedPlatforms }) {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm({
        defaultValues: {
            links: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "links",
    });

    const onSubmit = (data) => {
        console.log("Form data:", data);
        const currentPlatforms = data.links.map((link) => {
            const platformInfo = platformMocks.find((p) => p.platformName === link.platform);
            return {
                id: link.id,
                platformName: link.platform,
                imgUrl: platformInfo?.imgUrl || "",
                color: platformInfo?.color || "#EEE",
                url: link.url,
            };
        });
        setSelectedPlatforms(currentPlatforms);
    };

    const handleAddNewLink = () => {
        const availablePlatform = platformMocks.find(
            (platform) => !selectedPlatforms.some((selected) => selected.platformName === platform.platformName)
        );

        append({
            id: uuidv4(),
            platform: availablePlatform?.platformName || "GitHub",
            url: "",
        });
    };

    return (
        <motion.section
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.5 }}
            className={styles["profile-editor"]}
        >
            <div className={styles.info}>
                <h1>Customize your links</h1>
                <p>Add your details to create a personal touch to your profile.</p>
            </div>

            <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <button
                    type="button"
                    onClick={handleAddNewLink}
                    className={styles["primary-btn"]}
                    disabled={selectedPlatforms.length >= platformMocks.length}
                >
                    + Add new link
                </button>

                <div className={styles.cards}>
                    {fields.length === 0 ? (
                        <div className={styles["empty-box"]}>
                            <div className={styles.picture}>
                                <img src={emptyImg} alt="empty placeholder" />
                            </div>
                            <div className={styles.content}>
                                <h1>Let's get you started</h1>
                                <p>
                                    Use the "Add new link" button to get started. Once you have more than one link, you
                                    can reorder and edit them. We're here to help you share your profiles with everyone!
                                </p>
                            </div>
                        </div>
                    ) : (
                        fields.map((field, index) => (
                            <EditorCard
                                key={field.id}
                                index={index}
                                register={register}
                                errors={errors}
                                removeCard={() => remove(index)}
                                control={control}
                                selectedPlatforms={selectedPlatforms}
                                setValue={setValue}
                            />
                        ))
                    )}
                </div>

                <footer className={styles["editor-footer"]}>
                    <button
                        type="submit"
                        className={clsx(styles["save-btn"], fields.length === 0 && styles.disabled)}
                        disabled={fields.length === 0}
                    >
                        Save
                    </button>
                </footer>
            </form>
        </motion.section>
    );
}

export default ProfileEditor;

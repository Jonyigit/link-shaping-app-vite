import { v4 as uuidv4 } from "uuid";
import GitHubIcon from "../../assets/icons/githup.svg?react";
import YouTubeIcon from "../../assets/icons/youtube.svg?react";
import LinkedInIcon from "../../assets/icons/linkedIn.svg?react";
import FacebookIcon from "../../assets/icons/facebook.svg?react";
import TwitchIcon from "../../assets/icons/twitch.svg?react";
import DevIcon from "../../assets/icons/dev.svg?react";
import CodewarsIcon from "../../assets/icons/codewars.svg?react";
import CodepenIcon from "../../assets/icons/codepen.svg?react";
import FreeCodeCampIcon from "../../assets/icons/freeCodeCamp.svg?react";
import GitLabIcon from "../../assets/icons/gitlab.svg?react";
import HashnodeIcon from "../../assets/icons/hashnode.svg?react";
import StackOverflowIcon from "../../assets/icons/stackoverflow.svg?react";

export const platformMocks = [
    {
        id: uuidv4(),
        Icon: GitHubIcon,
        platformName: "GitHub",
        classUrl: "",
        color: "#1A1A1A",
    },
    {
        id: uuidv4(),
        Icon: YouTubeIcon,
        platformName: "YouTube",
        classUrl: "",
        color: "#EE3939",
    },
    {
        id: uuidv4(),
        Icon: LinkedInIcon,
        platformName: "LinkedIn",
        classUrl: "",
        color: "#2D68FF",
    },
    {
        id: uuidv4(),
        Icon: FacebookIcon,
        platformName: "Facebook",
        classUrl: "",
        color: "#2442AC",
    },
    {
        id: uuidv4(),
        Icon: TwitchIcon,
        platformName: "Twitch",
        classUrl: "",
        color: "#EE3FC8",
    },
    {
        id: uuidv4(),
        Icon: DevIcon,
        platformName: "Dev.to",
        classUrl: "",
        color: "#333333",
    },
    {
        id: uuidv4(),
        Icon: CodewarsIcon,
        platformName: "Codewars",
        classUrl: "",
        color: "#8A1A50",
    },
    {
        id: uuidv4(),
        Icon: CodepenIcon,
        platformName: "Codepen",
        classUrl: "",
    },
    {
        id: uuidv4(),
        Icon: FreeCodeCampIcon,
        platformName: "freeCodeCamp",
        classUrl: "",
        color: "#302267",
    },
    {
        id: uuidv4(),
        Icon: GitLabIcon,
        platformName: "GitLab",
        classUrl: "",
        color: "#EB4925",
    },
    {
        id: uuidv4(),
        Icon: HashnodeIcon,
        platformName: "Hashnode",
        classUrl: "",
        color: "#0330D1",
    },
    {
        id: uuidv4(),
        Icon: StackOverflowIcon,
        platformName: "Stack Overflow",
        classUrl: "border",
        color: "#EC7100",
    },
];

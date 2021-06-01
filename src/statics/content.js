// ICONS
import icon_back from "./icons/icon_back.svg";
import icon_bilibili from "./icons/icon_bilibili.svg";
import icon_detail from "./icons/icon_detail.svg";
import icon_expand from "./icons/icon_expand.svg";
import icon_github from "./icons/icon_github.svg";
import icon_mail from "./icons/icon_mail.svg";
import icon_wechat from "./icons/icon_wechat.svg";

//SVG images
import svg_earth_v1 from "./earth.svg";
import svg_earth_v2 from "./earth_v2.svg";
import svg_logo from './logo.svg';

//Portfolio Pics
import img_ethics_declaimer from "./ethics-declaimer.png";
import img_fitlody_physbd1 from "./fitlody-physbd1.jpg";
import img_fitlody_physbd2 from "./fitlody-physbd2.jpg";
import img_fitlody_physbd3 from "./fitlody-physbd3.jpg";
import img_fitlody_poster from './fitlody-poster.png';
import img_fitlody_prototype from './fitlody-prototype.png';
import img_flappy_bird from './flappy-bird.jpg';
import img_graphicdesign_jtf1 from './graphicdesign-jtf1.png';
import img_graphicdesign_jtf2 from './graphicdesign-jtf2.png';
import img_graphicdesign_suburb from './graphicdesign-suburb.png';
import img_infitrav_first_prototype from "./infitrav-first-prototype.png"
import img_infitrav_intro from "./infitrav-intro.png";
import img_pillow_ethics from './pillow-ethics.png';
import img_pillow_nightver from './pillow-nightver.png';
import img_pillow_prototype from './pillow-prototype.png';
import img_pillow_tam from './pillow-tam.png';
import img_pillow_tutorial from './pillow-tutorial.png';
import img_user_comments from './user-comments.png';

//music
import music1 from "./music/adagioin-amajor.mp3";
import music2 from "./music/summerrainin-emajor.mp3";
import music3 from "./music/xmasrhymein-emajor.mp3";


export var myIcons = {
    back : icon_back,
    detial : icon_detail,
    expoand : icon_expand,
    social_apps : [
        {"src":icon_github,"link":"https://github.com/LeavesSG"},{"src":icon_bilibili,"link":"https://space.bilibili.com/2927560"},{"src":icon_mail,"link":"mailto:leaves_sg@outlook.com"},{"src":icon_wechat,"link":"/static/media/wechat.f8118b90.png"}
    ]
};

export var mySVGs = {
    logo: svg_logo,
    earth_v1 : svg_earth_v1,
    earth_v2 : svg_earth_v2
}

export var myPortfolioPics = {
    ethic_declaimer : img_ethics_declaimer,
    fitlody_physbd1 : img_fitlody_physbd1,
    fitlody_physbd2 : img_fitlody_physbd2,
    fitlody_physbd3 : img_fitlody_physbd3,
    fitlody_poster : img_fitlody_poster,
    fitlody_prototype : img_fitlody_prototype,
    flappy_bird : img_flappy_bird,
    graphicdesign_jtf1 : img_graphicdesign_jtf1,
    graphicdesign_jtf2 : img_graphicdesign_jtf2,
    graphicdesign_suburb : img_graphicdesign_suburb,
    infitrav_first_prototype : img_infitrav_first_prototype,
    infitrav_intro : img_infitrav_intro,
    pillow_ethics : img_pillow_ethics,
    pillow_nightver : img_pillow_nightver,
    pillow_prototype : img_pillow_prototype,
    pillow_tam : img_pillow_tam,
    pillow_tutorial : img_pillow_tutorial,
    user_comments : img_user_comments
}

export var myMusic = {
    music1: music1,
    music2:music2,
    music3:music3
}
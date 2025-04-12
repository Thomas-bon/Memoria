<template>
    <footer>
        <div id="logoFooter">
            <img src="../assets/pictures/MEMORIA_footer.svg" alt="Memoria Footer Logo">
        </div>
        <div id="privacyFooter">
            <div></div>
            <div id="terms_cookies_privacy">
                <a href="" class="privacy">Terms</a>
                <a href="" class="privacy">Privacy</a>
                <a href="" class="privacy">Cookies</a>
            </div>
        </div>
        <div id="linkFooter">
            <h2>Follow us</h2>
            <div id="allSocialMedia">
                <a href="" class="iconSocialMedia">
                    <img src="../assets/pictures/logo_Social_Media/Facebook.svg" alt="Facebook">
                </a>
                <a href="" class="iconSocialMedia">
                    <img src="../assets/pictures/logo_Social_Media/Telegram.svg" alt="Telegram">
                </a>
                <a href="" class="iconSocialMedia">
                    <img src="../assets/pictures/logo_Social_Media/Instagram.svg" alt="Instagram">
                </a>
                <a href="" class="iconSocialMedia">
                    <img src="../assets/pictures/logo_Social_Media/Figma.svg" alt="Figma">
                </a>
            </div>
        </div>
    </footer>
</template>

<style>
@font-face {
    font-family: Inter;
    src: url(../assets/font/Inter_18pt-SemiBold.ttf);
}

footer {
    height: 10%;
    width: 140%;
    z-index: 50;
    position: relative;
    display: flex;
    background-color: #D9D9D9;
}

#logoFooter {
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}

#logoFooter img {
    width: 80%;
}

#privacyFooter {
    width: 67%;
}

#privacyFooter>div:first-child {
    height: 20%;
}

#terms_cookies_privacy {
    border-top: #cecece 6px solid;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 30px;
    gap: 50px;
    height: 60%;

}

.privacy {
    font-size: 1.3em;


    text-decoration: none;
    color: black;

    font-family: "Inter";
}

#linkFooter {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
    padding-bottom: 10px;
}

#linkFooter h2 {
    width: 80%;
    text-align: start;
    font-family: "Inter";
    font-weight: 400;
}

#allSocialMedia {
    width: 80%;
    height: 40%;
    gap: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.iconSocialMedia {
    background-color: white;
    border-radius: 50%;
    height: 20px;
    width: 50px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.iconSocialMedia:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.iconSocialMedia img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>

import twitterIcon from "../icons/twitter-icon.svg"
import facebookIcon from "../icons/facebook-icon.svg"
import instagramIcon from "../icons/instagram-icon.svg"
import linkedinIcon from "../icons/linkedin-icon.svg"
// import gitHubIcon from "../icons/github-icon/svg"

export default function Footer() {
    return (
        <section id="footer">
            <a href="x.com" target="blank"><img src={twitterIcon} /></a>
            <a href="facebook.com" target="blank"><img src={facebookIcon} /></a>
            <a href="instagram.com" target="blank"><img src={instagramIcon} /></a>
            <a href="linkedin.com" target="blank"><img src={linkedinIcon} /></a>
            {/* <img src={gitHubIcon} /> */}
        </section>
    )
}
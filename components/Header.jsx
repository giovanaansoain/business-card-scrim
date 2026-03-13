import mailIcon from "../icons/mail.svg"

export default function Header() {
    return (
        <section id="header">  
            <img id="profile-pic" src="./images/Aline-Addams.png" />
            <main>
                <h1>Aline Addams</h1>
                <span className="role">Frontend Developer</span>
                <a href="aline.addams.com" className="link" target="blank">aline.addams.com</a>
                <button>
                    <img src={mailIcon} alt="" aria-hidden />
                    Email
                </button>
            </main>
         </section>
    )
}
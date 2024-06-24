

export default function Footer(){
    return (
        <>
            <footer id="footer">
                <section className="footerSection">
                    <ul>
                        <h3>Links</h3>
                        <br />
                        <li>Memberships</li>
                        <br />
                        <li>About</li>
                        <br />
                        <li>Contact</li>
                    </ul>
                </section>
                <section className="footerSection">
                    <ul>
                        <li>Socials</li>
                        <br />
                        <div id="socials">
                            <img src="src/icon/001-instagram.png" alt="" />
                            <img src="src/icon/002-twitter.png" alt="" />
                            <br />
                            <img src="src/icon/004-pinterest.png" alt="" />
                            <img src="src/icon/003-social-media.png" alt="" />
                        </div>
                    </ul>
                </section>
            </footer>
        </>
    )
}
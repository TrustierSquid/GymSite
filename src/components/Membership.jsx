

export default function Membership(){
    return( 
        <>
            <main id="membership">
                <div id="title">
                    <h2>Memberships</h2>
                    <p>We offer the Standard, Super, and Ultra Membership. All get you access to the tanning and massage bed amenities</p>
                </div>
                <div className="membership-option">
                    <h2><i>ULTRA</i></h2>
                    <h5>Starting at</h5>
                    <h1>$39.99<span style={{fontSize: '1rem'}}>/mo*</span></h1>
                    <h5>+ Fees & Taxes</h5>
                    <br />
                    <hr />
                    <br />
                    <p>With this membership you get full access to the all of the amenities such as, tanning and the saunas.</p>
                    <div className="information-membership">
                        <button>Join Now</button>
                        <a href="/" style={{color: "var(--accentColor)"}}>Learn more</a>
                    </div>
                </div>
                <div className="membership-option">
                    <h2><i>SUPER</i></h2>
                    <h5>Starting at</h5>
                    <h1>$24.99<span style={{fontSize: '1rem'}}>/mo*</span></h1>
                    <h5>+ Fees & Taxes</h5>
                    <br />
                    <hr />
                    <br />
                    <p>With this membership you can enter other one of our clubs other than just your home club.</p>
                    <div className="information-membership">
                        <button>Join Now</button>
                        <a href="/" style={{color: "var(--primaryColor)"}}>Learn more</a>
                    </div>
                </div>
                <div className="membership-option">
                    <h2><i>STANDARD</i></h2>
                    <h5>Starting at</h5>
                    <h1>$14.99<span style={{fontSize: '1rem'}}>/mo*</span></h1>
                    <h5>+ Fees & Taxes</h5>
                    <br />
                    <hr />
                    <br />
                    <p>With this membership you get full access to the gym.</p>
                    <div className="information-membership">
                        <button>Join Now</button>
                        <a href="/" style={{color: "var(--primaryColor)"}}>Learn more</a>
                    </div>
                </div>
            </main>
        </>
    )
}
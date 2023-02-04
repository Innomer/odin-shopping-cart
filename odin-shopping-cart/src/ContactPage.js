import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import './ContactPage.css'

function ContactPage() {
    return (
        <div className="ccontainer">
            <NavBar />
            <div className="cmain">
                <p>Contact Us</p>
                <div>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input name='name' id='name' type='text'></input>
                        <label htmlFor="mail">Email</label>
                        <input name='mail' id='mail' type='email'></input>
                        <label htmlFor="des">Question</label>
                        <input name='des' id='des' type='text'></input>
                        <input type="submit" placeholder="Submit" value="Submit" id='sub'></input>
                    </form>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

export default ContactPage;
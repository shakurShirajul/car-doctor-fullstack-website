import logo from '../assets/logo.svg'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img src={logo} alt="" />
                    <caption>Car Doctor</caption>
                    <p>
                        Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
import react from "react"
import './styles.css'


const Footer = () => {

    return (<>
        <footer className="footer center">
            <div className="copyright center">
                Astronomy Club, NIT Kurukshetra.
            </div>
            <ul className="center">
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" /></a></li>
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" /></a></li>
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" /></a></li>
            </ul>
        </footer>
    </>)
}

export default Footer
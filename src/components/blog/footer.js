const Footer = () => {
    return<div className="footer">
        <span className='footer-name'>WELLFINE</span>
        <a href="https://t.me/HardToImbue"  className="telegram"><i className="fa-brands fa-telegram" style={{color: "#ffffff;"}}></i></a>
        <a className="link-out" href="mailto:mihailovmikael24@gmail.com?subject=your title&body=TThe message">
            <i style={{transform:" translate(-1vw, 0.5vw);"}} className="fa-solid fa-at"> </i> <button id="btnOutlook"></button>
        </a>

    </div>
}
export default Footer
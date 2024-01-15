import React from "react";

const year = new Date()
function Footer() {
    return <footer>Copyright {year.getFullYear()} </footer>
}

export default Footer;
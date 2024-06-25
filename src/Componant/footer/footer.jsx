import React from 'react'
import "./footer.css"

function footer() {
  return (
    <footer>
      <p className="footer-copy">&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  )
}

export default footer

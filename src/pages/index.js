import React from 'react'
import Link from 'gatsby-link'

const ContactFormPage = () => (

    <div>
        <h1>Hi People!</h1>
        <p>Welcome to my new Gatsby site.</p>
        <p>Now go build something great.</p>
        <form 
        name = "contact" 
        method = "post"
        data-netlify = "true"
        data-netlify-honeypot = "bot-field"
        > 
        <input name = "name" placeholder = "Your Name" type="text"/>
        <button>Send</button> 
        </form>    
        <Link to = "/HomePage/">Home Page</Link>
    </div>

) 

export default ContactFormPage
 

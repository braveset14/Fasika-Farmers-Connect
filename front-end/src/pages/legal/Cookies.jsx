import React from 'react';
export default function Cookies() {
  return (
    <div className="cookie-container">
      <h1 className="cookie-title">Cookie Policy</h1>
       <p className="cookie-date">
        Last updated: January 2026
      </p>

      <section className="main-section">
        <p>
          Fasika Farmers Connect uses cookies and similar technologies to enhance
          user experience, improve system performance, and ensure secure access
          to our platform.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help the system recognize your device and remember
          certain information.
        </p>

        <h2>How We Use Cookies</h2>
        <ul className="cookie-list">
          <li>Authentication and session management</li>
          <li>Saving user preferences</li>
          <li>Improving platform performance and reliability</li>
          <li>Security and fraud prevention</li>
        </ul>

        <h2 >Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings.
          Disabling cookies may affect certain features of the platform.
        </p>

        <h2 >Contact</h2>
        <p>
          If you have questions about our Cookie Policy, please contact the
          Fasika Farmers Connect support team.
        </p>
      </section>
    </div>
  )
}
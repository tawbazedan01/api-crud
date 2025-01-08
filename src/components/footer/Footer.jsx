import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-body-tertiary py-4">
      <div className='container'>
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h5 className="fw-bold">Your Company</h5>
            <p className="text-muted mb-0">© 2024 All rights reserved.</p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-muted fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-muted fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-muted fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

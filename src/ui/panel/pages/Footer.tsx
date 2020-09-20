import React from 'react';

export function Footer() {
  return (
    <div className="nk-footer">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
            &copy; 2020{' '}
            <a href="https://github.com/onka13/onka-react-admin" target="_blank">
              onka-react-admin
            </a>
          </div>
          <div className="nk-footer-links">
            <ul className="nav nav-sm">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

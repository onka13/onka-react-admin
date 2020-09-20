import React from 'react';

export function PublicFooter() {
  return (
    <div className="nk-footer nk-auth-footer-full">
              <div className="container wide-lg">
                <div className="row g-3">
                  <div className="col-lg-6 order-lg-last">
                    <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Terms Condition
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Help
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="nk-block-content text-center text-lg-left">
                      <p className="text-soft">&copy; 2020 onka-react-admin. All Rights Reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}

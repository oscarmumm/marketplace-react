import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-center">
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Demo Version</h5>

                        <p>
                            Este sitio web fue creado utilizando ReactJS, React-router-dom, Bootstrap y la API de dummyjson
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center p-3">
                © 2023 Copyright: 
                <a
                    className="text-dark nav-link"
                    href="https://oscarmumm.github.io/"
                    target="_blank">
                    oscarmumm
                </a>
            </div>
        </footer>
    );
};

export default Footer;

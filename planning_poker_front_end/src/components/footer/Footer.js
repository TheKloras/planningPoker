import React from 'react';

const Footer = () => {
    return (
        <div className="container fixed-bottom">
            <footer className="navbar opacity-50 small">
                <p className="pt-3">© 2023 Festo Corporation. All Rights Reserved </p>
                <div className="">
                    <a className="p-1 text-decoration-none text-black"
                       href="https://www.festo.com/us/en/e/legal/-id_3741/">Imprint</a>
                    <a className="p-1 text-decoration-none text-black"
                       href="https://www.festo.com/us/en/e/privacy-statement-id_3749/">Data privacy</a>
                    <a className="p-1 text-decoration-none text-black"
                       href="https://www.festo.com/us/en/e/legal/terms-and-conditions-of-sale-id_3747/">Terms and
                        Conditions of Sale</a>
                    <a className="p-1 text-decoration-none text-black"
                       href="https://www.festo.com/us/en/e/cloud-services-id_129924/">Cloud service</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
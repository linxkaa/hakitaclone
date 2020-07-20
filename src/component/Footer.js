import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="row mx-auto py-5">
          <div className="container col-xl-6 col-md-7 col-sm-7 ">
            <h3>About Us</h3>
            <p>
              HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat
              Indonesia dalam membuat dan memproses dokumen legal yang aman dan
              terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah
              proses pembuatan dokumen.
            </p>
          </div>
          <div className="container col-xl-3 col-md-4 col-sm-4 footer-row">
            <h3>Contact Us</h3>
            <p>
              Mail: info@hakita.com Alamat: Jl. Boulevard Barat Raya No.27, RW.
              9,Kelapa Gading Barat - Jakarta Utara 14240
            </p>
            <div className="row ">
              <div className=" py-2 pr-2">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className=" p-2">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between footer-last align-items-center">
          <div className="col-xl-6 col-md-7 col-sm-8 col-10 mx-auto testtt">
            <a href="$" className="mr-3">
              <span>Syarat & ketentuan</span>
            </a>
            <a href="$" className="mr-3">
              <span>Kebijakan & Privasi</span>
            </a>
            <a href="$" className="mr-3">
              <span>Panduan Pembayaran</span>
            </a>
          </div>
          <div className="col-xl-3 col-md-3 text-center mx-auto ">
            <h3>© PT Legalindo Mitra Abadi, 2020</h3>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

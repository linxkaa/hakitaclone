import React, { Component } from "react";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section className="containerhakita row align-items-center">
          <div className="col-md-5  col-sm-7 col-xl-6 ">
            <h1>Urusan legal jadi lebih gampang dengan hakita</h1>
            <button className="btn-hakita mt-4">Baca Artikel</button>
          </div>
        </section>
        <section className="container-about">
          <div className="row justify-content-around">
            <div className="col-md-4 col-11 mb-2">
              <div className="row align-self-start">
                <img height="60px" src={require("../img/img1.png")} alt="." />
                <div className="col col-xl-9">
                  <h3>We Meet People’s Needs</h3>
                  <p>
                    Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang
                    menakutkan dan belum terjangkau untuk semua golongan. Inilah
                    mengapa kami ada; untuk melawan stigma dan menjawab segala
                    kebutuhan legal Anda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-11 mb-2">
              <div className="row">
                <img height="50px" src={require("../img/img2.png")} alt="." />
                <div className="col col-xl-9">
                  <h3>We Provide Protection</h3>
                  <p>
                    Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10
                    tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan
                    hukum yang sesuai dengan hak Anda sebagai warga negara.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-11">
              <div className="row">
                <img height="60px" src={require("../img/img3.png")} alt="." />
                <div className="col col-xl-9">
                  <h3>We Are Trustworthy</h3>
                  <p>
                    HAKITA hadir karena kami percaya bahwa hukum adalah hak
                    semua orang. Semua yang kami lakukan di HAKITA selalu
                    selaras dengan misi kami untuk menjadikan hukum sebagai
                    sesuatu yang mudah dimengerti dan dapat diakses oleh semua
                    orang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="prods">
          <div className="col-md-5 col-xl-10 col-lg-5 col-sm-8  col-11 mx-auto text-center">
            <h1>Product and Services</h1>
            <p className="my-5 small">
              Apapun kebutuhan legal Anda, biar HAKITA yang urus.
            </p>
            <div className="row justify-content-around">
              <div className="container col-xl-4 align-content-end">
                <div className="shadow shadow bg-whitex roundedcost mb-4 p-5">
                  <img
                    src={require("../img/prods1.png")}
                    width="95px"
                    height="100px"
                    alt="."
                  />
                </div>
                <h4>Otomasi Dokumen</h4>
                <p>
                  Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa
                  butuh waktu berminggu-minggu sekarang bisa selesai dalam
                  hitungan menit dengan template dari HAKITA.
                </p>

                <div className="my-5">
                  <a href="#" className="btn-costum arrow-wrapper">
                    LEARN MORE
                    <i className="fa fa-arrow-right arrow-icon"></i>
                  </a>
                </div>
              </div>
              <div className="container col-xl-4 ">
                <div className="shadow shadow bg-whitex roundedcost mb-4  p-5">
                  <img
                    src={require("../img/prods2.png")}
                    width="85px"
                    alt="."
                  />
                </div>
                <h4>Sistem Manajemen Dokumen</h4>
                <p>
                  Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan
                  dokumen yang Anda miliki, teknologi kami juga dapat memberi
                  tahu Anda jika ada dokumen yang membutuhkan perhatian khusus
                  lewat fitur reminder kami.
                </p>
                <div className="my-5">
                  <a href="#" className="btn-costum arrow-wrapper">
                    LEARN MORE
                    <i className="fa fa-arrow-right arrow-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tabrakan-info">
          <div className="col-xl-6 col-lg-8 col-md-9 col-sm-10 col-11 mx-auto py-5 my-5">
            <h1>
              <span className="txt1">apakah anda tahu: </span>{" "}
              <span className="txt2 mt-2">
                Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP
                kepada orang yang ditabrak
              </span>
            </h1>
          </div>
        </section>
        <section>
          <div className="col-md-8 col-xl-6 col-lg-3 col-sm-8  col-11 mx-auto text-center">
            <h1>Love Reading, Keep Reading</h1>
            <p className="my-5 small">
              Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.
            </p>
          </div>
        </section>

        <section className="blog-content ">
          <div className="row justify-content-center mx-5">
            <div className="container col-sm-3 col-md-3 col-lg-3 col-xl-3 shadow shadow bg-whitex roundedcost mb-4  p-4">
              <button className="blog-btn">Blog</button>
              <p>
                <span className="title">Konser Semasa Covid 19, Boleh?</span>
                <span className="time-1">6/15/2020 8:34:06</span>
              </p>
              <div className="mt-4">
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
            <div className="container col-sm-3 col-md-3 col-lg-3 col-xl-3 shadow shadow bg-whitex roundedcost mb-4  p-4">
              <button className="blog-btn">Blog</button>
              <p>
                <span className="title">
                  Instansi Pemerintah yang Tetap Buka semasa COVID 19
                </span>
                <span className="time-1">6/14/2020, 8:11:02 PM</span>
              </p>
              <div className="mt-4">
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
            <div className="container col-sm-3 col-md-3 col-lg-3 col-xl-3 shadow shadow bg-whitex roundedcost mb-4  p-4">
              <button className="blog-btn">Blog</button>
              <p>
                <span className="title">Kegiataan Keagamaan Selama PSBB</span>
                <span className="time-1">6/11/2020, 12:53:23 PM</span>
              </p>
              <div className="mt-4">
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr className="mx-auto my-5" />
        <section className="question text-center">
          <div className="container col-xl-6">
            <h1>Have a question?</h1>
            <div className="row my-5 justify-content-around">
              <div className="containercostum p-5 col-xl-5 col-sm-5 col-md-5 col-lg-5 ">
                <div className="cost-bg rounded-circle mx-auto">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="text-qst">
                  <h1>info@hakita.com</h1>
                </div>
              </div>
              <div className="containercostum col-sm-5 col-md-5 col-lg-5 col-xl-5 px-5 pt-5 pb-1 ">
                <div className="cost-bg rounded-circle mx-auto">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text-qst">
                  <h1>
                    Jl. Boulevard Barat Raya No. 27,
                    <br /> Kelapa Gading Barat,
                    <br /> Jakarta Utara
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Homepage;

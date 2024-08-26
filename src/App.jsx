import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Porto - Fauzan Hasyim</title>
      <link rel="stylesheet" href="assets/css/tailwind.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center justify-between mb-40">
            <img src="assets/image/navbar-logo.png" alt="Logo" />
            <a target='_blank' href="https://blog.evandaru.site">
              <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                My Blog
              </button>
            </a>
          </nav>
          <div className="text-center">
            <div className="flex justify-center mb-16">
              <img className='rounded-full' src="https://www.evandaru.site/photo.jpg" alt="Image" />
            </div>
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              Fauzan Hasyim
            </h6>
            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Fullstack Developer
            </h1>
            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
              I have a passion for software. I enjoy creating tools that make life
              easier for people.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center flex flex-row ">
            <h1 className="font-medium pr-36 text-gray-700 text-4xl md:text-5xl mb-5">
              Tentang Saya
            </h1>
            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
              Halo, saya Fauzan Hasyim, seorang pengembang web junior yang antusias dalam mengubah ide menjadi situs web yang menarik dan fungsional. Saya suka menulis kode yang rapi dan membuat desain yang presisi. Mari kita bekerja sama dan menciptakan sesuatu yang luar biasa!
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="activity" />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Developers
              </h4>
              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis impedit commodi fuga nemo. Est ducimus omnis at aut illum.
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="codesandbox" />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Designer
              </h4>
              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, possimus repudiandae hic debitis mollitia distinctio officiis incidunt deleniti quaerat!
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="coffee" />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Admin
              </h4>
              <p className="font-normal text-gray-500 text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque velit vitae animi impedit quisquam fugiat quia et id itaque autem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Portfolio
              </h1>
              <p className="font-normal text-gray-500 text-xs md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corrupti.
              </p>
            </div>
            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5" />
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    <a href="https://ai-lele.vercel.app/">
                      Chat Gpt - Gemini 1.5 Pro
                    </a>
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Sebuah generator API dummy data yang terdokumentasi, gratis untuk digunakan, untuk memudahkan proses pengujian bagian front-end proyek.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5" />
                <div>
                  <a href="https://t.me/lelee2_bot">
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                      Bot Telegram - Groq - CRUD
                    </h1>
                  </a>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Bot Telegram yang memungkinkan pengguna untuk melakukan operasi CRUD langsung dari chat, membantu mempercepat workflow.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5" />
                <div>
                  <a href="https://donatur.vercel.app/">
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                      Donation WEB - Notion Database
                    </h1>
                  </a>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Aplikasi web untuk pengelolaan donasi yang terintegrasi dengan Notion sebagai basis datanya, memudahkan pelaporan dan manajemen dana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Di bawah ini adalah ringkasan tempat-tempat saya belajar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2016 – 2018
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4">
                Sekolah Menengah Pertama
              </p>
              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  SMP Kebakkramat
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2019 – 2021
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4">
                Sekolah Menengah Atas
              </p>
              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  SMAN Kebakkramat
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2021 – now
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4">
                SI - Teknik Informatika
              </p>
              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  Universitas Duta Bangsa Surakarta
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Experience
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Di bawah ini adalah ringkasan tempat saya bekerja
          </p>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Company
              </h6>
              <p className="font-semibold text-gray-600 text-base">
                PT. Permata Ilmu{" "}
                <span className="font-normal text-gray-300">/ Karanganyar</span>
              </p>
              <p className="font-semibold text-gray-600 text-base">
                Binaqu Academy{" "}
                <span className="font-normal text-gray-300">/ Palangkaraya</span>
              </p>
              <p className="font-semibold text-gray-600 text-base">
                Kursus Bahasa Arab Al Muyassar{" "}
                <span className="font-normal text-gray-300">/ Palembang</span>
              </p>
            </div>
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Position
              </h6>
              <p className="font-normal text-gray-400 text-base">
                Admin
              </p>
              <p className="font-normal text-gray-400 text-base">
                Designer
              </p>
              <p className="font-normal text-gray-400 text-base">
                Designer
              </p>
            </div>
            <div className="space-y-8 md:space-y-16">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Year
              </h6>
              <p className="font-normal text-gray-400 text-base">2024 - now</p>
              <p className="font-normal text-gray-400 text-base">2020 - now</p>
              <p className="font-normal text-gray-400 text-base">2020 - 2021</p>

            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Testimonial
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
            Berikut adalah testimoni dari klien dan rekan kerja saya
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                "Fauzan adalah seorang profesional yang sangat berbakat. Dia selalu mampu menyelesaikan proyek dengan cepat dan dengan hasil yang luar biasa."
              </p>
              <h6 className="font-semibold text-gray-500 text-md">
                Stephan Clark{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CEO at EarlyBird
                </span>
              </h6>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                "Kolaborasi dengan Fauzan selalu menyenangkan. Dia memiliki keahlian yang mendalam di bidangnya dan selalu memberikan kontribusi yang berharga."
              </p>
              <h6 className="font-semibold text-gray-500 text-md">
                Sarah Lee{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - Project Manager at TechCorp
                </span>
              </h6>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                "Saya sangat merekomendasikan Fauzan untuk proyek apa pun yang membutuhkan pengembangan web. Keterampilan dan profesionalismenya tak tertandingi."
              </p>
              <h6 className="font-semibold text-gray-500 text-md">
                Michael Brown{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - CTO at DevSolutions
                </span>
              </h6>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App

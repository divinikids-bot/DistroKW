"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-12 px-6 lg:px-24 pt-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg text-gray-300">
            Ada pertanyaan atau komentar? Cukup tulis pesan kepada kami!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-green-800 text-white rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Informasi Kontak</h2>
              <p className="mb-6">
                Jika Anda mempunyai pertanyaan atau kekhawatiran, Anda dapat
                menghubungi kami dengan mengisi formulir kontak, menelepon kami,
                datang ke kantor kami, menemukan kami di jejaring sosial lain,
                atau Anda dapat mengirim email pribadi kepada kami di:
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span>0812-3456-7890</span>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📧</span>
                  <span>divine@clothing.com</span>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <p>
                      Gedung Sinarmas, Lantai 12A
                    </p>
                    <p>
                    Jl. Jenderal Sudirman No.21,RT.10/RW.1, Kuningan
                    </p>
                    <p>
                    Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 relative w-full h-40">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-700 opacity-30 rounded-full"></div>
            </div>
          </div>

          <div className="rounded-xl p-8 border bg-white items-center border-gray-200 shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white py-3 px-6 rounded-full font-bold transition duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// File: src/components/koperasi/RencanaKerja.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import pengurus1 from "@/images/profil-dewan/saut-marpaung.jpg";
import pengurus2 from "@/images/pengurus-koperasi/muhammad-mansur.jpg";
import pengurus3 from "@/images/profil-dewan/iwan-chandra-budiman.jpg";
import pengurus4 from "@/images/pengurus-koperasi/h-siswadi.jpg";
import petaSebaran from "@/images/Sebaran_Anggota_APSI_7.jpg";
export default function RencanaKerja(){
  const pengurusData=[
    { img: pengurus1, name: "SAUT MARPAUNG", role: "PENGAWAS" },
    { img: pengurus2, name: "MUHAMMAD MANSUR", role: "KETUA" },
    { img: pengurus3, name: "IWAN CANDRA BUDIMAN", role: "SEKRETARIS" },
    { img: pengurus4, name: "H. SISWADI", role: "BENDAHARA" }
  ];
  return(
    <section id="rencana-kerja" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 space-y-16">
        <motion.div initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:1 }} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0]">RENCANA KERJA PENGURUS KOPERASI</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">APSI JAYA MANDIRI (AJM) TAHUN BUKU 2023</h3>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">I. PENDAHULUAN</h3>
          <p className="text-gray-700 leading-relaxed">
            Koperasi sebagai lembaga ekonomi dan keuangan yang disusun bersama berdasarkan asas kekeluargaan, bukan berarti mengikuti kehendak para anggota secara mentah-mentah, melainkan dengan aturan yang disepakati dalam Anggaran Dasar dan Anggaran Rumah Tangga. Kesepakatan ini tercapai saat RAT, sehingga kehadiran 100% anggota sangat penting untuk memberikan saran dan masukan positif guna memajukan koperasi.
          </p>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.2 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">II. ORGANISASI, MANAJEMEN, DAN PENDIDIKAN</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F]">A. Organisasi dan Manajemen</h4>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Pengurus dan Pengawas</li>
                <li>Keanggotaan</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F]">B. Bidang Pendidikan</h4>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Studi banding kepada koperasi yang lebih maju dalam permodalan dan pendapatan.</li>
                <li>Pengembangan konsep pengelolaan koperasi berbasis teknologi terkini.</li>
                <li>Pelatihan akuntansi pengelolaan koperasi resmi oleh kemenkop.</li>
                <li>Pelatihan daur ulang bersama DPP APSI.</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.4 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">III. PERMODALAN, BIDANG USAHA, DAN RAPB TAHUN 2023</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F]">A. Bidang Permodalan</h4>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Simpanan wajib anggota Rp 50.000 per bulan.</li>
                <li>Simpanan pokok Rp 100.000,-</li>
                <li>Simpanan sukarela dengan pembelian saham/lembar Rp 250.000</li>
                <li>Sumbangan/Dana lainnya</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F]">B. Bidang Usaha Penjualan Bahan Baku Daur Ulang</h4>
              <p className="text-gray-700">
                Fokus pada penjualan bahan baku daur ulang milik anggota melalui:
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>MOU dengan pabrik untuk mendapatkan harga terbaik (selisih Rp200-500 per item).</li>
                <li>MOU dengan supplier besar berdasarkan asas kekeluargaan.</li>
                <li>Pengiriman dengan konfirmasi dan surat jalan.</li>
                <li>Transfer ke rekening anggota setelah penerimaan nota dari pabrik.</li>
                <li>Fee dari selisih harga jual tanpa mengurangi harga dasar.</li>
                <li>Fee maksimal Rp500/kg, dengan pembagian antara anggota dan kas koperasi.</li>
                <li>Pengiriman disesuaikan dengan wilayah operasional anggota.</li>
                <li>Ekspansi ke bahan daur ulang selain HD.</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.6 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">PENGURUS DAN PENGAWAS KOPERASI</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pengurusData.map((item,i)=>(
              <motion.div key={i} whileHover={{ scale:1.05 }} transition={{ type:"spring", stiffness:300 }} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-60">
                  <Image src={item.img} alt={item.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw"/>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-[#2EA4E0]">{item.name}</h4>
                  <p className="text-sm text-[#8DC43F]">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.8 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">ANGGOTA KOPERASI</h3>
          <p className="text-gray-700">
            Target tahun 2023: 500 anggota dari seluruh wilayah Indonesia.
          </p>
          <div className="mt-6 relative h-64 rounded-2xl overflow-hidden shadow-2xl">
            <Image src={petaSebaran} alt="Peta Sebaran Anggota" fill className="object-cover" placeholder="blur" sizes="100vw"/>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:1 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">LAPORAN KOPERASI</h3>
          <div className="space-y-8 overflow-x-auto">
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F] mb-2">Modal Awal</h4>
              <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
                    <th className="border px-2 py-1">No</th>
                    <th className="border px-2 py-1">Uraian</th>
                    <th className="border px-2 py-1">Volume</th>
                    <th className="border px-2 py-1">Satuan</th>
                    <th className="border px-2 py-1">Bulan/Keg</th>
                    <th className="border px-2 py-1">Jumlah (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">1.1</td>
                    <td className="border px-2 py-1">Simpanan Wajib</td>
                    <td className="border px-2 py-1">200</td>
                    <td className="border px-2 py-1">Anggota</td>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">120.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">1.2</td>
                    <td className="border px-2 py-1">Simpanan Pokok</td>
                    <td className="border px-2 py-1">200</td>
                    <td className="border px-2 py-1">Anggota</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">20.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">1.3</td>
                    <td className="border px-2 py-1">Simpanan Sukarela</td>
                    <td className="border px-2 py-1">3.000</td>
                    <td className="border px-2 py-1">Lembar</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">750.000.000</td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="border px-2 py-1 font-bold">JUMLAH</td>
                    <td className="border px-2 py-1 font-bold">890.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F] mb-2">Pendapatan</h4>
              <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
                    <th className="border px-2 py-1">No</th>
                    <th className="border px-2 py-1">Uraian</th>
                    <th className="border px-2 py-1">Volume</th>
                    <th className="border px-2 py-1">Satuan</th>
                    <th className="border px-2 py-1">Bulan/Keg</th>
                    <th className="border px-2 py-1">Jumlah (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">2.1</td>
                    <td className="border px-2 py-1">Fee Transaksi Anggota</td>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1"></td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">2.1</td>
                    <td className="border px-2 py-1">PET</td>
                    <td className="border px-2 py-1">125.000</td>
                    <td className="border px-2 py-1">KG</td>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">300.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">2.1</td>
                    <td className="border px-2 py-1">HD dan Lainnya</td>
                    <td className="border px-2 py-1">100.000</td>
                    <td className="border px-2 py-1">KG</td>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">360.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">2.2</td>
                    <td className="border px-2 py-1">Penjualan Merchandise APSI</td>
                    <td className="border px-2 py-1">500</td>
                    <td className="border px-2 py-1">PCS</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">15.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">2.2</td>
                    <td className="border px-2 py-1">Penjualan Seragam APSI</td>
                    <td className="border px-2 py-1">50</td>
                    <td className="border px-2 py-1">PCS</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">8.750.000</td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="border px-2 py-1 font-bold">JUMLAH</td>
                    <td className="border px-2 py-1 font-bold">683.750.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F] mb-2">Pengeluaran</h4>
              <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
                    <th className="border px-2 py-1">No</th>
                    <th className="border px-2 py-1">Uraian</th>
                    <th className="border px-2 py-1">Volume</th>
                    <th className="border px-2 py-1">Satuan</th>
                    <th className="border px-2 py-1">Bulan/Keg</th>
                    <th className="border px-2 py-1">Jumlah (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">3.1</td>
                    <td className="border px-2 py-1">Biaya Operasional</td>
                    <td className="border px-2 py-1">2</td>
                    <td className="border px-2 py-1">Orang</td>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">24.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.2</td>
                    <td className="border px-2 py-1">Pembuatan Seragam APSI</td>
                    <td className="border px-2 py-1">50</td>
                    <td className="border px-2 py-1">PCS</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">7.500.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.3</td>
                    <td className="border px-2 py-1">Pembuatan Merchandise APSI</td>
                    <td className="border px-2 py-1">500</td>
                    <td className="border px-2 py-1">KG</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">7.500.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.4</td>
                    <td className="border px-2 py-1">Honor Admin</td>
                    <td className="border px-2 py-1">2</td>
                    <td className="border px-2 py-1">Orang</td>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">60.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.5</td>
                    <td className="border px-2 py-1">Biaya RAT</td>
                    <td className="border px-2 py-1">200</td>
                    <td className="border px-2 py-1">Orang</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">100.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.6</td>
                    <td className="border px-2 py-1">ATK (Printer, Kertas, Tinta, dll)</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">Set</td>
                    <td className="border px-2 py-1">2</td>
                    <td className="border px-2 py-1">7.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.7</td>
                    <td className="border px-2 py-1">Biaya Penyusutan Inventaris</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">Set</td>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">12.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3.8</td>
                    <td className="border px-2 py-1">Beban Umum</td>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">Keg</td>
                    <td className="border px-2 py-1">2</td>
                    <td className="border px-2 py-1">2.000.000</td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="border px-2 py-1 font-bold">JUMLAH</td>
                    <td className="border px-2 py-1 font-bold">220.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F] mb-2">SISA HASIL USAHA (SHU)</h4>
              <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">Jumlah Pengeluaran</td>
                    <td className="border px-2 py-1">220.000.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Jumlah Pemasukan</td>
                    <td className="border px-2 py-1">683.750.000</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1 font-bold">Sisa Hasil Usaha</td>
                    <td className="border px-2 py-1 font-bold">463.750.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#8DC43F] mb-2">PERSENTASE SHU</h4>
              <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">Jasa Modal</td>
                    <td className="border px-2 py-1">50%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Jasa Usaha</td>
                    <td className="border px-2 py-1">30%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Dana Sosial</td>
                    <td className="border px-2 py-1">2%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Dana Pendidikan</td>
                    <td className="border px-2 py-1">2%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Dana Pengembangan Organisasi</td>
                    <td className="border px-2 py-1">4%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Simpanan Tahun Selanjutnya</td>
                    <td className="border px-2 py-1">2%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Honor Pengurus</td>
                    <td className="border px-2 py-1">10%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1 font-bold">JUMLAH</td>
                    <td className="border px-2 py-1 font-bold">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:1.2 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">TARGET 2023</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
                  <th className="border px-2 py-1">Task</th>
                  <th className="border px-2 py-1">Uraian</th>
                  <th className="border px-2 py-1">Satuan</th>
                  <th className="border px-2 py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">1</td>
                  <td className="border px-2 py-1">HD Tutup & Lainnya</td>
                  <td className="border px-2 py-1">Ton</td>
                  <td className="border px-2 py-1">100</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2</td>
                  <td className="border px-2 py-1">PET</td>
                  <td className="border px-2 py-1">Ton</td>
                  <td className="border px-2 py-1">125</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">3</td>
                  <td className="border px-2 py-1">Bahan Lainnya</td>
                  <td className="border px-2 py-1">Ton</td>
                  <td className="border px-2 py-1">200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:1.4 }} className="p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-[#2EA4E0] mb-4">PROJECT UPDATES (JANUARI - DESEMBER)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white">
                  <th className="border px-2 py-1">Task</th>
                  <th className="border px-2 py-1">Uraian</th>
                  <th className="border px-2 py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">1</td>
                  <td className="border px-2 py-1">Permodalan</td>
                  <td className="border px-2 py-1">100%</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2</td>
                  <td className="border px-2 py-1">Pendidikan & Pelatihan</td>
                  <td className="border px-2 py-1">80%</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">3</td>
                  <td className="border px-2 py-1">Usaha</td>
                  <td className="border px-2 py-1">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

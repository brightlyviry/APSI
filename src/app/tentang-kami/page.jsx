"use client";
import React from "react";
import SectionNav from "@/components/tentang/SectionNav";
import Hero from "@/components/tentang/Hero";
import MaksudDanTujuan from "@/components/tentang/MaksudDanTujuan";
import YangKamiLakukan from "@/components/tentang/YangKamiLakukan";
import LokasiSebaran from "@/components/tentang/LokasiSebaran";
import DewanPengurus from "@/components/tentang/DewanPengurus";
import AnggotaAPSI from "@/components/tentang/AnggotaAPSI";
import ProgramKerja from "@/components/tentang/ProgramKerja";

export default function TentangKamiPage() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden scroll-smooth">
      
      <Hero />
      <SectionNav />
      <MaksudDanTujuan />
      <YangKamiLakukan />
      <LokasiSebaran />
      <DewanPengurus />
      <AnggotaAPSI />
      <ProgramKerja />
    </div>
  );
}

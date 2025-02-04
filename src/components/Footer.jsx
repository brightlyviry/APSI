"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/images/logo_APSI.png";

const Footer = () => {
  const offices = [
    {
      title: "Kantor Sekretariat 1",
      address: "RUKO GREEN GARDEN BLOK A14 NO.36, Kel. Kedoya Utara, Kec. Kebon Jeruk, Kota Adm. Jakarta Barat, Prov. DKI Jakarta",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d507743.19087339746!2d106.762698!3d-6.165071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b10eed09a9%3A0xad75fd8aa842bd6d!2sGaruda%20perkasa%20putra%20angkasa%2C%20PT!5e0!3m2!1sen!2sus!4v1738379949509!5m2!1sen!2sus"
    },
    {
      title: "Kantor Sekretariat 2",
      address: "RT.06/RW.IV Dsn Tambakrejo, Ds. Tambakrejo Kec. Kraton, Kabupaten Pasuruan, Prov. Jawa Timur",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506191.0367035643!2d112.875168!3d-7.616535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c5ad9bafaea5%3A0xfe94afc04e88b88f!2sTambakrejo%2C%20Kraton%2C%20Pasuruan%20Regency%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1738380103740!5m2!1sen!2sus"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0a1a2f] to-[#1a3b5d] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="space-y-4">
            <Image 
              src={logo} 
              alt="APSI Logo" 
              width={200} 
              height={80} 
              className="filter brightness-0 invert"
            />
            <div className="h-px bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] w-1/2"/>
          </div>

          {offices.map((office, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] bg-clip-text text-transparent">
                {office.title}
              </h3>
              <p className="text-sm leading-relaxed">{office.address}</p>
              <motion.div 
                className="aspect-video rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <iframe 
                  src={office.map}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <div className="flex justify-center space-x-6 mb-4">
            {['Facebook', 'Twitter', 'Instagram'].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                className="hover:text-[#8DC43F] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} APSI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
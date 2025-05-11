"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Calendar, Heart, School } from "lucide-react";

const values = [
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "コミュニティ",
    description: "父親同士のつながりを深め、互いに支え合う環境を作ります。",
  },
  {
    icon: <Calendar className="h-8 w-8 text-accent" />,
    title: "参加しやすさ",
    description: "忙しい父親でも気軽に参加できる活動を心がけています。",
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "子どもの成長",
    description: "子どもたちの健全な成長を促す活動を企画・実施します。",
  },
  {
    icon: <School className="h-8 w-8 text-accent" />,
    title: "学校支援",
    description: "高洲北小学校の教育活動をサポートしています。",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-bg-surface">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block relative">
            高北おやじの会について
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-muted">
            多くの子供たちと触れ合いながら高北のイベント活動を下支えすることで、おやじ同士の絆が広がり、子供たちの健全育成に繋がることを期待しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/8424630/pexels-photo-8424630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="高北おやじの会の活動の様子"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">
              私たちの活動理念
            </h3>
            <p className="mb-6 text-text-muted">
              「子どもたちに多様な経験を」を合言葉に、普段の生活では体験できない貴重な経験を提供することを目指しています。
              父親ならではの視点と経験を活かし、子どもたちの好奇心と創造性を育みます。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4 bg-bg-base hover:border-accent transition-colors duration-300"
                >
                  <div className="mb-3">{value.icon}</div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Calendar, Heart, School } from "lucide-react";

const values = [
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "子どもたちとの触れ合い",
    description:
      "イベント活動を通じて、子どもたちと楽しく交流し、健全な成長をサポートします。",
  },
  {
    icon: <Calendar className="h-8 w-8 text-accent" />,
    title: "おやじ同士の絆",
    description:
      "活動を通じておやじ同士の交流を深め、互いに支え合う関係を築きます。",
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "楽しむこと",
    description:
      "おやじたち自身もしっかり楽しむことができる会です。できる時に、できることを楽しむ！",
  },
  {
    icon: <School className="h-8 w-8 text-accent" />,
    title: "活動の実績",
    description: "スキー、釣り、BBQなど、様々な活動を実現してきました。",
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
            私たちについて
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-muted">
            高洲北小学校に通う児童のおやじからなるゆるい集まりです。平成22年（2010年）に設立されました。
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
                src="https://images.pexels.com/photos/5637689/pexels-photo-5637689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="高北おやじの会のメンバー"
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
              おやじの会とは
            </h3>
            <p className="mb-6 text-text-muted">
              多くの子供たちと触れ合いながら高洲北のイベント活動を下支えすることで、おやじ同士の絆が広がり、子供たちの健全育成に繋がることを期待しています。
              おやじたちのやりたいこと（子供たちが喜ぶこと）をどんどん提案いただき、実現することも可能です。
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

"use client";

import { motion } from 'framer-motion';
import { Calendar, Flame, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const activities = [
  {
    title: '夏祭り',
    description: 'お子さんと一緒に盆踊りや屋台を楽しめる夏の恒例イベント。',
    image: 'https://images.pexels.com/photos/5638792/pexels-photo-5638792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <Flame className="h-6 w-6" />,
    date: '7月下旬',
  },
  {
    title: 'スポーツ大会',
    description: '親子で参加できる運動会。チーム対抗戦で絆を深めます。',
    image: 'https://images.pexels.com/photos/8523389/pexels-photo-8523389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <Users className="h-6 w-6" />,
    date: '10月中旬',
  },
  {
    title: '料理教室',
    description: 'お父さんと子どもで作る料理教室。家庭での食育を促進します。',
    image: 'https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <Calendar className="h-6 w-6" />,
    date: '年4回開催',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-bg-base">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block relative">
            主な活動内容
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-muted">
            高北おやじの会では、季節ごとにさまざまなイベントを企画・運営しています。
            父親と子どもが一緒に楽しめる活動を通じて、絆を深める機会を提供しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-accent rounded-full p-2 inline-block mb-2">
                    {activity.icon}
                  </div>
                  <p className="text-sm font-medium">{activity.date}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-text-muted mb-4">{activity.description}</p>
                <Link 
                  href={`/activities#${activity.title}`} 
                  className="text-accent font-medium hover:underline inline-flex items-center"
                >
                  詳細を見る
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/activities" className="btn-primary">
            すべての活動を見る
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
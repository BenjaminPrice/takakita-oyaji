import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin } from 'lucide-react';

const activities = [
  {
    id: 'summer-festival',
    title: '夏祭り',
    date: '7月下旬',
    location: '高洲北小学校 校庭',
    time: '16:00〜20:00',
    description: '毎年恒例の夏祭りでは、子どもたちと一緒に盆踊りや屋台を楽しみます。高北おやじの会は、会場設営や屋台の運営、後片付けなどを担当します。地域の方々も多数参加する大イベントです。',
    image: 'https://images.pexels.com/photos/5638792/pexels-photo-5638792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'sports-day',
    title: 'スポーツ大会',
    date: '10月中旬',
    location: '高洲北小学校 体育館・校庭',
    time: '9:00〜15:00',
    description: '親子で参加できる運動会形式のイベントです。チーム対抗戦で玉入れや綱引き、リレーなどを行い、親子の絆を深めます。競技だけでなく、協力することの大切さも学べる機会となっています。',
    image: 'https://images.pexels.com/photos/8523389/pexels-photo-8523389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'cooking-class',
    title: '料理教室',
    date: '年4回開催（6月、9月、12月、3月）',
    location: '高洲北小学校 家庭科室',
    time: '10:00〜13:00',
    description: 'お父さんと子どもで一緒に料理を作る教室です。季節の食材を使った料理を学び、家庭での食育を促進します。作った料理は参加者全員で会食し、コミュニケーションの場にもなっています。',
    image: 'https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'camping',
    title: 'キャンプ体験',
    date: '5月連休',
    location: '千葉県内キャンプ場',
    time: '1泊2日',
    description: '春の連休を利用した1泊2日のキャンプ体験です。テント設営やアウトドアクッキングなど、自然の中での生活を体験します。夜には星空観察や肝試しなど、子どもたちが楽しめるプログラムも用意しています。',
    image: 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'winter-event',
    title: '冬のイベント',
    date: '12月中旬',
    location: '高洲北小学校 体育館',
    time: '13:00〜16:00',
    description: 'クリスマスシーズンに合わせた工作教室や、お楽しみ会を開催します。親子でクリスマスリースやオーナメントを作ったり、ゲーム大会を楽しんだりします。最後はサンタクロースからのプレゼントも！',
    image: 'https://images.pexels.com/photos/1556679/pexels-photo-1556679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'field-trip',
    title: '社会科見学',
    date: '2月',
    location: '千葉県内または東京都内の施設',
    time: '9:00〜16:00',
    description: '工場や科学館など、教育的な施設への見学ツアーを企画しています。普段見ることのできない施設の内部を見学し、子どもたちの知的好奇心を刺激します。バスをチャーターしての遠足形式で実施します。',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function ActivitiesPage() {
  return (
    <div className="pt-24 pb-16 bg-bg-base">
      <div className="container-section">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-accent">活動内容</h1>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            高北おやじの会では、年間を通じてさまざまな活動を行っています。
            子どもたちと一緒に楽しみながら、貴重な経験を提供しています。
          </p>
        </div>

        <div className="space-y-16">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              id={activity.id}
              className="bg-bg-surface rounded-lg shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={`p-6 order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-2xl font-bold mb-4">{activity.title}</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-text-muted mb-6">
                    {activity.description}
                  </p>
                  
                  <Link 
                    href="/contact" 
                    className="inline-block bg-primary text-text-main font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    参加について問い合わせる
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-lg p-6 md:p-8 inline-block">
            <h2 className="text-2xl font-bold mb-4 text-accent">活動に参加するには</h2>
            <p className="mb-4 text-text-muted">
              高北おやじの会の活動は、原則として会員のお子さんが参加できますが、
              一部のイベントは地域の子どもたちにも開放しています。
            </p>
            <p className="mb-6 text-text-muted">
              入会やイベント参加に関するお問い合わせは、下記からお願いします。
            </p>
            <Link 
              href="/contact" 
              className="btn-secondary"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
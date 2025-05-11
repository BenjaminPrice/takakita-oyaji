"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: '名前は2文字以上入力してください' }),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: '件名を入力してください' }),
  message: z.string().min(10, { message: 'メッセージは10文字以上入力してください' }),
  memberType: z.enum(['current', 'interested', 'other'], {
    invalid_type_error: '選択してください',
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      memberType: 'other',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-16 bg-bg-base">
      <div className="container-section">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-accent">お問い合わせ</h1>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            高北おやじの会への入会希望や活動に関するお問い合わせは、こちらのフォームからお願いします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-bg-surface p-6 md:p-8 rounded-lg shadow-md"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-accent/10 text-accent p-6 rounded-lg mb-6">
                    <p className="font-bold text-xl mb-2">送信完了</p>
                    <p>お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    新しいお問い合わせ
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="山田 太郎"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="example@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-1">
                        電話番号
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="090-1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-1">
                        件名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        {...register('subject')}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="お問い合わせの件名"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text-muted mb-1">
                      会員種別 <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <input
                          id="member-current"
                          type="radio"
                          value="current"
                          {...register('memberType')}
                          className="h-4 w-4 text-accent focus:ring-accent"
                        />
                        <label htmlFor="member-current" className="ml-2 block text-text-muted">
                          現会員
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="member-interested"
                          type="radio"
                          value="interested"
                          {...register('memberType')}
                          className="h-4 w-4 text-accent focus:ring-accent"
                        />
                        <label htmlFor="member-interested" className="ml-2 block text-text-muted">
                          入会希望
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="member-other"
                          type="radio"
                          value="other"
                          {...register('memberType')}
                          className="h-4 w-4 text-accent focus:ring-accent"
                        />
                        <label htmlFor="member-other" className="ml-2 block text-text-muted">
                          その他
                        </label>
                      </div>
                    </div>
                    {errors.memberType && (
                      <p className="mt-1 text-sm text-red-500">{errors.memberType.message}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="お問い合わせ内容をご記入ください"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-secondary w-full md:w-auto flex items-center justify-center mx-auto"
                    >
                      {isSubmitting ? (
                        <span>送信中...</span>
                      ) : (
                        <>
                          <span>送信する</span>
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          <div className="bg-accent text-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">連絡先情報</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-1">住所</h3>
                <p>〒279-0023</p>
                <p>千葉県浦安市高洲北小学校内</p>
                <p>高北おやじの会</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">電話番号</h3>
                <p>047-123-4567（代表：鈴木）</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">メールアドレス</h3>
                <p>info@takakita-oyaji.jp</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">活動日</h3>
                <p>毎月第3土曜日（定例会）</p>
                <p>その他、イベントに合わせて活動</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
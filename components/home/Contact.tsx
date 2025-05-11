"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: '名前は2文字以上入力してください' }),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  message: z.string().min(10, { message: 'メッセージは10文字以上入力してください' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
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
    <section id="contact" className="py-20 bg-primary">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block relative text-text-main">
            お問い合わせ
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-muted">
            高北おやじの会への参加希望やお問い合わせは、こちらのフォームからお気軽にどうぞ。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-bg-surface p-8 rounded-lg shadow-xl"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-accent/10 text-accent p-4 rounded-lg mb-4">
                  <p className="font-bold text-lg">送信完了</p>
                  <p>お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。</p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
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

                <div className="mb-6">
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
                    className="btn-secondary w-full md:w-auto flex items-center justify-center"
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
          </motion.form>
        </div>
      </div>
    </section>
  );
}
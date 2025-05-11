"use client";

import { Send } from "lucide-react";

export default function ContactPage() {
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
            <div className="bg-bg-surface p-6 md:p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-6 text-accent">
                お問い合わせフォーム
              </h2>
              <p className="mb-8 text-text-muted">
                以下のGoogleフォームからお問い合わせください。入会希望の方もこちらからご連絡いただけます。
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdV14JuNHRqraHKNjj9OM5N-VR4M5ps44N06tsiPUdOVe4llw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <span>お問い合わせフォームを開く</span>
                <Send className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-accent text-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">
              連絡先情報
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-1">メールアドレス</h3>
                <p>info@takakita-oyaji.jp</p>
              </div>

              <div>
                <h3 className="font-bold mb-1">入会について</h3>
                <p>入会費用はかかりません。</p>
                <p>
                  入会いただきますと、おやじの会の連絡メールが届くようになります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

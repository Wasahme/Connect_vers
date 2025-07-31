import Link from 'next/link';
import { ArrowLeft, Users, MessageCircle, Sparkles, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">ConnectVerse</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                حول المنصة
              </Link>
              <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                الميزات
              </Link>
              <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                تسجيل الدخول
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🌟 مرحباً بك في{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ConnectVerse
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            منصة الشبكة الاجتماعية المتطورة التي تجمع بين أحدث التقنيات والذكاء الاصطناعي
            <br />
            لتوفير تجربة تفاعلية استثنائية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
            >
              ابدأ رحلتك الآن
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              جرب المنصة
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">شبكة اجتماعية ذكية</h3>
              <p className="text-gray-600 text-sm">
                تواصل مع الأصدقاء واكتشف مجتمعات جديدة بطريقة ذكية ومبتكرة
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ذكاء اصطناعي متقدم</h3>
              <p className="text-gray-600 text-sm">
                مساعد شخصي ذكي وإنشاء محتوى بالذكاء الاصطناعي
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">تواصل متطور</h3>
              <p className="text-gray-600 text-sm">
                رسائل ذكية مع ترجمة فورية ومكالمات عالية الجودة
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">عالمي ومحلي</h3>
              <p className="text-gray-600 text-sm">
                دعم متعدد اللغات مع تركيز على المحتوى العربي
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
                <div className="text-gray-600">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600">دولة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
                <div className="text-gray-600">منشور يومياً</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">وقت التشغيل</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold">ConnectVerse</span>
            </div>
            <p className="text-gray-400 mb-4">
              منصة الشبكة الاجتماعية المتطورة - صُنع بـ ❤️ من قبل فريق ConnectVerse
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                الشروط
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
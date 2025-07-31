# 🤝 دليل المساهمة في ConnectVerse | Contributing Guide

مرحباً بك في مجتمع ConnectVerse! نحن نقدر مساهمتك ونريد أن نجعل عملية المساهمة سهلة وممتعة للجميع.

Welcome to the ConnectVerse community! We appreciate your contribution and want to make the contribution process easy and enjoyable for everyone.

## 📋 جدول المحتويات | Table of Contents

- [🎯 كيفية المساهمة](#-كيفية-المساهمة--how-to-contribute)
- [🐛 الإبلاغ عن الأخطاء](#-الإبلاغ-عن-الأخطاء--reporting-bugs)
- [✨ اقتراح ميزات جديدة](#-اقتراح-ميزات-جديدة--suggesting-features)
- [🔧 إعداد بيئة التطوير](#-إعداد-بيئة-التطوير--development-setup)
- [📝 معايير الكود](#-معايير-الكود--code-standards)
- [🧪 الاختبارات](#-الاختبارات--testing)
- [📚 التوثيق](#-التوثيق--documentation)
- [🚀 عملية Pull Request](#-عملية-pull-request--pull-request-process)
- [🏷️ التصنيفات](#️-التصنيفات--labels)
- [👥 المجتمع](#-المجتمع--community)

## 🎯 كيفية المساهمة | How to Contribute

هناك عدة طرق للمساهمة في ConnectVerse:

There are several ways to contribute to ConnectVerse:

### 🐛 الإبلاغ عن الأخطاء | Report Bugs
- ابحث في [Issues](https://github.com/connectverse/connectverse/issues) للتأكد من عدم وجود تقرير مماثل
- استخدم [قالب تقرير الأخطاء](.github/ISSUE_TEMPLATE/bug_report.md)
- قدم معلومات مفصلة وخطوات إعادة الإنتاج

### ✨ اقتراح ميزات جديدة | Suggest New Features
- تحقق من [خارطة الطريق](README.md#-خارطة-الطريق) لمعرفة الميزات المخطط لها
- استخدم [قالب طلب الميزة](.github/ISSUE_TEMPLATE/feature_request.md)
- اشرح الحاجة والفائدة من الميزة المقترحة

### 🔧 تطوير الكود | Code Development
- إصلاح الأخطاء الموجودة
- تطوير ميزات جديدة
- تحسين الأداء
- تحسين التوثيق

### 📚 تحسين التوثيق | Improve Documentation
- إصلاح الأخطاء في التوثيق
- إضافة أمثلة وشروحات
- ترجمة التوثيق
- إنشاء دروس تعليمية

## 🔧 إعداد بيئة التطوير | Development Setup

### 📋 المتطلبات الأساسية | Prerequisites

```bash
# Node.js (20.x أو أحدث)
node --version  # v20.10.0+

# npm (10.x أو أحدث)
npm --version   # 10.2.4+

# Git
git --version  # 2.40.0+

# Docker (اختياري للتطوير المحلي)
docker --version  # 24.0.0+
```

### 🚀 الإعداد السريع | Quick Setup

```bash
# 1. استنساخ المستودع | Clone the repository
git clone https://github.com/connectverse/connectverse.git
cd connectverse

# 2. تثبيت التبعيات | Install dependencies
npm install

# 3. إعداد متغيرات البيئة | Setup environment variables
cp .env.example .env.local
# قم بتحرير .env.local وإضافة قيمك | Edit .env.local and add your values

# 4. تشغيل قواعد البيانات | Start databases
docker-compose up -d postgres redis mongodb

# 5. تشغيل التطبيق | Start the application
npm run dev
```

### 📁 هيكل المشروع | Project Structure

```
connectverse/
├── apps/                    # التطبيقات الرئيسية | Main applications
│   ├── web-client/         # تطبيق الويب | Web application
│   ├── mobile-app/         # التطبيق الجوال | Mobile application
│   └── admin-panel/        # لوحة الإدارة | Admin panel
├── services/               # الخدمات الخلفية | Backend services
├── packages/               # الحزم المشتركة | Shared packages
└── infrastructure/         # البنية التحتية | Infrastructure
```

## 📝 معايير الكود | Code Standards

### 🎨 أسلوب الكود | Code Style

نحن نستخدم المعايير التالية:
We use the following standards:

- **TypeScript** لجميع الكود الجديد | for all new code
- **ESLint** للتحقق من جودة الكود | for code quality
- **Prettier** لتنسيق الكود | for code formatting
- **Conventional Commits** لرسائل الـ commit

### 📏 قواعد التسمية | Naming Conventions

```typescript
// المتغيرات والدوال | Variables and Functions
const userName = 'أحمد';
const getUserProfile = () => {};

// الثوابت | Constants
const API_BASE_URL = 'https://api.connectverse.com';

// المكونات | Components
const UserProfile = () => {};
const ChatMessage = () => {};

// الملفات | Files
user-profile.component.tsx
chat-message.utils.ts
auth.service.ts
```

### 🔧 إعدادات المحرر | Editor Configuration

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 🧪 الاختبارات | Testing

### 🏃‍♂️ تشغيل الاختبارات | Running Tests

```bash
# جميع الاختبارات | All tests
npm run test

# اختبارات الوحدة | Unit tests
npm run test:unit

# اختبارات التكامل | Integration tests
npm run test:integration

# اختبارات E2E | E2E tests
npm run test:e2e

# مع التغطية | With coverage
npm run test:coverage
```

### ✍️ كتابة الاختبارات | Writing Tests

```typescript
// مثال على اختبار وحدة | Unit test example
import { validateEmail } from '../utils/validation';

describe('validateEmail', () => {
  it('should return true for valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('should return false for invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(false);
  });
});
```

### 📊 متطلبات التغطية | Coverage Requirements

- **الوحدات الجديدة**: 80%+ تغطية | 80%+ coverage for new modules
- **الدوال الحرجة**: 100% تغطية | 100% coverage for critical functions
- **المكونات**: اختبار الوظائف الأساسية | Test core functionality

## 📚 التوثيق | Documentation

### 📝 تعليقات الكود | Code Comments

```typescript
/**
 * يقوم بالتحقق من صحة عنوان البريد الإلكتروني
 * Validates an email address
 * 
 * @param email - عنوان البريد الإلكتروني | The email address to validate
 * @returns true إذا كان البريد صحيحاً | true if email is valid
 * 
 * @example
 * ```typescript
 * const isValid = validateEmail('user@example.com');
 * console.log(isValid); // true
 * ```
 */
export const validateEmail = (email: string): boolean => {
  // implementation
};
```

### 📖 تحديث README

عند إضافة ميزات جديدة، تأكد من تحديث:
When adding new features, make sure to update:

- وصف الميزة في README.md | Feature description in README.md
- تعليمات الاستخدام | Usage instructions
- أمثلة الكود | Code examples
- لقطات الشاشة إذا لزم الأمر | Screenshots if necessary

## 🚀 عملية Pull Request | Pull Request Process

### 1️⃣ تحضير الكود | Prepare Your Code

```bash
# إنشاء فرع جديد | Create a new branch
git checkout -b feature/amazing-feature

# إجراء التغييرات | Make your changes
# ...

# التأكد من جودة الكود | Ensure code quality
npm run lint
npm run type-check
npm run test

# إضافة التغييرات | Add changes
git add .
git commit -m "feat: add amazing feature"
```

### 2️⃣ رسائل Commit | Commit Messages

نستخدم [Conventional Commits](https://www.conventionalcommits.org/):
We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# أنواع الرسائل | Commit types
feat: إضافة ميزة جديدة | add new feature
fix: إصلاح خطأ | fix a bug
docs: تحديث التوثيق | update documentation
style: تنسيق الكود | code formatting
refactor: إعادة هيكلة | code refactoring
test: إضافة اختبارات | add tests
chore: مهام صيانة | maintenance tasks

# أمثلة | Examples
feat: add user authentication system
fix: resolve memory leak in chat component
docs: update API documentation
style: format code with prettier
refactor: optimize image loading performance
test: add unit tests for user service
```

### 3️⃣ إرسال Pull Request | Submit Pull Request

1. ادفع الفرع إلى GitHub | Push branch to GitHub
2. أنشئ Pull Request | Create Pull Request
3. استخدم [قالب PR](.github/pull_request_template.md) | Use PR template
4. اربط بالـ Issues ذات الصلة | Link related issues
5. انتظر المراجعة | Wait for review

### 4️⃣ عملية المراجعة | Review Process

- **مراجعة تلقائية**: CI/CD checks | Automated review: CI/CD checks
- **مراجعة الكود**: من قبل المطورين | Code review: by developers
- **اختبار الجودة**: الأداء والأمان | Quality testing: performance and security
- **الموافقة النهائية**: من قبل المشرفين | Final approval: by maintainers

## 🏷️ التصنيفات | Labels

### 🐛 الأخطاء | Bugs
- `bug`: خطأ مؤكد | confirmed bug
- `critical`: خطأ حرج | critical bug
- `regression`: خطأ في إصدار جديد | regression bug

### ✨ الميزات | Features
- `enhancement`: ميزة جديدة | new feature
- `feature-request`: طلب ميزة | feature request
- `breaking-change`: تغيير جذري | breaking change

### 📚 التوثيق | Documentation
- `documentation`: تحسين التوثيق | documentation improvement
- `tutorial`: درس تعليمي | tutorial
- `example`: مثال | example

### 🔧 التطوير | Development
- `refactor`: إعادة هيكلة | refactoring
- `performance`: تحسين الأداء | performance improvement
- `security`: أمان | security
- `accessibility`: إمكانية الوصول | accessibility

### 🎯 الأولوية | Priority
- `priority-high`: أولوية عالية | high priority
- `priority-medium`: أولوية متوسطة | medium priority
- `priority-low`: أولوية منخفضة | low priority

### 📱 المنصات | Platforms
- `web`: تطبيق الويب | web application
- `mobile`: التطبيق الجوال | mobile application
- `ios`: نظام iOS | iOS system
- `android`: نظام Android | Android system
- `api`: واجهة برمجة التطبيقات | API

## 👥 المجتمع | Community

### 💬 قنوات التواصل | Communication Channels

- **GitHub Discussions**: للمناقشات العامة | for general discussions
- **Discord**: [ConnectVerse Community](https://discord.gg/connectverse)
- **Twitter**: [@ConnectVerse](https://twitter.com/connectverse)
- **Email**: developers@connectverse.com

### 🤝 قواعد السلوك | Code of Conduct

نحن ملتزمون بتوفير بيئة ترحيبية وشاملة للجميع:
We are committed to providing a welcoming and inclusive environment for everyone:

- **احترم الآخرين**: تعامل مع الجميع باحترام | Respect others: treat everyone with respect
- **كن صبوراً**: ساعد المبتدئين | Be patient: help beginners
- **كن بناءً**: قدم نقد بناء | Be constructive: provide constructive feedback
- **تجنب السلوك السيء**: لا تسمح بالتنمر أو التحرش | Avoid bad behavior: no bullying or harassment

### 🏆 المساهمون | Contributors

نقدر جميع المساهمين! ستتم إضافة اسمك إلى قائمة المساهمين عند قبول أول مساهمة لك.
We appreciate all contributors! Your name will be added to the contributors list when your first contribution is accepted.

### 🎉 الاعتراف | Recognition

- **شارات GitHub**: للمساهمات المميزة | GitHub badges for outstanding contributions
- **قائمة الشكر**: في README | Thank you list in README
- **مقابلات المجتمع**: للمساهمين النشطين | Community interviews for active contributors

## 🆘 الحصول على المساعدة | Getting Help

إذا كنت بحاجة إلى مساعدة:
If you need help:

1. **اقرأ التوثيق**: [docs.connectverse.com](https://docs.connectverse.com)
2. **ابحث في Issues**: تحقق من المشاكل الموجودة | check existing issues
3. **اسأل في Discord**: انضم للمجتمع | join the community
4. **أنشئ Issue جديد**: للمشاكل الجديدة | for new problems

## 📄 الترخيص | License

بمساهمتك في هذا المشروع، فإنك توافق على أن مساهماتك ستكون مرخصة تحت [رخصة MIT](LICENSE).

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

## 🙏 شكراً لك! | Thank You!

شكراً لك على اهتمامك بالمساهمة في ConnectVerse! مساهمتك تساعد في جعل المنصة أفضل للجميع.

Thank you for your interest in contributing to ConnectVerse! Your contribution helps make the platform better for everyone.

**صُنع بـ ❤️ من قبل مجتمع ConnectVerse**
**Made with ❤️ by the ConnectVerse community**
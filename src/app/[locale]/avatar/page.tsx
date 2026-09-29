import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { avatars } from '@/content/avatars';

export default async function AvatarHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🪷</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B1E1E] dark:text-[#FF9933] mb-4">
            {locale === 'en' ? 'Avatars of Narayan' : 'नारायण के अवतार'}
          </h1>
          <p className="text-lg text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'The nine divine descents of Lord Vishnu to protect dharma and destroy evil'
              : 'धर्म की रक्षा और अधर्म के नाश के लिए भगवान विष्णु के नौ दिव्य अवतार'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {avatars.map((avatar) => {
            const name = avatar.name[locale as 'hi' | 'en'] ?? avatar.name.hi;
            const form = avatar.form[locale as 'hi' | 'en'] ?? avatar.form.hi;
            const story = avatar.story[locale as 'hi' | 'en'] ?? avatar.story.hi;
            return (
              <Link key={avatar.slug} href={`/avatar/${avatar.slug}`}
                className="block p-6 border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded-lg hover:border-[#D4AF37] hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">{avatar.icon}</div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#D4AF37]">
                      {locale === 'en' ? `Avatar ${avatar.number}` : `अवतार ${avatar.number}`}
                    </div>
                    <h2 className="text-lg font-bold text-[#7B1E1E] dark:text-[#FF9933]">{name}</h2>
                  </div>
                </div>
                <p className="text-sm italic text-[#1A1A1A]/60 dark:text-[#F5F5F5]/60 mb-3">{form}</p>
                <p className="text-sm text-[#1A1A1A]/70 dark:text-[#F5F5F5]/70 line-clamp-3">{story}</p>
                <div className="mt-4 text-xs text-[#D4AF37]">
                  {avatar.texts.length} {locale === 'en' ? 'texts →' : 'पाठ →'}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
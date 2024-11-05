'use client';

import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';

const languageNames = {
  en: 'English',
  hi: 'हिंदी',
  kn: 'ಕನ್ನಡ',
};

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function handleLanguageChange(newLang: string) {
    const nextLocale = newLang as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div
      className={clsx(
        'flex items-center gap-2',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <Select
        value={locale}
        onValueChange={handleLanguageChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {languageNames[cur as keyof typeof languageNames]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('AdminPage');
  return (
    <h1 className="text-center text-2xl">{t('WelcomeBackendHomePage')}</h1>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const t = useTranslations('Home');

  return (
    <div className={cn('mt-8')}>
      <h1 className="text-4xl font-bold text-center">
        {t('WelcomeToYourNextjsApp')}
      </h1>

      <div className="flex justify-center mt-4">
        <Button
          variant="default"
          className={cn('mr-4')}
          onClick={() =>
            toast({
              title: t('Hello'),
              description: t('ThisIsAToast'),
              variant: 'default',
            })
          }
        >
          {t('DisplayToast')}
        </Button>
        <Button
          className={cn('mr-4')}
          variant="secondary"
          onClick={() => setDialogOpen(true)}
        >
          {t('Open Dialog')}
        </Button>
        <Button className={cn('mr-4')} variant="success">
          <Link href="/admin">{t('GoToAdminPage')}</Link>
        </Button>
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className={cn('bg-card')}>
          <DialogHeader>
            <DialogTitle>{t('DialogExample')}</DialogTitle>
            <DialogDescription>
              {t('DialogDescription', {
                defaultMessage:
                  "Here's an example of Dialog content. You customize this content to suit your needs.",
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h4 className="text-sm font-medium">{t('MainContent')}</h4>
            <p className="text-sm text-muted-foreground mt-2">
              {t('DialogMainContent')}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Tiger The Royal Signatures',
  description: 'Get in touch with Tiger The Royal Signatures. Visit our stores, call us, or send a message — we\'d love to hear from you.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Matrix Learning',
    description: 'Learn how Matrix Learning protects your personal data and ensures a secure educational environment.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

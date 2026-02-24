import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Matrix Learning',
    description: 'Read the official terms and conditions for Matrix Learning. Learn about our community guidelines and educational policies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

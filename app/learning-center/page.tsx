import type { Metadata } from 'next';
import MatrixLearningClient from './MatrixLearningClient';

export const metadata: Metadata = {
    title: 'Matrix Learning - Empowering Tomorrow\'s Leaders in STEM',
    description: 'Matrix Learning is a student-led nonprofit providing advanced education in Computer Science, Mathematics, and STEM fields to everyone.',
    keywords: [
        'Matrix Learning',
        'STEM Education',
        'Computer Science Tutoring',
        'Advanced Mathematics',
        'Student-led Nonprofit',
        'Coding Classes',
        'Engineering Prep',
        'Richmond STEM Tutoring',
        'Matrix Learning Courses'
    ],
    alternates: {
        canonical: "https://matrixlearning.org/learning-center",
    },
    openGraph: {
        title: 'Matrix Learning - Advanced STEM Education',
        description: 'Providing quality STEM education through student-led mentorship and advanced curriculums.',
    },
};

export default function MatrixLearningPage() {
    return <MatrixLearningClient />;
}

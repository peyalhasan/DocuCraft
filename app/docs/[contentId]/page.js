import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const ContentPage = async ({ params }) => {
    const { contentId } = await params;
    return (
        <div>
            <ContentDisplay id={contentId} />
        </div>
    );
};

export default ContentPage;
import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const SbuContentPage= async({params}) => {
    const {subContentId} = await params
    return (
        <div>
            <ContentDisplay id={subContentId} />
        </div>
    );
};

export default SbuContentPage;
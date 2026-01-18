import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByCategory } from '@/utils/doc-util';
import React from 'react';

const CategoryPage = async ({ params }) => {
    const { category } = await params
    const docs = getDocuments()
    const matchedDocuments = getDocumentsByCategory(docs, category)
    return (
        <div>
            <ContentDisplay id={matchedDocuments[0].id} />
        </div>
    );
};

export default CategoryPage;
import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByAuthor } from '@/utils/doc-util';
import React from 'react';

const AuthorPage = async ({ params }) => {
    const { name } = await params
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByAuthor(docs, name);
    return (
        <div>
            <ContentDisplay id={matchedDocuments[0].id} />
        </div>
    );
};

export default AuthorPage;
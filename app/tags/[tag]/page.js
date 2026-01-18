import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByTag } from '@/utils/doc-util';
import React from 'react';

const TagPage = async({params}) => {
    const {tag} = await params;
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByTag(docs, tag)
    console.log(matchedDocuments)
    return (
        <ContentDisplay id={matchedDocuments[0].id} />
    );
};

export default TagPage;
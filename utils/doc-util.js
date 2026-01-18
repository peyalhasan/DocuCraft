export function getDocumentsByCategory(docs, category) {
    return docs.filter(doc => doc.category === category)
}

export function getDocumentsByAuthor(docs, author) {
    const name = decodeURIComponent(author)
    return docs.filter(doc => doc.author === name)
    
}

export function getDocumentsByTag(docs, tag){
    return docs.filter(doc => doc.tags.some(inputTag => inputTag === tag))
}
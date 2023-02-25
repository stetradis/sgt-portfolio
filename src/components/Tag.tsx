type CardTag = {
    tagNames: string[];
}

const Tag = (props: CardTag) => {
    const tags = props.tagNames;
    return (
        <>
        {tags.map((tag) => {
            return <span key={`tag-${tag}`} className="tag">{tag}</span>;
        })}
        </>
        
        
    );
}

export default Tag;
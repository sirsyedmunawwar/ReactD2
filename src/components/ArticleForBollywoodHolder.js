import React from 'react'
import ArticleForBollywood from './ArticleForBollywood'
import article from "./ArticleForBollywood.json"

export default function ArticleForBollywoodHolder() {
    return (
        <div>
            <ArticleForBollywood updater={article}/>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Article = () => {
    const [article, setArticle] = useState({});
    const { id } = useParams(); // This gets the article ID from the URL

    useEffect(() => {
        axios.get(`http://localhost:5000/articles/${id}`)
            .then(res => {
                setArticle(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]); // This effect runs when the ID changes

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default Article;

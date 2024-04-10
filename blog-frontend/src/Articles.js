import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './articles.css'; // Import the CSS file

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/articles')
            .then(res => {
                setArticles(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="articles-container">
            <h1>Articles</h1>
            {articles.map((article, index) => (
                <div key={index} className="article">
                    <Link to={`/articles/${article.id}`} className="article-link">
                        <h2 className="article-title">{article.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Articles;

import React from 'react';
import ArticleItem from './ArticleItem';
import './style.css';

const ArticleList = ({ articles }) => {
  return (
    <div className='blogList-wrap'>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
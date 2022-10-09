import React from 'react';
import '../../App.css';
import Video from '../Video';
import BlogList from '../BlogList/';
import { tutorialList } from '../config/tutorialList';
import TutorialHeader from '../TutorialHeader';
import ArticleHeader from '../ArticleHeader';
import Footer from '../Footer';
import ArticleList from '../ArticleList/';
import { articleList } from '../config/articleList';



function Home() {
  return (
    <>
      <Video />
      <ArticleHeader />
      <ArticleList articles={articleList} />
      <TutorialHeader />
      <BlogList blogs={ tutorialList }/>
      <Footer />
    </>
  );
}

export default Home;
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { ActionCreators } from '../../redux/slice';
import BlogList from '../../components/list';
import BlogItem from '../../components/list/BlogItem';
import { ContentContainer } from '../../../shared/layout/Layout.Styled';
import { getCollection } from '../../../../firebase/query';

const BlogContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.blog.list);

  const getBlogList = async () => {
    const result = await getCollection('blog');
    dispatch(ActionCreators.setBlogList(result));
  };

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <BlogList data={list}>
          {(item, index) => <BlogItem item={item} index={index} />}
        </BlogList>
      </ContentContainer>

    </Container>
  );
};

const Container = styled.div`
  padding: 80px 0;
  
`;

export default BlogContainer;

import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';

const InfiniteScroll = () => {
  const userStories = [
    {
      id: 1,
      firstName: 'Jonathan',
    },
    {
      id: 2,
      firstName: 'Johnss',
    },
    {
      id: 3,
      firstName: 'Jamesddd',
    },
    {
      id: 4,
      firstName: 'Jackfe',
    },
    {
      id: 5,
      firstName: 'Jasminevre',
    },
    {
      id: 6,
      firstName: 'Jaspercewf',
    },
    {
      id: 7,
      firstName: 'Jasminerew',
    },
    {
      id: 8,
      firstName: 'Jasminewqfd',
    },
    {
      id: 9,
      firstName: 'Jasperfew',
    },
    {
      id: 10,
      firstName: 'Jasminegrw',
    },
    {
      id: 11,
      firstName: 'Jasperth',
    },
    {
      id: 12,
      firstName: 'Jasminehtr',
    },
    {
      id: 13,
      firstName: 'Jasperhtr',
    },
    {
      id: 14,
      firstName: 'Jasmineerg',
    },
    {
      id: 15,
      firstName: 'Jasperbyh',
    },
  ];

  const userStoriesPagez = 5;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = React.useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = React.useState(
    [],
  );
  const [isLoadingUserStories, setIsLoadingUserStories] = React.useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getIntialData = pagination(userStories, 1, userStoriesPagez);
    setUserStoriesRenderedData(getIntialData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.warn('Berhasil');
          if (isLoadingUserStories) {
            return;
          }
          setIsLoadingUserStories(true);
          const contentToAppend = pagination(
            userStories,
            userStoriesCurrentPage + 1,
            userStoriesPagez,
          );
          if (contentToAppend.length > 0) {
            setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
            setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserStories(false);
        }}
        data={userStoriesRenderedData}
        renderItem={({item}) => (
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'blue',
                width: 82,
                height: 82,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: 'orange',
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'gray',
                  borderRadius: 50,
                  margin: 1,
                  borderWidth: 2,
                  borderColor: 'white',
                }}></View>
            </View>
            <Text>{item.firstName}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  );
};

export default InfiniteScroll;

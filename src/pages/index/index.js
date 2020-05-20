import * as React from 'react';
import { View, Text, Image, navigateTo } from 'remax/one';
import Icon from 'anna-remax-ui/esm/icon';
import Button from 'anna-remax-ui/esm/button';
import styles from './index.css';

export default () => {
  const handleClick = () => {
    navigateTo({url: '/pages/test1/index'})
  }
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
        <Icon type="close" color="#0099CC">这是一个Icon</Icon>
        <Button onTap={handleClick}>test1</Button>
      </View>
    </View>
  );
};

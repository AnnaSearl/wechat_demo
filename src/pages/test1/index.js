import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import Icon from 'anna-remax-ui/esm/icon';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View className={styles.text}>
          哈哈哈哈哈哈哈
        </View>
        <Icon type="close" color="#0099CC">这是一个Icon</Icon>
      </View>
    </View>
  );
};

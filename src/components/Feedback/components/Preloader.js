import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../theme';
import {Button} from '../../Button';
import LottieView from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {feedbackAction} from '../../../store/actions';

const Preloader = () => {
  const {loading, onRequestClose, failed, retryAction} = useSelector(
    ({feedback}) => feedback,
  );
  // const dispatch = useDispatch();
  return (
    <Modal
      visible={loading}
      onRequestClose={onRequestClose}
      animationType="fade"
      // animationType="slide"
      transparent>
      <View style={styles.modal}>
        {!failed ? (
          <LottieView
            source={require('./preloader.json')}
            autoPlay
            loop
            style={{
              width: 250,
              height: 200,
            }}
          />
        ) : (
          <Button label="Reload" onPress={retryAction} />
        )}
      </View>
    </Modal>
  );
};

export default Preloader;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#00000090',
  },
});



// import React from 'react';
// import { Modal, StyleSheet, View} from 'react-native';
// import {ActivityIndicator} from 'react-native-paper';
// import {colors} from '../../../theme';
// import { Button } from '../../Button';

// const Preloader = ({visible, onRequestClose, failed=false, retryAction}) => {
//   return (
//     <Modal
//       visible={visible}
//       onRequestClose={onRequestClose}
//       animationType="slide"
//       transparent>
//       <View style={styles.modal}>
//         {!failed ? (
//           <ActivityIndicator size="large" color={colors.primary.main} />
//         ) : (
//           <Button label="Reload" onPress={retryAction} />
//         )}
//       </View>
//     </Modal>
//   );
// };

// export default Preloader;

// const styles = StyleSheet.create({
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     flex: 1,
//     backgroundColor: '#00000080',
//   },
// });

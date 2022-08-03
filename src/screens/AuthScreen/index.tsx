import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import RNOtpVerify from 'react-native-otp-verify';
import {TextInputMask} from 'react-native-masked-text';

import {useAppDispatch, useAppSelector, useKeyboard} from 'hooks/redux-hooks';

import {sizeV} from 'styles';
import styles from './styles';
import {isIos} from 'utils/constants';
import navigationService from 'navigation/navigation-service';
import {BASE_ROUTES} from 'navigation/routes';
import {confirmation, registration} from 'stores/actions/main-actions';
import {IUserData} from 'interfaces';

const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const {verificationId, userId, loader, error} = useAppSelector(
    state => state.mainState,
  );

  const [keyboardHeight] = useKeyboard();
  const [step, setStep] = useState(1);
  const [confirmCode, setConfirmCode] = useState('');
  const [regData, setRegData] = useState<IUserData>({
    phone: '',
    fullName: '',
  });

  useEffect(() => {
    if (!isIos) {
      console.log('this line');

      RNOtpVerify.getOtp()
        .then(() => RNOtpVerify.addListener(otpHandler))
        .catch(p => console.log(p));

      return () => RNOtpVerify.removeListener();
    }
  }, []);

  useEffect(() => {
    if (verificationId) {
      setStep(2);
    }
  }, [verificationId]);

  useEffect(() => {
    if (userId) {
      navigationService.navigate(BASE_ROUTES.MAIN);
    }
  }, [userId]);

  useEffect(() => {
    console.log('error: = ', error);
  }, [error]);

  const otpHandler = (message: string) => {
    console.log(message, '>>>');

    //setRegData(prev => ({...prev, code: otp}));
    //RNOtpVerify.removeListener();
  };

  const translateY = useMemo(() => {
    let res = 0;
    if (35 * sizeV < keyboardHeight) {
      res = 35 * sizeV - keyboardHeight;
    }
    return res;
  }, [keyboardHeight]);

  const onPressBtn = () => {
    if (step === 1) {
      dispatch(registration(regData));
    } else {
      if (verificationId) {
        dispatch(
          confirmation({verificationId, code: confirmCode.replace(/\s/g, '')}),
        );
      }
    }
  };

  return (
    <View style={{...styles.container, transform: [{translateY}]}}>
      <View style={styles.header} />
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyHeaderTextStyle}>AKS.MARKET</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitleStyle}>Мобильный телефон</Text>
            <TextInputMask
              keyboardType="number-pad"
              type="custom"
              options={{
                mask: '+998 (99) 999 99 99',
              }}
              value={regData.phone}
              style={styles.inputStyle}
              onChangeText={phone => {
                setRegData(prev => ({
                  ...prev,
                  phone: phone.replace(/\D/g, ''),
                }));
              }}
              placeholder={'+7 (_ _ _) _ _ _  _ _  _ _'}
            />
          </View>
          {step === 1 ? (
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitleStyle}>Ваше имя</Text>
              <TextInput
                value={regData.fullName}
                placeholder="Введите ваше имя"
                onChangeText={fullName =>
                  setRegData(prev => ({...prev, fullName}))
                }
                style={styles.inputStyle}
              />
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitleStyle}>Код из SMS</Text>
              <TextInputMask
                keyboardType="number-pad"
                type="custom"
                options={{
                  mask: '9 9 9 9 9',
                }}
                value={confirmCode}
                style={styles.inputStyle}
                onChangeText={code => {
                  setConfirmCode(code);
                }}
                placeholder={'_ _ _ _ _'}
              />
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.buttonStyle]}
            disabled={!regData.phone}
            onPress={onPressBtn}>
            {loader ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.buttonTextStyle}>
                {step === 1 ? 'Получить SMS' : 'Подтвердить'}
              </Text>
            )}
          </TouchableOpacity>
          <View>
            <Text>{error}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTextStyle}>
            Политика конфиденциальности
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from 'stores/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useKeyboard = (): [number] => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  function onKeyboardDidShow(e: KeyboardEvent): void {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide(): void {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return (): void => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return [keyboardHeight];
};

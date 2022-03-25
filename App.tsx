import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { useAppSelector } from './hooks/useAppRedux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './redux/store';
import AuthScreen from './screens/AuthScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
}

const MainApp = () => {
  const { isLoggedIn } = useAppSelector((state) => state.global);
  const colorScheme = useColorScheme();

  return isLoggedIn ? (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  ) : (
    <AuthScreen />
  );
};

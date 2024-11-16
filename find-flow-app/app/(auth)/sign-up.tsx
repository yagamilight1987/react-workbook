import AppSafeAreaView from '@/components/AppSafeAreaView';
import Button from '@/components/Button';
import ClerkErrors from '@/components/ClerkErrors';
import EmailForm from '@/components/EmailForm';
import Logo from '@/components/Logo';
import OneTimePasswordForm from '@/components/OneTimePasswordForm';
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import { ClerkAPIError } from '@clerk/types';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

const SignUp = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();

  const handleEmailSubmission = async (email: string) => {
    setErrors([]);

    if (!isLoaded) {
      return;
    }

    try {
      setIsLoading(true);

      await signUp.create({
        emailAddress: email,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setShowOTPForm(true);
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        setErrors(error.errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeSubmission = async (code: string) => {
    setErrors([]);

    if (!isLoaded) {
      return;
    }

    try {
      setIsLoading(true);

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });

        router.replace('/home');
      }
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        setErrors(error.errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] items-center justify-center">
        <Logo />
        <Text className="text-secondary font-sRegular text-2xl mt-10 self-start">
          Sign-Up
        </Text>

        {showOTPForm ? (
          <>
            <OneTimePasswordForm
              onCodeSubmit={handleCodeSubmission}
              isLoading={isLoading}
            />
            <Button
              title="Back"
              onPress={() => setShowOTPForm(false)}
              containerStyles="mt-10 bg-transparent py-0"
            />
          </>
        ) : (
          <>
            <EmailForm
              onEmailSubmit={handleEmailSubmission}
              isLoading={isLoading}
            />

            <Text className="text-secondary font-sRegular mt-10">
              Already have an account?{' '}
              <Link replace href="/sign-in" className="text-white font-sMedium">
                Login
              </Link>
            </Text>
          </>
        )}

        <ClerkErrors errors={errors} />
      </View>
    </AppSafeAreaView>
  );
};

export default SignUp;

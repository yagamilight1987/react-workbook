import AppSafeAreaView from '@/components/AppSafeAreaView';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import OneTimePasswordForm from '@/components/OneTimePasswordForm';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { SignInFirstFactor, EmailCodeFactor } from '@clerk/types';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import EmailForm from '@/components/EmailForm';
import { ClerkAPIError } from '@clerk/types';
import ClerkErrors from '@/components/ClerkErrors';

const SignIn = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const handleEmailSubmission = async (email: string) => {
    setErrors([]);

    if (!isLoaded) return;

    try {
      setIsLoading(true);

      // Start the sign-in process using the email method
      const { supportedFirstFactors } = await signIn.create({
        identifier: email,
      });

      // Filter the returned array to find the 'email' entry
      const isEmailCodeFactor = (
        factor: SignInFirstFactor
      ): factor is EmailCodeFactor => {
        return factor.strategy === 'email_code';
      };
      const emailCodeFactor = supportedFirstFactors?.find(isEmailCodeFactor);

      if (emailCodeFactor) {
        // Grab the emailAddressId
        const { emailAddressId } = emailCodeFactor;

        // Send the OTP code to the user
        await signIn.prepareFirstFactor({
          strategy: 'email_code',
          emailAddressId,
        });

        // Set showOTPForm to true to display second form and capture the OTP code
        setShowOTPForm(true);
      }
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

    if (!isLoaded) return;

    try {
      setIsLoading(true);

      // Use the code provided by the user and attempt verification
      const completeSignIn = await signIn.attemptFirstFactor({
        strategy: 'email_code',
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (completeSignIn.status === 'complete') {
        await setActive({ session: completeSignIn.createdSessionId });
        router.replace('/home');
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(completeSignIn, null, 2));
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
          Login
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
              Don't have an account?{' '}
              <Link replace href="/sign-up" className="text-white font-sMedium">
                Sign up
              </Link>
            </Text>
          </>
        )}

        <ClerkErrors errors={errors} />
      </View>
    </AppSafeAreaView>
  );
};

export default SignIn;

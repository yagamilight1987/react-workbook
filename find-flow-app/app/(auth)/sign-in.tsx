import AppSafeAreaView from '@/components/AppSafeAreaView';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import OneTimePasswordForm from '@/components/OneTimePasswordForm';
import { useSignIn } from '@clerk/clerk-expo';
import { SignInFirstFactor, EmailCodeFactor } from '@clerk/types';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import EmailForm from '@/components/EmailForm';

const SignIn = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const handleEmailSubmission = async (email: string) => {
    console.log(email);

    if (!isLoaded) return;

    try {
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
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleCodeSubmission = async (code: string) => {
    console.log(code);
    if (!isLoaded) return;

    try {
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
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] items-center justify-center">
        <Logo />
        <Text className="text-secondary text-sRegular tracking-widest text-2xl mt-10">
          Login
        </Text>
        {showOTPForm ? (
          <>
            <OneTimePasswordForm onCodeSubmit={handleCodeSubmission} />
            <Button
              title="Back"
              onPress={() => setShowOTPForm(false)}
              containerStyles="mt-10 bg-transparent py-0"
            />
          </>
        ) : (
          <>
            <EmailForm onEmailSubmit={handleEmailSubmission} />
            <Text className="text-secondary font-sRegular mt-10">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-white font-sMedium">
                Sign up
              </Link>
            </Text>
          </>
        )}
      </View>
    </AppSafeAreaView>
  );
};

export default SignIn;

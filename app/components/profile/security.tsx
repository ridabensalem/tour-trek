'use client';
import { useState } from 'react';
import ProfileFrameElement from './profileFrame';
import { toast } from "react-hot-toast";
import axios from "axios";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";
import { useRouter } from "next/navigation";

const Security = () => { 
  const [showPasswordInputs, setShowPasswordInputs] = useState(false);
  const [showRecoveryInput, setShowRecoveryInput] = useState(false);
  const [showDeleteAccountForm, setShowDeleteAccountForm] = useState(false);
  const [showFeedbackTextarea, setShowFeedbackTextarea] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      recoveryEmail: ''
    },
  });
  const togglePasswordInputs = () => {
    setShowPasswordInputs(prevState => !prevState);
  };
  const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
    
  const handleSubmitPassword = () => {
    // Validation logic
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password must match.');
      return;
    }

    // Simulate loading state
    setIsLoading(true);

    // API call to update the password
    axios.put('/api/profile/security', {
      currentPassword,
      newPassword,
    })
      .then(() => {
        toast.success('Password updated successfully!');
        // Reset fields
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          toast.error('Failed to update password. Please try again.');
        } else {
          toast.error('Something went wrong! Please try again later.');
        }
        console.error('Error updating password:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const toggleRecoveryInput = () => {
    setShowRecoveryInput(prevState => !prevState);
  };

  const toggleDeleteAccountForm = () => {
    setShowDeleteAccountForm(prevState => !prevState);
  };

  const handleContinue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowFeedbackTextarea(true);
  };

  const handleBack = () => {
    setShowFeedbackTextarea(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.put('/api/profile/security', { recoveryEmail: data.recoveryEmail })
      .then(() => {
        toast.success('Recovery email updated!');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400 ) {
          toast.error('Something went wrong!');
        } else {
          toast.error('Something went wrong!');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleDeleteAccount = () => {
    // Logic to delete the account
    axios.delete('/api/profile/security')
      .then(() => {
        toast.success('Your account has been deleted successfully.');
        // Additional logic like redirecting the user 
        router.refresh();
        router.push("/");
      })
      .catch(error => {
        toast.error('Failed to delete your account. Please try again later.');
        console.error('Error deleting account:', error);
      });
  };
  
  return (
    <ProfileFrameElement text="Security">
      <div className="py-2 w-full mx-auto bg-white space-y-6 mb-4 px-6">
        <p className="text-base font-bold">
          Manage your security settings, set up secure authentication, or delete your account.
        </p>
      
        <div className="space-y-2">
  <div className="flex justify-between items-center">
    <div>
      <h2 className="text-lg font-semibold mt-4">Password</h2>
      <p className="text-base text-zinc-500 dark:text-zinc-400 border-b-2 w-[360px]">
        Last updated 1 day ago
      </p>
    </div>
    <button
      onClick={togglePasswordInputs}
      className="bg-pink-500 text-white px-4 py-2 rounded-md relative top-2 w-[70px]"
    >
      {showPasswordInputs ? 'Hide' : 'Reset'}
    </button>
  </div>

  {showPasswordInputs && (
    <div className="space-y-2 w-[350px] mx-auto">
      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:border-pink-500 focus:outline-none"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={handleNewPasswordChange}
        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:border-pink-500 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:border-pink-500 focus:outline-none"
      />
      <button
        onClick={handleSubmitPassword}
        className={`bg-[#162448] text-white px-4 py-2 rounded-md relative top-2 ${
          isLoading ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        {isLoading ? 'Updating...' : 'Update password'}
      </button>
    </div>
  )}
</div>

      
        <div className="space-y-2 mt-2">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Recovery Email</h2>
              <p className="text-base text-zinc-500 dark:text-zinc-400 border-b-2 w-[360px]">example@gmail.com</p>
            </div>
            <button
              onClick={toggleRecoveryInput}
              className="bg-pink-500 text-white px-4 py-2 rounded-md w-[70px]"
            >
              {showRecoveryInput ? 'Hide' : 'Add'}
            </button>
          </div>
          
          {showRecoveryInput && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-[350px] mx-auto">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:border-pink-500 focus:outline-none"
                {...register('recoveryEmail', { required: true })}
              />
              {errors.recoveryEmail && <span className="text-red-500">This field is required</span>}
              <button
                type="submit"
                className="bg-[#2C63EB] text-white px-4 py-2 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Add'}
              </button>
            </form>
          )}
        </div>
      
        <div className="space-y-2 mt-2">
          <div>
            <h2 className="text-lg font-semibold">Delete Account</h2>
            <p className="text-base text-zinc-500 dark:text-zinc-400 border-b-2 w-[358px]">
              Permanently delete your tourTrek.com account
              <button
                onClick={toggleDeleteAccountForm}
                className="ml-2"
              >
                {showDeleteAccountForm ? '▼' : '▶'}
              </button>
            </p>
          </div>

          {showDeleteAccountForm && !showFeedbackTextarea && (
            <div className="border-2 border-zinc-200 p-4 rounded-md">
              <div className="flex items-center justify-between">
                <p className="text-lg">Why do you want to delete your account?</p>
              </div>
              <form className="mt-4" onSubmit={handleContinue}>
                <div className="flex items-center mb-2">
                  <input id="option1" type="radio" name="reason" className="text-blue-600" />
                  <label className="ml-2 text-zinc-700">I get too many emails from TourTrek.com</label>
                </div>
                <div className="flex items-center mb-2">
                  <input id="option2" type="radio" name="reason" className="text-blue-600" />
                  <label className="ml-2 text-zinc-700">Privacy concerns</label>
                </div>
                <div className="flex items-center mb-4">
                  <input id="option3" type="radio" name="reason" className="text-blue-600" />
                  <label className="ml-2 text-zinc-700">I want to remove all my data</label>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 relative left-[400px]">Continue</button>
              </form>
            </div>
          )}

          {showFeedbackTextarea && (
            <div>
              <button onClick={handleBack} className="text-pink-500 mb-2 relative right-0">← Back</button>
              <div className="rounded-md flex flex-col items-end">
                <textarea
                  name="textarea"
                  minLength={10}
                  maxLength={30}
                  className="w-full h-32 px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:border-pink-500 focus:outline-none"
                  placeholder="Do you have any feedback you'd like to share before you go? We'll use it to fix problems and improve our services..."
                />
                <button type="submit" onClick={handleDeleteAccount} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2">
                    Delete your account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProfileFrameElement>
  ); 
}; 

export default Security;

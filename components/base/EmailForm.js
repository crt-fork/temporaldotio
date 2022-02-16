import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import clsx from 'clsx';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default function EmailForm({ data }) {
  const MAIL_CHIMP_URL = `${process.env.MAIL_CHIMP_HOST}/subscribe/post?u=${process.env.MAIL_CHIMP_USER}&amp;id=${process.env.MAIL_CHIMP_ID}`;

  const Message = ({ status, message, className }) => (
    <p role='alert'
      className={clsx(`text-sm px-3 mt-1 ${className}`,
        status === 'success' ? 'text-purple-400' : 'text-red-400',
      )} dangerouslySetInnerHTML={{ __html: message }}/>
  )

  const EmailForm = ({ data, status, message, onValidated }) => {
    const [messageState, setMessageState] = useState(null);
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validation = {
      required: false,
      pattern: {
        value: EMAIL_REGEX,
        message: 'please enter a valid email address'
      }
    };
    const { register, handleSubmit, formState: { errors }} = useForm({
      defaultValues: {
        EMAIL: '',
        b_2334a0f23e55fd1840613755d_3475f910fc: ''
      }
    });

    useEffect(() => {
      if (!!errors['EMAIL']) {
        setMessageState({ status: 'error', message: errors.EMAIL?.message });
      } else if (status === 'success') {
        setMessageState({ status: 'success', message: 'Thank you for signing up to our newsletter!' });
      } else if (status === 'error') {
        setMessageState({ status: 'error', message });
      } else {
        setMessageState(null)
      }
    }, [errors.EMAIL, message]);

    function onSubmit(data) {
      if (data.EMAIL && data.EMAIL.length) {
        onValidated({ ...data });
      }
    };

    return (
      <div className='mb-8 md:mb-32 relative'>
        <form className={clsx(
          "items-stretch flex mx-auto max-w-3xl px-10",
          messageState?.status === 'success' && 'hidden'
          )}
          onSubmit={handleSubmit(onSubmit)}>
          <input className={clsx(
            "flex-1 bg-white placeholder-gray-700::placeholder text-blue-700 rounded-l-lg py-3 px-4 focus:outline-none focus:shadow-outline shadow appearance-none border-solid",
            (messageState?.status === 'error')
              ? 'border-red-400 !text-red-400 focus:border-red-400 focus:text-red-400'
              : 'border-l-white border-t-white border-b-white border-r-black focus:border-blue-700'
            )}
            {...register('EMAIL', validation)}
            id="EMAIL"
            name="EMAIL"
            type="email"
            placeholder={data.input.placeholder || ''}
            aria-invalid={errors.EMAIL ? "true" : "false"}
            aria-label="email sign up"
          />
          <button className={clsx(
            'self-stretch text-center bg-slate-100 text-black rounded-r-lg rounded-l-none bg-blue-100 border hover:text-white hover:bg-blue-700 pl-4 pr-5 flex cursor-pointer'
            )}
            title={data.submitBtn.copy || 'Subscribe'}
            aria-label="submit"
            type="submit"
            value={data.submitBtn.copy || 'Subscribe'}>
            <FontAwesomeIcon className="h-6 self-center"
              focusable={true}
              title={data.submitBtn.copy}
              alt={data.submitBtn.copy}
              icon={["fal", data.submitBtn.icon]}/>
          </button>
        </form>
        {!!messageState && (
          <Message className="block absolute w-full bottom-[-34px] text-center pt-2.5"
            status={messageState.status}
            message={messageState.message}/>
        )}
      </div>
    )
  }

  return (
    <MailchimpSubscribe
      url={MAIL_CHIMP_URL}
      render={({subscribe, status, message}) => (
        <EmailForm
          data={data}
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}/>
      )}/>
  );
}

import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function (
  { onSave, children, ...otherProps },
  forwardedRef
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(forwardedRef, () => {
    return {
      clear() {
        console.log('CLEARING');
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;

"use client";

import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from '@nextui-org/button';


export function SubmitButton({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} type="submit" aria-disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign Up"}{" "}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      <div className="space-y-6">
        <div className="flex flex-col mb-5">
          <Label htmlFor="name" className="mb-1">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Nmail"
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col mb-5">
          <Label htmlFor="email" className="mb-1">
            Email
          </Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col mb-6">
          <Label htmlFor="email" className="mb-1">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex flex-col mb-6">
          <Label htmlFor="email" className="mb-1">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div>
          <SignUpButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-800">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignUpForm;

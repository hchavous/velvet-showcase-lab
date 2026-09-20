import { FormEvent, useState } from "react";
import { Eye, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const REVIEW_ACCESS_KEY = "kateri-review-unlocked";
const REVIEW_PASSWORD = "carebear";

interface ReviewPasswordGateProps {
  title: string;
  buttonLabel: string;
  inputId: string;
  onUnlock: () => void;
}

const ReviewPasswordGate = ({ title, buttonLabel, inputId, onUnlock }: ReviewPasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === REVIEW_PASSWORD) {
      sessionStorage.setItem(REVIEW_ACCESS_KEY, "true");
      onUnlock();
      return;
    }
    setError("That password did not work. Please try again.");
  };

  const errorId = `${inputId}-error`;

  return (
    <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="w-full max-w-md rounded-lg border border-border/60 bg-card p-7 shadow-sm md:p-9">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <LockKeyhole className="h-5 w-5" />
        </div>
        <p className="mb-2 text-xs font-semibold uppercase text-primary">Private review</p>
        <h1 className="mb-3 text-3xl font-semibold">{title}</h1>
        <p className="mb-7 text-muted-foreground">Enter the review password to continue.</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor={inputId} className="mb-2 block text-sm font-medium">Password</label>
            <Input
              id={inputId}
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              aria-describedby={error ? errorId : undefined}
              aria-invalid={Boolean(error)}
              autoComplete="current-password"
              autoFocus
            />
          </div>
          {error && <p id={errorId} className="text-sm text-destructive" role="alert">{error}</p>}
          <Button type="submit" className="w-full gap-2">
            <Eye className="h-4 w-4" />
            {buttonLabel}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ReviewPasswordGate;
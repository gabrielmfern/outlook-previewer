import { useEffect, useId } from "react";

const lastValues = new Map<string, unknown>();

export function useLastDefinedValue<T>(value: T | undefined): T | undefined {
  const id = useId();

  useEffect(() => {
    if (value !== undefined) {
      lastValues.set(id, value);
    }
  }, [id, value]);

  return value ?? (lastValues.get(id) as T | undefined);
}

type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassValue[]
  | { [key: string]: any };

export function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const process = (input: ClassValue): void => {
    if (!input) return;

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      input.forEach(process);
    } else if (typeof input === 'object') {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  };

  inputs.forEach(process);
  return classes.join(' ');
}

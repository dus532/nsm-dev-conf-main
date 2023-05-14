export const asyncUserEffect =
  (key: string) =>
  ({ onSet, setSelf }: any) => {
    if (typeof window === 'undefined') return;
    const savedValue = window.localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? window.localStorage.removeItem(key)
        : window.localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

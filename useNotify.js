

import { useCallback, useState } from "react";

const DEFAULT_DURATION = 3000;

export function useNotify(options = {}) {
  const [notifications, setNotifications] = useState([]);

  const defaultDuration = options.duration ?? DEFAULT_DURATION;

  const notify = useCallback(
    (message, type = "info", duration = defaultDuration) => {
      const id = Date.now() + Math.random();

      setNotifications((current) => [
        ...current,
        {
          id,
          message,
          type,
        },
      ]);

      if (duration > 0) {
        setTimeout(() => {
          setNotifications((current) =>
            current.filter((notification) => notification.id !== id)
          );
        }, duration);
      }

      return id;
    },
    [defaultDuration]
  );

  const success = useCallback(
    (message, duration) => notify(message, "success", duration),
    [notify]
  );

  const error = useCallback(
    (message, duration) => notify(message, "error", duration),
    [notify]
  );

  const warning = useCallback(
    (message, duration) => notify(message, "warning", duration),
    [notify]
  );

  const info = useCallback(
    (message, duration) => notify(message, "info", duration),
    [notify]
  );

  const dismiss = useCallback((id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  }, []);

  const dismissAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return {
    notifications,
    notify,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
  };
}
